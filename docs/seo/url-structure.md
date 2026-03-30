# Estructura de URLs — vibeiscoding.com

> Stack: Next.js App Router con SSG. MVP en español. Preparado para inglés futuro.

---

## 1. Mapa de URLs Completo

### MVP (fase de lanzamiento)

| URL | Archivo Next.js | Descripción |
|-----|----------------|-------------|
| `/` | `app/page.tsx` | Homepage — hero + grid de proyectos |
| `/proyectos` | `app/proyectos/page.tsx` | Listing de todos los proyectos |
| `/proyectos/[slug]` | `app/proyectos/[slug]/page.tsx` | Detalle de un proyecto |
| `/sobre` | `app/sobre/page.tsx` | About / Manifesto |
| `/privacidad` | `app/privacidad/page.tsx` | Política de privacidad |
| `/terminos` | `app/terminos/page.tsx` | Términos de uso |
| `/404` | `app/not-found.tsx` | Página 404 personalizada |

### Futuro (post-MVP)

| URL | Descripción | Prioridad |
|-----|-------------|-----------|
| `/blog` | Listing de artículos | Alta |
| `/blog/[slug]` | Artículo individual | Alta |
| `/categorias` | Listing de categorías | Media |
| `/categorias/[categoria]` | Proyectos filtrados por categoría | Media |
| `/nivel/[nivel]` | Proyectos filtrados por nivel | Media |
| `/herramientas/[herramienta]` | Proyectos por herramienta de IA | Baja |
| `/newsletter` | Página de confirmación de suscripción | Baja |
| `/sitemap` | Sitemap HTML (para usuarios) | Baja |

---

## 2. Criterios para Slugs de Proyectos

### Reglas de naming (obligatorias)

1. **Todo en minúsculas**: `mi-proyecto`, no `Mi-Proyecto`
2. **Solo guiones medios como separador**: `todo-list-ia`, no `todo_list_ia`
3. **Sin acentos ni caracteres especiales**: `automatizacion`, no `automatización`
4. **Máximo 5-7 palabras** para mantener URLs limpias y shareables
5. **Descriptivo + keyword**: el slug debe contener la keyword principal del proyecto
6. **Sin stopwords innecesarios**: evitar artículos (`el`, `la`, `un`) salvo que sean parte natural
7. **Sin números de versión**: evitar `proyecto-v2`, preferir nombre descriptivo
8. **Sin fechas**: las fechas en URLs dificultan el mantenimiento

### Patrón recomendado

```
/proyectos/[tipo-de-proyecto]-con-ia
/proyectos/[nombre-descriptivo]-[tecnologia-clave]
```

### Ejemplos correctos

```
/proyectos/chatbot-atencion-cliente
/proyectos/dashboard-analiticas-ventas
/proyectos/generador-contenido-blog
/proyectos/app-reservas-restaurante
/proyectos/agente-investigacion-web
/proyectos/automatizador-facturas-python
```

### Ejemplos incorrectos (evitar)

```
/proyectos/proyecto-1                    ← no descriptivo
/proyectos/chatbot-de-atención-al-cliente ← acento, muy largo
/proyectos/ChatBot_Ventas                ← mayúsculas, guión bajo
/proyectos/app-con-ia-2025               ← fecha y genérico
```

### Criterios SEO para el slug

- Incluir la keyword más relevante del proyecto (ej: `chatbot`, `dashboard`, `agente`)
- Mencionar la función principal, no solo el nombre creativo
- Si el proyecto tiene codename creativo (ej: `nebula`), combinarlo con descriptor:
  `/proyectos/nebula-agente-investigacion`

---

## 3. Slugs para Categorías y Niveles

### Categorías (normalización de acentos obligatoria)

| Nombre display | Slug |
|----------------|------|
| Herramientas de IA | `herramientas-ia` |
| Web Apps | `web-apps` |
| Mobile Apps | `mobile-apps` |
| Automatización | `automatizacion` |
| Bots y Agentes | `bots-agentes` |
| Análisis de Datos | `analisis-datos` |
| Generación de Contenido | `generacion-contenido` |

### Niveles

| Nombre display | Slug |
|----------------|------|
| Principiante | `principiante` |
| Intermedio | `intermedio` |
| Avanzado | `avanzado` |

---

## 4. Meta Tags — Templates por Tipo de Página

### 4.1 Homepage `/`

```
Title:       Vibe Coding — Ideas de proyectos para programar con IA
             (max 60 chars)

Description: Descubre proyectos de vibe coding para todos los niveles.
             Aprende a crear apps con IA usando Claude Code, Cursor y más.
             (max 160 chars)

OG title:    Vibe Coding — Ideas de proyectos para programar con IA
OG desc:     Proyectos con IA organizados por nivel: principiante,
             intermedio y avanzado. Para developers y curiosos.
OG image:    /og/homepage.png (1200×630px)
OG type:     website
Canonical:   https://vibeiscoding.com/
```

### 4.2 Listing de Proyectos `/proyectos`

```
Title:       Proyectos de Vibe Coding — Aprende a programar con IA
             (max 60 chars)

Description: Explora [N] proyectos de vibe coding organizados por nivel
             y categoría. Desde chatbots hasta agentes IA avanzados.
             (max 160 chars — [N] se genera dinámicamente)

OG title:    Proyectos de Vibe Coding
OG desc:     [N] ideas de proyectos con IA para todos los niveles.
OG image:    /og/proyectos.png (1200×630px)
OG type:     website
Canonical:   https://vibeiscoding.com/proyectos
```

### 4.3 Proyecto Individual `/proyectos/[slug]`

```
Title:       [title del proyecto] — Proyecto de Vibe Coding
             Ejemplo: "Chatbot de Atención al Cliente — Proyecto de Vibe Coding"
             (max 60 chars — si excede, cortar title del proyecto)

Description: [shortDescription del frontmatter]. Nivel [level].
             Stack: [techStack top 3]. Con [toolSuggestion principal].
             (max 160 chars — generado desde frontmatter MDX)

OG title:    [title del proyecto]
OG desc:     [shortDescription] — Nivel [level] · [categories[0]]
OG image:    [heroImage] o /og/proyecto-default.png (1200×630px)
OG type:     article
OG article:published_time: [publishedAt]
Canonical:   https://vibeiscoding.com/proyectos/[slug]
```

### 4.4 About `/sobre`

```
Title:       Sobre Vibe Coding — Qué es vibeiscoding.com
             (max 60 chars)

Description: vibeiscoding.com es un blog de ideas de proyectos para
             aprender a programar con IA. Para developers y curiosos.
             (max 160 chars)

OG title:    Sobre Vibe Coding
OG desc:     Nuestra misión: democratizar el vibe coding en español.
OG image:    /og/sobre.png (1200×630px)
OG type:     website
Canonical:   https://vibeiscoding.com/sobre
```

### 4.5 Páginas Legales (`/privacidad`, `/terminos`)

```
Title:       [Privacidad / Términos de Uso] — vibeiscoding.com
Description: [Política de privacidad / Términos de uso] de vibeiscoding.com
robots:      index, nofollow  (indexable pero sin seguir links)
Canonical:   https://vibeiscoding.com/[privacidad|terminos]
```

---

## 5. Especificaciones de Open Graph

| Campo | Valor / Especificación |
|-------|------------------------|
| `og:image` width | 1200px |
| `og:image` height | 630px |
| `og:image` formato | PNG (preferido) o JPG |
| `og:image` max size | 8 MB (respetar límite de WhatsApp/Twitter) |
| `og:locale` | `es_ES` (MVP) |
| `og:locale:alternate` | `en_US` (preparar meta pero sin contenido aún) |
| `og:site_name` | `Vibe Coding` |
| `twitter:card` | `summary_large_image` |
| `twitter:site` | `@vibeiscoding` (cuando se cree la cuenta) |

### Imágenes OG recomendadas a crear

- `/public/og/homepage.png` — diseño genérico de marca
- `/public/og/proyectos.png` — grid/collage de proyectos
- `/public/og/sobre.png` — imagen de about
- `/public/og/proyecto-default.png` — fallback para proyectos sin heroImage
- Por proyecto: usar `heroImage` del frontmatter si existe

---

## 6. Schema.org Markup por Tipo de Página

### 6.1 Homepage — `WebSite` + `Organization`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vibeiscoding.com/#website",
      "url": "https://vibeiscoding.com/",
      "name": "Vibe Coding",
      "description": "Ideas de proyectos para aprender a programar con IA",
      "inLanguage": "es",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://vibeiscoding.com/proyectos?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://vibeiscoding.com/#organization",
      "name": "Vibe Coding",
      "url": "https://vibeiscoding.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vibeiscoding.com/logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://twitter.com/vibeiscoding",
        "https://github.com/vibeiscoding"
      ]
    }
  ]
}
```

### 6.2 Página de Proyecto — `CreativeWork` (justificación)

**Decisión: `CreativeWork` sobre `Article`**

- Los proyectos de vibeiscoding.com son **ideas/plantillas de proyectos**, no artículos periodísticos ni posts de blog.
- `CreativeWork` es el tipo más preciso para "una idea de proyecto con instrucciones" — es una obra creativa técnica.
- `Article` se reserva para el futuro `/blog`.
- `CreativeWork` permite campos como `educationalLevel`, `teaches`, `toolRequired` — perfectos para este contenido.

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://vibeiscoding.com/proyectos/[slug]/#project",
  "name": "[title]",
  "description": "[shortDescription]",
  "url": "https://vibeiscoding.com/proyectos/[slug]/",
  "datePublished": "[publishedAt]",
  "dateModified": "[publishedAt]",
  "inLanguage": "es",
  "image": "[heroImage absoluta]",
  "educationalLevel": "[level]",
  "teaches": "[shortDescription o primera frase del proyecto]",
  "toolRequired": "[toolSuggestion]",
  "keywords": "[categories.join(', ')]",
  "author": {
    "@type": "Organization",
    "name": "Vibe Coding",
    "@id": "https://vibeiscoding.com/#organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vibe Coding",
    "@id": "https://vibeiscoding.com/#organization"
  },
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://vibeiscoding.com/#website"
  }
}
```

### 6.3 About `/sobre` — `Organization` + `Person` (opcional)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vibeiscoding.com/#organization",
      "name": "Vibe Coding",
      "url": "https://vibeiscoding.com/",
      "description": "Blog de ideas de proyectos para aprender a programar con IA en español",
      "foundingDate": "2025",
      "inLanguage": "es",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vibeiscoding.com/logo.png"
      },
      "sameAs": [
        "https://twitter.com/vibeiscoding",
        "https://github.com/vibeiscoding"
      ]
    }
  ]
}
```

> Nota: Añadir `Person` solo si el creador quiere visibilidad personal con nombre y redes sociales propias.
> Template `Person` a completar cuando se decida:
> `"@type": "Person", "name": "[nombre]", "url": "[perfil]", "sameAs": ["[twitter]", "[linkedin]"]`

---

## 7. Reglas de Canonical y Redirects

- Todas las URLs deben ser **sin trailing slash** (configurar en `next.config.ts`): `/proyectos` no `/proyectos/`
- Excepción: homepage siempre `https://vibeiscoding.com/` (con slash final)
- Redirect `www` → `non-www` (configurar en Vercel)
- Redirect `http` → `https` (automático en Vercel)
- Cada página debe tener su propio `<link rel="canonical">` explícito
- No usar el mismo title/description en múltiples páginas

---

## 8. Preparación para Multilenguaje Futuro (hreflang)

Cuando se active la versión en inglés, agregar a cada página:

```html
<link rel="alternate" hreflang="es" href="https://vibeiscoding.com/proyectos/[slug]" />
<link rel="alternate" hreflang="en" href="https://vibeiscoding.com/en/projects/[slug-en]" />
<link rel="alternate" hreflang="x-default" href="https://vibeiscoding.com/proyectos/[slug]" />
```

### Estrategia de routing i18n

- **MVP**: solo español, sin prefijo de idioma en URL (`/proyectos/...`)
- **Futuro inglés**: subdirectorio `/en/` (`/en/projects/...`)
  - Ventaja sobre subdominio (`en.vibeiscoding.com`): comparte autoridad de dominio
  - Slugs en inglés separados (no traducir mecánicamente)
- El diccionario i18n ya en `src/lib/i18n/es.ts` facilita la transición
- `next.config.ts` preparado con `i18n` comentado para activar cuando sea necesario

### Estructura de URL en inglés (para referencia futura)

```
/en/                      → Homepage en inglés
/en/projects              → Listing en inglés
/en/projects/[slug-en]    → Proyecto en inglés (slug puede diferir del español)
/en/about                 → About en inglés
```
