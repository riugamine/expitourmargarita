# Dockerfile optimizado para Next.js 15 con modo standalone
# Proyecto: expitourmargarita.com

# ===========================================
# ETAPA 1: DEPENDENCIAS
# ===========================================
FROM node:24.4.1-alpine AS deps

# Instalamos dependencias del sistema necesarias
RUN apk add --no-cache libc6-compat

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos solo los archivos de dependencias
COPY package.json package-lock.json* ./

# Instalamos SOLO las dependencias de producción
RUN npm ci --omit=dev && npm cache clean --force

# ===========================================
# ETAPA 2: CONSTRUCCIÓN
# ===========================================
FROM node:24.4.1-alpine AS builder
WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json package-lock.json* ./

# Instalamos TODAS las dependencias (incluyendo devDependencies) para el build
RUN npm install

# Copiamos todo el código fuente
COPY . .

# Configuramos variables de entorno para el build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Construimos la aplicación (modo standalone)
RUN npm run build

# ===========================================
# ETAPA 3: PRODUCCIÓN
# ===========================================
FROM node:24.4.1-alpine AS runner
WORKDIR /app

# Creamos un usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Configuramos variables de entorno
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copiamos archivos públicos (desde el contexto original)
COPY --chown=nextjs:nodejs public ./public

# Creamos directorio .next con permisos correctos
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiamos la aplicación construida (modo standalone)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiamos al usuario no-root (seguridad)
USER nextjs

# Exponemos el puerto 3000
EXPOSE 3000

# Configuramos variables del servidor
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar la aplicación
CMD ["node", "server.js"]

