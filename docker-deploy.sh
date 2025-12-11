#!/bin/bash

# Script de Deployment Docker para expitourmargarita.com
# Uso: ./docker-deploy.sh [deploy|update|logs|status|ssl|help]

set -e  # Exit on any error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

# Función helper para detectar y usar docker-compose
# Compatible con Docker Compose V1 (docker-compose) y V2 (docker compose)
docker_compose_cmd() {
    if command -v docker-compose &> /dev/null; then
        docker-compose "$@"
    elif docker compose version &> /dev/null 2>&1; then
        docker compose "$@"
    else
        error "Docker Compose no está instalado. Instálalo primero."
    fi
}

# Verificar que Docker esté instalado
check_docker() {
    if ! command -v docker &> /dev/null; then
        error "Docker no está instalado. Instálalo primero."
    fi
    
    # Verificar Docker Compose V1 (docker-compose) o V2 (docker compose)
    if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null 2>&1; then
        error "Docker Compose no está instalado. Instálalo primero."
    fi
    
    success "Docker y Docker Compose están instalados"
}

# Verificar archivo .env.local
check_env() {
    if [ ! -f ".env.local" ]; then
        warning "Archivo .env.local no encontrado"
        log "Por favor, crea un archivo .env.local con tus variables de entorno"
        warning "Archivo .env.local es necesario para el deployment"
        read -p "Presiona Enter cuando hayas configurado las variables de entorno..."
    fi
    success "Variables de entorno configuradas"
}

# Función de deployment inicial
deploy() {
    log "Iniciando deployment inicial de expitourmargarita.com..."
    
    check_docker
    check_env
    
    log "Construyendo imagen Docker..."
    docker_compose_cmd build
    
    log "Ejecutando contenedores..."
    docker_compose_cmd up -d
    
    log "Esperando que los servicios estén listos..."
    sleep 10
    
    # Verificar health check
    if curl -s http://localhost:3000 > /dev/null; then
        success "Aplicación desplegada correctamente"
    else
        warning "Aplicación desplegada pero health check falló"
    fi
    
    log "Verificando estado de contenedores..."
    docker_compose_cmd ps
    
    success "Deployment completado!"
    echo
    echo "🌐 Tu aplicación está disponible en:"
    echo "   • http://localhost:3000 (directo - Next.js)"
    echo "   • https://exitourmargarita.com (externo - Nginx del sistema)"
    echo
    echo "📋 Próximos pasos:"
    echo "   1. Configura SSL con: ./docker-deploy.sh ssl"
    echo "   2. Configura tu dominio para apuntar a este servidor"
    echo "   3. Verifica el estado con: ./docker-deploy.sh status"
}

# Función de actualización
update() {
    log "Iniciando actualización de expitourmargarita.com..."
    
    check_docker
    
    log "Parando contenedores..."
    docker_compose_cmd down
    
    log "Reconstruyendo imagen..."
    docker_compose_cmd build --no-cache
    
    log "Ejecutando contenedores actualizados..."
    docker_compose_cmd up -d
    
    log "Esperando que los servicios estén listos..."
    sleep 10
    
    # Verificar health check
    if curl -s http://localhost:3000 > /dev/null; then
        success "Aplicación actualizada correctamente"
    else
        error "Error en la actualización - health check falló"
    fi
    
    log "Limpiando imágenes no usadas..."
    docker image prune -f
    
    success "Actualización completada!"
}

# Función para ver logs
logs() {
    log "Mostrando logs de la aplicación..."
    docker_compose_cmd logs -f
}

# Función para ver estado
status() {
    log "Estado de los contenedores:"
    docker_compose_cmd ps
    
    echo
    log "Uso de recursos:"
    docker stats --no-stream
    
    echo
    log "Health check:"
    if curl -s http://localhost:3000 > /dev/null; then
        success "Aplicación saludable"
    else
        error "Aplicación no responde"
    fi
    
    echo
    log "Información del sistema:"
    echo "   • Docker version: $(docker --version)"
    # Mostrar versión de Docker Compose (V1 o V2)
    if command -v docker-compose &> /dev/null; then
        echo "   • Docker Compose version: $(docker-compose --version)"
    elif docker compose version &> /dev/null 2>&1; then
        echo "   • Docker Compose version: $(docker compose version)"
    fi
    echo "   • Uptime: $(uptime -p)"
    echo "   • Disk usage: $(df -h / | tail -1 | awk '{print $5}')"
}

# Función para configurar SSL
setup_ssl() {
    log "Configurando SSL con Certbot para expitourmargarita.com..."
    
    # Verificar que Certbot esté instalado
    if ! command -v certbot &> /dev/null; then
        log "Instalando Certbot..."
        sudo apt update
        sudo apt install -y certbot
    fi
    
    # Parar nginx del sistema temporalmente
    log "Parando Nginx del sistema temporalmente..."
    sudo systemctl stop nginx
    
    # Obtener certificado
    log "Obteniendo certificado SSL..."
    read -p "Ingresa tu email para el certificado: " email
    sudo certbot certonly --standalone -d exitourmargarita.com -d www.exitourmargarita.com --non-interactive --agree-tos --email "$email"
    
    # Configurar Nginx del sistema
    log "Configurando Nginx del sistema..."
    sudo tee /etc/nginx/sites-available/exitourmargarita.com > /dev/null << 'EOF'
# Redirigir HTTP a HTTPS
server {
    listen 80;
    server_name exitourmargarita.com www.exitourmargarita.com;
    return 301 https://$server_name$request_uri;
}

# Servidor HTTPS principal
server {
    listen 443 ssl http2;
    server_name exitourmargarita.com www.exitourmargarita.com;
    
    # Configuración SSL
    ssl_certificate /etc/letsencrypt/live/exitourmargarita.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/exitourmargarita.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Headers de seguridad
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Proxy a tu aplicación Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
    
    # Archivos estáticos con cache
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
        expires 1y;
    }
    
    # Favicon
    location = /favicon.ico {
        proxy_pass http://localhost:3000;
        access_log off;
        log_not_found off;
        expires 1y;
    }
}
EOF
    
    # Habilitar sitio
    sudo ln -sf /etc/nginx/sites-available/exitourmargarita.com /etc/nginx/sites-enabled/
    
    # Verificar configuración
    sudo nginx -t
    
    # Reiniciar nginx del sistema
    log "Reiniciando Nginx del sistema..."
    sudo systemctl start nginx
    
    # Configurar renovación automática
    log "Configurando renovación automática..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet && sudo systemctl reload nginx") | crontab -
    
    success "SSL configurado correctamente!"
    echo
    echo "🔐 Tu aplicación ahora está disponible en:"
    echo "   • https://exitourmargarita.com"
    echo "   • https://www.exitourmargarita.com"
    echo "   • http://exitourmargarita.com (redirige a HTTPS)"
    echo
    echo "📋 Arquitectura:"
    echo "   • Nginx del sistema (Puerto 80/443) → Next.js (Puerto 3000)"
}

# Función de ayuda
help() {
    echo "🐳 Script de Deployment Docker para expitourmargarita.com"
    echo
    echo "Uso: $0 [comando]"
    echo
    echo "Comandos disponibles:"
    echo "  deploy    - Deployment inicial de la aplicación"
    echo "  update    - Actualizar la aplicación"
    echo "  logs      - Ver logs en tiempo real"
    echo "  status    - Ver estado de la aplicación"
    echo "  ssl       - Configurar SSL con Certbot"
    echo "  help      - Mostrar esta ayuda"
    echo
    echo "Ejemplos:"
    echo "  $0 deploy    # Primera vez"
    echo "  $0 update    # Después de cambios en el código"
    echo "  $0 logs      # Ver qué está pasando"
    echo "  $0 status    # Verificar que todo esté bien"
}

# Función principal
main() {
    case "${1:-help}" in
        deploy)
            deploy
            ;;
        update)
            update
            ;;
        logs)
            logs
            ;;
        status)
            status
            ;;
        ssl)
            setup_ssl
            ;;
        help|--help|-h)
            help
            ;;
        *)
            error "Comando no reconocido: $1"
            help
            ;;
    esac
}

# Ejecutar función principal
main "$@"

