# 🚀 Guía de Deployment - exitourmargarita.com

Documentación completa para desplegar la aplicación Next.js con Docker en un servidor Ubuntu.

---

## 📚 Quick Start (30 minutos)

### 1. Instalar Dependencias

```bash
# Instalar Docker
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER && newgrp docker

# Instalar Docker Compose
# Opción 1: Docker Compose V2 (recomendado - viene con Docker Desktop)
# Si Docker se instaló con el script anterior, Compose V2 ya está incluido
docker compose version  # Verificar si está instalado

# Si no está instalado, instalar Docker Compose V2
sudo apt update
sudo apt install -y docker-compose-plugin

# Opción 2: Docker Compose V1 (si prefieres la versión standalone)
# Descargar la última versión
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verificar instalación
docker-compose --version  # Para V1
# o
docker compose version    # Para V2

# Instalar Nginx y Certbot
sudo apt update && sudo apt install -y nginx certbot git

# Configurar firewall
sudo ufw allow 22/tcp && sudo ufw allow 80/tcp && sudo ufw allow 443/tcp
sudo ufw enable
```

### 2. Clonar Proyecto

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/expitourmargarita.com.git
cd expitourmargarita.com/expitourmargarita

# Dar permisos a scripts
chmod +x docker-deploy.sh
```

### 3. Configurar Variables de Entorno

```bash
# Crear archivo de configuración
touch .env.local

# Editar con tus credenciales
nano .env.local
```

**Contenido mínimo de `.env.local`:**

```bash
# Production
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Aplicación
NEXTAUTH_URL=https://exitourmargarita.com
NEXTAUTH_SECRET=genera_con_openssl_rand_base64_32
```

### 4. Desplegar Aplicación

```bash
# Usar script automatizado
./docker-deploy.sh deploy
```

### 5. Configurar SSL

```bash
# Configurar certificado HTTPS
./docker-deploy.sh ssl
```

### 6. Verificar

```bash
# Verificar que todo funciona
curl https://exitourmargarita.com
```

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15.2.3
- **Runtime:** Node.js 24.4.1 (Alpine)
- **Contenedorización:** Docker + Docker Compose
- **Reverse Proxy:** Nginx
- **SSL:** Let's Encrypt (Certbot)
- **OS:** Ubuntu 20.04+ LTS

---

## 📋 Requisitos Previos

### Servidor

- ✅ Ubuntu 20.04 o superior
- ✅ Mínimo 2GB RAM (recomendado 4GB)
- ✅ Mínimo 20GB de espacio en disco
- ✅ Acceso SSH como root o usuario con sudo
- ✅ Dominio apuntando a la IP del servidor

### Software Necesario

Antes de comenzar, asegúrate de tener instalado:

- ✅ **Docker** (versión 20.10 o superior)
- ✅ **Docker Compose** (versión 1.29 o superior, o Compose V2)
- ✅ **Nginx** (para reverse proxy)
- ✅ **Certbot** (para certificados SSL)
- ✅ **Git** (para clonar el repositorio)

---

## 🔧 Instalación Detallada de Docker Compose

### Verificar si Docker Compose ya está instalado

```bash
# Verificar Docker Compose V2 (recomendado)
docker compose version

# Verificar Docker Compose V1
docker-compose --version
```

Si ambos comandos fallan, necesitas instalar Docker Compose.

### Instalar Docker Compose V2 (Recomendado)

Docker Compose V2 es un plugin de Docker y es la versión recomendada:

```bash
# Actualizar repositorios
sudo apt update

# Instalar Docker Compose plugin
sudo apt install -y docker-compose-plugin

# Verificar instalación
docker compose version
```

**Nota:** Con Docker Compose V2, el comando es `docker compose` (con espacio) en lugar de `docker-compose` (con guión).

### Instalar Docker Compose V1 (Alternativa)

Si prefieres la versión standalone de Docker Compose V1:

```bash
# Descargar la última versión de Docker Compose
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Dar permisos de ejecución
sudo chmod +x /usr/local/bin/docker-compose

# Crear enlace simbólico (opcional)
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Verificar instalación
docker-compose --version
```

**Versión específica:** Si necesitas instalar una versión específica de Docker Compose V1, reemplaza `${DOCKER_COMPOSE_VERSION}` con la versión deseada, por ejemplo: `v2.24.0`

### Solución de Problemas

#### Problema: "docker-compose: command not found"

```bash
# Verificar que el archivo existe
ls -la /usr/local/bin/docker-compose

# Si no existe, reinstalar
# Ver comandos de instalación arriba

# Verificar permisos
sudo chmod +x /usr/local/bin/docker-compose
```

#### Problema: "docker compose: command not found" (V2)

```bash
# Instalar el plugin de Docker Compose
sudo apt update
sudo apt install -y docker-compose-plugin

# Verificar que Docker está corriendo
sudo systemctl status docker

# Asegurarse de que el usuario está en el grupo docker
sudo usermod -aG docker $USER
newgrp docker
```

#### Verificar Compatibilidad

Este proyecto funciona con ambas versiones:
- **Docker Compose V1:** Usa `docker-compose` (con guión)
- **Docker Compose V2:** Usa `docker compose` (con espacio)

El script `docker-deploy.sh` usa `docker-compose` por compatibilidad, pero puedes actualizarlo para usar `docker compose` si tienes V2 instalado.

---

## 🎛️ Scripts Disponibles

### `docker-deploy.sh`

Script principal para gestionar el deployment:

```bash
./docker-deploy.sh deploy    # Deployment inicial
./docker-deploy.sh update    # Actualizar aplicación
./docker-deploy.sh logs      # Ver logs en tiempo real
./docker-deploy.sh status    # Ver estado del sistema
./docker-deploy.sh ssl       # Configurar SSL
./docker-deploy.sh help      # Mostrar ayuda
```

---

## 🏗️ Arquitectura de Deployment

```
┌─────────────────────────────────────────────────┐
│                   Internet                       │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│          Firewall (UFW)                         │
│          Puertos: 22, 80, 443                   │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│          Nginx (Sistema)                        │
│          - Reverse Proxy                        │
│          - SSL/TLS Termination                  │
│          - HTTP → HTTPS Redirect                │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│          Docker Container                       │
│                                                  │
│   ┌──────────────────────────────────────┐     │
│   │   Next.js 15 Application             │     │
│   │   - Node.js 24.4.1 Alpine            │     │
│   │   - Puerto 3000                      │     │
│   │   - Modo Standalone                  │     │
│   └──────────────────────────────────────┘     │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 🔄 Workflow de Deployment

### Deployment Inicial

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/expitourmargarita.com.git
cd expitourmargarita.com/expitourmargarita

# 2. Configurar variables de entorno
cp .env.example .env.local  # Si existe
# Editar .env.local con tus credenciales

# 3. Desplegar
./docker-deploy.sh deploy

# 4. Configurar SSL
./docker-deploy.sh ssl
```

### Actualizar Aplicación

```bash
# 1. Hacer commit de cambios
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# 2. En el servidor, actualizar
cd ~/expitourmargarita.com/expitourmargarita
./docker-deploy.sh update

# O manualmente:
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## ✅ Verificación Post-Deployment

### Checklist Básico

```bash
# 1. Verificar contenedores
docker compose ps
# ✅ Todos los contenedores deben estar "Up"

# 2. Verificar aplicación
curl http://localhost:3000
# ✅ Debe retornar HTML de la aplicación

# 3. Verificar Nginx
sudo systemctl status nginx
# ✅ Debe estar "active (running)"

# 4. Verificar SSL
curl https://exitourmargarita.com
# ✅ Debe funcionar sin errores

# 5. Verificar en navegador
# ✅ Abrir https://exitourmargarita.com
# ✅ El candado SSL debe estar verde
```

---

## 🐛 Troubleshooting Común

### Problema: Contenedor no inicia

```bash
# Ver logs detallados
docker compose logs -f expitourmargarita-app

# Verificar variables de entorno
cat .env.local | grep -v "^#" | grep -v "^$"

# Reconstruir desde cero
docker compose down
docker system prune -af
docker compose build --no-cache
docker compose up -d
```

### Problema: Error 502 Bad Gateway

```bash
# Verificar que el contenedor esté corriendo
docker compose ps

# Verificar logs de Nginx
sudo tail -f /var/log/nginx/error.log

# Verificar que la app responde
curl http://localhost:3000
```

### Problema: Certificado SSL no se genera

```bash
# Verificar DNS
nslookup exitourmargarita.com

# Verificar que el puerto 80 esté libre
sudo netstat -tlnp | grep :80

# Intentar en modo debug
sudo certbot certonly --standalone --dry-run \
  -d exitourmargarita.com \
  -d www.exitourmargarita.com \
  --email tu@email.com
```

---

## 🔄 Mantenimiento

### Actualizar Aplicación

```bash
# Método recomendado: Script automático
./docker-deploy.sh update

# Método manual
cd ~/expitourmargarita.com/expitourmargarita
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Renovar Certificado SSL

```bash
# Automático (ya configurado en cron)
# Se renueva automáticamente cada día

# Manual (si es necesario)
sudo certbot renew

# Verificar renovación
sudo certbot certificates
```

### Ver Logs

```bash
# Logs de la aplicación
docker compose logs -f expitourmargarita-app

# Logs de Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

---

## 📊 Monitoreo

### Recursos del Sistema

```bash
# Ver uso de CPU y RAM
htop

# Ver uso de Docker
docker stats

# Ver espacio en disco
df -h

# Ver memoria
free -h
```

### Estado de Servicios

```bash
# Estado general
./docker-deploy.sh status

# Estado de Docker
docker compose ps

# Estado de Nginx
sudo systemctl status nginx
```

---

## 📝 Notas Importantes

### Seguridad

- ✅ Nunca commitees el archivo `.env.local` a Git
- ✅ Usa secretos fuertes (mínimo 32 caracteres)
- ✅ Mantén las dependencias actualizadas
- ✅ Revisa logs regularmente

### Rendimiento

- ✅ El modo standalone de Next.js optimiza el tamaño
- ✅ Nginx cachea archivos estáticos automáticamente
- ✅ Docker limita recursos para prevenir sobrecarga
- ✅ SSL/TLS usa configuración moderna y rápida

---

## 🆘 Obtener Ayuda

### Comandos de Ayuda

```bash
# Ver ayuda del script principal
./docker-deploy.sh help

# Ver logs para diagnóstico
docker compose logs -f

# Ver estado del sistema
./docker-deploy.sh status
```

### Recursos Externos

- [Documentación de Docker](https://docs.docker.com/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Nginx](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/docs/)

---

## 📞 Información del Proyecto

**Proyecto:** exitourmargarita.com  
**Framework:** Next.js 15.2.3  
**Node Version:** 24.4.1  
**Deployment:** Docker + Nginx  
**Dominio:** exitourmargarita.com

---

**¡Feliz Deployment! 🚀**

Si sigues esta guía, tu aplicación estará corriendo en producción de manera segura, optimizada y profesional.

