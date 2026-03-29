# Tareas Human-in-the-Loop

Acciones que requieren intervención manual. Revisalas regularmente para que el proceso no se frene.

> Estado: `pendiente` → `en progreso` → `listo`

---

## Bloqueantes (el proceso no puede continuar sin esto)

| # | Tarea | Por qué bloquea | Estado |
|---|-------|-----------------|--------|
| 1 | Conectar repo GitHub a este folder (`git remote add origin <url>`) | Necesario para hacer deploy a Vercel | listo ✓ |
| 2 | Crear cuenta en Vercel y conectar el repo | Deploy de producción | pendiente |
| 3 | Apuntar dominio `vibeiscoding.com` a Vercel (DNS) | El sitio no estará en el dominio correcto sin esto | pendiente |
| 4 | Crear cuenta en Mailchimp y obtener la URL del formulario embed | La integración del newsletter la necesita | pendiente |
| 5 | Crear cuenta en Umami Cloud (umami.is) y obtener `websiteId` + URL del script | Analytics no funcionará sin esto | pendiente |

---

## Revisión y Aprobación (el proceso espera tu OK)

| # | Tarea | Fase | Estado |
|---|-------|------|--------|
| 6 | Revisar y aprobar el sitemap y navegación generados por Digital Strategist | Fase 0 | pendiente |
| 7 | Revisar y aprobar los 5 proyectos generados por Vibe Coding Expert | Fase 0 | pendiente |
| 8 | Revisar y aprobar el copy (hero, about, microcopy) generado por Copywriter | Fase 0 | pendiente |
| 9 | Revisar y aprobar el design system unificado | Fase 0 | pendiente |
| 10 | Revisar el sitio localmente antes de hacer deploy (`npm run dev`) | Fase 5 | pendiente |
| 11 | Aprobar y hacer push del primer release a GitHub | Fase 5 | pendiente |

---

## Configuración de Variables de Entorno

Antes del deploy, crear el archivo `.env.local` con estos valores:

```env
# Mailchimp
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_DC=          # ej: us21

# Umami
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_UMAMI_SCRIPT_URL=
```

---

## Decisiones Pendientes

| # | Decisión | Opciones | Estado |
|---|----------|----------|--------|
| 12 | Confirmar nombre de las secciones del menú (Digital Strategist lo propone, vos elegís) | A definir en Fase 0 | pendiente |
| 13 | Elegir imagen hero del homepage (CSS gradient puro o imagen de fondo) | Gradient / Imagen Unsplash | pendiente |
| 14 | Definir si el newsletter va en español o conserva el inglés ("Stay Encrypted") | Español / Inglés / Spanglish | pendiente |

---

## Completadas

_(se mueven acá cuando estén listas)_
