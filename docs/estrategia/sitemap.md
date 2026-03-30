# Sitemap — vibeiscoding.com

**Versión:** 1.0 (MVP)
**Fecha:** Marzo 2026
**Idioma:** Español

---

## Estructura de URLs

### Páginas MVP (prioridad de lanzamiento)

| URL | Nombre | Descripción | Prioridad |
|-----|--------|-------------|-----------|
| `/` | Inicio | Homepage con hero, grid de proyectos y newsletter | LAUNCH |
| `/proyectos/[slug]` | Detalle de proyecto | Bento grid con toda la info del proyecto | LAUNCH |
| `/sobre` | Sobre | Manifiesto, misión y filosofía del sitio | LAUNCH |
| `/privacidad` | Privacidad | Política de privacidad (requerida por Mailchimp) | LAUNCH |
| `/terminos` | Términos | Términos de uso | LAUNCH |

### Páginas futuras (post-MVP)

| URL | Nombre | Criterio de activación |
|-----|--------|------------------------|
| `/articulos` | Artículos | Cuando se tenga capacidad editorial regular (1+ artículo/semana) |
| `/articulos/[slug]` | Detalle de artículo | Con la sección de artículos activa |
| `/snippets` | Snippets | Cuando haya 10+ snippets acumulados |
| `/snippets/[slug]` | Detalle de snippet | Con la sección de snippets activa |
| `/teoria` | Teoría | Glosario o guías conceptuales; activar con 5+ entradas |
| `/nivel/[nivel]` | Por nivel | Filtrado por dificultad; alternativa a filtros en homepage |
| `/categoria/[cat]` | Por categoría | Filtrado por tecnología/área |

---

## Navegación principal (Header)

### Menú MVP

El menú actual en el diseño tiene cuatro ítems placeholder: Articles, Projects, Snippets, Theory. Para el MVP, se redefinen así:

| Ítem actual | Decisión MVP | URL | Razón |
|-------------|--------------|-----|-------|
| Articles | FUTURA | — | Sin capacidad editorial suficiente en MVP |
| Projects | ACTIVA → "Proyectos" | `/` (ancla al grid) | Es el core del sitio; apunta al grid en homepage |
| Snippets | FUTURA | — | Requiere volumen mínimo de contenido |
| Theory | FUTURA | — | Bajo valor sin una biblioteca base |

**Menú MVP definitivo (4 ítems):**

```
[Logo: VIBE IS CODING]   Proyectos   Sobre   [Buscar]   [Newsletter CTA]
```

- **Proyectos** → scroll al grid en `/` o navegación directa si ya estás en otra página (`/#proyectos`)
- **Sobre** → `/sobre`
- **Buscar** → ícono (preparado para activar búsqueda client-side en fase 2)
- **CTA Newsletter** → botón destacado "SUSCRIBIRSE" o "ÚNETE" que abre el newsletter inline o hace scroll a la sección

### Menú mobile

Hamburger que despliega:
```
Proyectos
Sobre
---
Privacidad
Términos
```

---

## Navegación secundaria (Footer)

```
VIBE IS CODING
© 2026 // Todo el contenido libre para usar y aprender

[Proyectos]   [Sobre]   [Privacidad]   [Términos]
```

Opcional en fase 2, agregar en el footer:
- Redes sociales (Twitter/X, GitHub)
- Link a Ko-fi / Buy Me a Coffee

---

## Jerarquía de contenido

```
vibeiscoding.com/
├── Homepage (/)
│   ├── Hero Section
│   ├── Filtros (categoría + dificultad)
│   ├── Grid de Proyectos
│   └── Newsletter Section
│
├── Proyectos (/proyectos/[slug])
│   ├── principiante/
│   │   └── [slug]
│   ├── intermedio/
│   │   └── [slug]
│   └── avanzado/
│       └── [slug]
│
├── Sobre (/sobre)
│   ├── Manifiesto
│   ├── Misión
│   └── Stack tecnológico
│
└── Legales
    ├── /privacidad
    └── /terminos
```

---

## Decisiones de navegación y criterio editorial

### Por qué "Proyectos" apunta a la homepage
El sitio es, en esencia, un directorio de proyectos. La homepage ya cumple la función de explorar proyectos con filtros. Crear una página `/proyectos` separada en el MVP genera duplicación innecesaria. Cuando el volumen supere los 20 proyectos, se puede migrar a una ruta independiente con paginación.

### Por qué descartar Articles, Snippets y Theory en MVP
- **Articles**: Crear un blog requiere compromiso editorial sostenido. Sin masa crítica de artículos, la sección queda vacía y genera mala impresión.
- **Snippets**: Contenido tipo snippet tiene mejor rendimiento cuando hay volumen. Con menos de 10 snippets no justifica una sección dedicada.
- **Theory**: Una sección teórica (glosario, conceptos) agrega valor real cuando existe una audiencia establecida que pide ese contenido.

### Cuándo activar cada sección futura
- **Artículos**: Activar cuando se puedan publicar 4 artículos antes del lanzamiento de la sección (backlog mínimo)
- **Snippets**: Activar cuando se tengan 10 snippets listos
- **Teoría**: Activar como iniciativa comunitaria — invitar a la audiencia a co-crearla

---

## Rutas 404 y errores

- `/404` — Página estilizada con el design system. Texto sugerido: "Esta URL no existe en el protocolo" + CTA para volver al inicio
- Cualquier `/proyectos/[slug-invalido]` debe redirigir al 404

---

## Notas técnicas para el Developer

- Las URLs de proyectos siguen el patrón `/proyectos/[slug]` donde `slug` viene del frontmatter MDX
- Los filtros (categoría + dificultad) son client-side en el MVP; no requieren rutas de URL dedicadas
- El ancla `/#proyectos` en el ítem "Proyectos" del nav requiere un `id="proyectos"` en la sección del grid en la homepage
- `sitemap.xml` generado dinámicamente por Next.js debe incluir todas las rutas de proyectos + páginas estáticas
