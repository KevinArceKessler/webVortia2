# Vortia Web

Landing institucional de Vortia desarrollada con React, TypeScript y Vite.

## Desarrollo local

Requiere Node.js y npm.

```bash
npm ci
npm run dev
```

## Validaciones

```bash
npm run lint
npm run typecheck
npm run build
```

El build de producción se genera en `dist/`.

## Integraciones

- Formulario de contacto: `https://vortia-api.onrender.com/api/slack/contact`
- Webchat: widget nativo de Vortia configurado en `index.html`
- Agenda comercial: Google Calendar
- Demo de Vortia Inbox: WhatsApp del tenant de prueba inmobiliario

Las claves públicas y endpoints utilizados por el frontend no deben reemplazarse por secretos. Cualquier credencial privada debe permanecer en los servicios backend correspondientes.

## Deploy

El proyecto es un sitio estático. El proveedor debe ejecutar `npm ci && npm run build` y publicar el directorio `dist/`.

El build genera documentos HTML independientes para la portada y las páginas legales:

- `dist/index.html`
- `dist/privacidaddatos/index.html`
- `dist/terminoscondiciones/index.html`

Las rutas legales no deben reescribirse al `index.html` de la portada: sus documentos incluyen metadata específica para crawlers y revisiones de Meta.
