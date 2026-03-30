# Checklist Técnico SEO — vibeiscoding.com (Next.js SSG)

> Stack: Next.js App Router, TypeScript, SSG via `generateStaticParams`. Hosting: Vercel.
> Marcar cada ítem al implementarlo: `[ ]` pendiente → `[x]` completo.

---

## 1. Sitemap XML

### Implementación en Next.js App Router

Archivo: `app/sitemap.ts` (Next.js genera `/sitemap.xml` automáticamente).

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects()
  const baseUrl = 'https://vibeiscoding.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}
```

### Checklist de sitemap

- [ ] `app/sitemap.ts` creado y exportando función `default`
- [ ] Homepage incluida con `priority: 1.0`
- [ ] `/proyectos` incluida con `priority: 0.9`
- [ ] Cada `/proyectos/[slug]` incluida con `priority: 0.8`
- [ ] `/sobre` incluida con `priority: 0.5`
- [ ] Páginas legales incluidas con `priority: 0.2`
- [ ] `lastModified` dinámico usando `publishedAt` del frontmatter MDX
- [ ] Páginas 404 y `not-found` EXCLUIDAS del sitemap
- [ ] Sitemap accesible en `https://vibeiscoding.com/sitemap.xml` post-deploy
- [ ] URL del sitemap registrada en Google Search Console
- [ ] URL del sitemap referenciada en `robots.txt`

### Frecuencias recomendadas

| Tipo de página | `changeFrequency` | `priority` |
|----------------|-------------------|------------|
| Homepage | `weekly` | 1.0 |
| /proyectos | `weekly` | 0.9 |
| /proyectos/[slug] | `monthly` | 0.8 |
| /sobre | `monthly` | 0.5 |
| /privacidad, /terminos | `yearly` | 0.2 |
| Futuro /blog/[slug] | `monthly` | 0.7 |

---

## 2. robots.txt

### Implementación en Next.js App Router

Archivo: `app/robots.ts`

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        // Bloquear crawlers de AI que no respetan robots.txt
        // (opcional — listar los más conocidos)
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
    sitemap: 'https://vibeiscoding.com/sitemap.xml',
    host: 'https://vibeiscoding.com',
  }
}
```

### Checklist de robots.txt

- [ ] `app/robots.ts` creado
- [ ] Regla `allow: '/'` para todos los user-agents
- [ ] `/api/` bloqueada (rutas internas de Mailchimp, etc.)
- [ ] `/_next/` bloqueada (assets internos de Next.js)
- [ ] URL del sitemap referenciada
- [ ] `host` canónico declarado
- [ ] Verificar en `https://vibeiscoding.com/robots.txt` post-deploy
- [ ] Probar con Google Search Console → herramienta de prueba de robots.txt
- [ ] Decidir política de bloqueo de AI crawlers (GPTBot, CCBot, etc.)

---

## 3. Open Graph y Twitter Card

### Specs de imágenes OG

| Parámetro | Valor |
|-----------|-------|
| Dimensiones recomendadas | 1200 × 630 px |
| Dimensiones mínimas | 600 × 315 px |
| Formato preferido | PNG (texto legible) o JPG (fotos) |
| Tamaño máximo | 8 MB (límite WhatsApp); apuntar a <500 KB |
| Aspect ratio | 1.91:1 |
| Safe zone (texto/logo) | Dejar 50px de margen en todos los bordes |
| Twitter card type | `summary_large_image` |

### Implementación con `generateMetadata` en Next.js

```typescript
// app/proyectos/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  const baseUrl = 'https://vibeiscoding.com'

  return {
    title: `${project.title} — Proyecto de Vibe Coding`,
    description: project.shortDescription,
    alternates: {
      canonical: `${baseUrl}/proyectos/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: `${project.shortDescription} — Nivel ${project.level} · ${project.categories[0]}`,
      url: `${baseUrl}/proyectos/${project.slug}`,
      siteName: 'Vibe Coding',
      images: [
        {
          url: project.heroImage || `${baseUrl}/og/proyecto-default.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
      publishedTime: project.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [project.heroImage || `${baseUrl}/og/proyecto-default.png`],
    },
  }
}
```

### Checklist de Open Graph y Twitter Card

- [ ] `generateMetadata` implementado en cada `page.tsx`
- [ ] `og:title` — único por página, max 60 chars
- [ ] `og:description` — única por página, max 160 chars
- [ ] `og:image` — 1200×630px, <500 KB
- [ ] `og:image:alt` — texto descriptivo para accesibilidad
- [ ] `og:url` — URL canónica absoluta
- [ ] `og:type` — `website` para homepage/listing, `article` para proyectos
- [ ] `og:site_name` — "Vibe Coding"
- [ ] `og:locale` — `es_ES`
- [ ] `twitter:card` — `summary_large_image`
- [ ] `twitter:image` — misma imagen que OG o variante cuadrada 1:1
- [ ] Fallback `/og/proyecto-default.png` creado para proyectos sin heroImage
- [ ] Probar con [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Probar con [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Probar con [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 4. Core Web Vitals

### Métricas a monitorear y umbrales target

| Métrica | Descripción | Target (Good) | Umbral máximo (Poor) |
|---------|-------------|---------------|----------------------|
| **LCP** (Largest Contentful Paint) | Tiempo hasta render del elemento más grande | ≤ 2.5s | > 4.0s |
| **INP** (Interaction to Next Paint) | Respuesta a interacciones del usuario | ≤ 200ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | Estabilidad visual al cargar | ≤ 0.1 | > 0.25 |
| **FCP** (First Contentful Paint) | Primer pixel de contenido visible | ≤ 1.8s | > 3.0s |
| **TTFB** (Time to First Byte) | Tiempo hasta primer byte del servidor | ≤ 800ms | > 1.8s |

> INP reemplazó a FID (First Input Delay) desde marzo 2024.

### Estrategias específicas para este proyecto

#### LCP (elemento más grande — probablemente el hero o heroImage)
- [ ] Usar `next/image` con `priority={true}` en el hero de homepage y en `heroImage` de proyectos
- [ ] Precargar la imagen hero con `<link rel="preload">` si se detecta LCP alto
- [ ] Servir imágenes en formato WebP/AVIF (Next.js lo hace automáticamente)
- [ ] Evitar imágenes de más de 200 KB para el hero

#### CLS (evitar saltos de layout)
- [ ] Definir `width` y `height` en todos los `<Image>` de Next.js
- [ ] Reservar espacio para fuentes con `font-display: swap` (Lexend via `next/font`)
- [ ] No insertar contenido dinámico encima de contenido existente sin reservar espacio
- [ ] GlassPanel y cards con altura mínima definida en CSS

#### INP (respuesta a interacciones)
- [ ] Filtros de proyectos con debounce si se implementan client-side
- [ ] No bloquear el main thread con scripts de terceros (Umami es async)
- [ ] Newsletter form: usar `useTransition` o `startTransition` en React para non-urgent updates

#### TTFB (SSG mitiga esto casi completamente)
- [ ] Verificar que Vercel sirve desde Edge Network (automático en Vercel)
- [ ] No usar `getServerSideProps` — todo debe ser SSG con `generateStaticParams`

### Herramientas de monitoreo

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) — análisis manual post-deploy
- [ ] [Google Search Console](https://search.google.com/search-console) → Core Web Vitals report
- [ ] Umami (ya en el stack) — para tracking de tráfico real
- [ ] [web-vitals JS library](https://github.com/GoogleChrome/web-vitals) — si se quiere tracking en tiempo real
- [ ] Lighthouse CI en GitHub Actions (configuración futura)

### Target de Lighthouse

| Categoría | Target |
|-----------|--------|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

---

## 5. Structured Data — JSON-LD para un Proyecto de Vibe Coding

### Ejemplo concreto: proyecto "Chatbot de Atención al Cliente"

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://vibeiscoding.com/proyectos/chatbot-atencion-cliente/#project",
  "name": "Chatbot de Atención al Cliente",
  "description": "Construye un chatbot inteligente para automatizar la atención al cliente de un negocio usando Claude API y Next.js.",
  "url": "https://vibeiscoding.com/proyectos/chatbot-atencion-cliente/",
  "datePublished": "2025-06-01",
  "dateModified": "2025-06-01",
  "inLanguage": "es",
  "image": "https://vibeiscoding.com/images/proyectos/chatbot-atencion-cliente.jpg",
  "educationalLevel": "Intermedio",
  "teaches": "Integración de Claude API, manejo de contexto conversacional, despliegue en Vercel",
  "toolRequired": "Claude Code, Next.js, Vercel",
  "keywords": "chatbot, atención al cliente, Claude API, Next.js, inteligencia artificial",
  "timeRequired": "PT6H",
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
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Vibe Coding"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Claude Code",
      "applicationCategory": "DeveloperApplication"
    }
  ]
}
```

### Implementación en Next.js

```tsx
// app/proyectos/[slug]/page.tsx
export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)
  const baseUrl = 'https://vibeiscoding.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${baseUrl}/proyectos/${project.slug}/#project`,
    name: project.title,
    description: project.shortDescription,
    url: `${baseUrl}/proyectos/${project.slug}/`,
    datePublished: project.publishedAt,
    inLanguage: 'es',
    image: project.heroImage,
    educationalLevel: project.level,
    toolRequired: project.toolSuggestion,
    keywords: project.categories.join(', '),
    author: {
      '@type': 'Organization',
      name: 'Vibe Coding',
      '@id': `${baseUrl}/#organization`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* resto del componente */}
    </>
  )
}
```

### Checklist de Structured Data

- [ ] JSON-LD implementado en `app/page.tsx` (homepage — WebSite + Organization)
- [ ] JSON-LD implementado en `app/proyectos/[slug]/page.tsx` (CreativeWork)
- [ ] JSON-LD implementado en `app/sobre/page.tsx` (Organization)
- [ ] `@id` con URLs absolutas y fragment identifiers (`#website`, `#organization`, `#project`)
- [ ] `timeRequired` en formato ISO 8601 duration (ej: `PT6H` = 6 horas)
- [ ] Validar con [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validar con [Schema.org Validator](https://validator.schema.org/)
- [ ] No duplicar información entre múltiples JSON-LD en la misma página

---

## 6. Consideraciones Especiales para SSG en Next.js

### Ventajas SSG para SEO (aprovechar al máximo)

- **HTML pre-renderizado**: todos los crawlers reciben HTML completo, sin JavaScript requerido
- **TTFB ultra-bajo**: Vercel Edge Network sirve archivos estáticos en <50ms
- **Sitemap estático**: `/sitemap.xml` generado en build time con todos los proyectos

### Implementación correcta de `generateStaticParams`

```typescript
// app/proyectos/[slug]/page.tsx
export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Importante: forzar SSG si hay alguna lógica dinámica en el layout
export const dynamic = 'force-static'
export const revalidate = false  // o un número de segundos si se usa ISR
```

### Checklist SSG

- [ ] `generateStaticParams` implementado en `app/proyectos/[slug]/page.tsx`
- [ ] Verificar que no hay `cookies()`, `headers()`, ni `searchParams` en Server Components del detalle (rompen SSG)
- [ ] `export const dynamic = 'force-static'` donde sea necesario explicitarlo
- [ ] Build local (`npm run build`) sin warnings de páginas dinámicas no esperadas
- [ ] Output del build muestra `○` (static) y no `λ` (server) para todas las páginas de proyectos
- [ ] Imágenes con `next/image` y `unoptimized={false}` (default) para servir WebP
- [ ] Font Lexend cargada con `next/font/google` (genera CSS estático, elimina FOIT)
- [ ] No usar `useSearchParams()` sin `<Suspense>` (rompe SSG en Next.js 14+)

### ISR vs. SSG puro

Para el MVP con 5 proyectos, SSG puro es suficiente. Cuando el catálogo crezca:
```typescript
export const revalidate = 3600  // revalidar cada hora (ISR)
```

---

## 7. Plan de Preparación Multilenguaje (hreflang)

### Estado actual (MVP español)

El MVP no requiere hreflang porque solo hay un idioma. Registrar ahora:
- [ ] `<html lang="es">` en el root layout
- [ ] `og:locale` = `es_ES` en todas las páginas
- [ ] Diccionario i18n en `src/lib/i18n/es.ts` (ya en el plan)

### Cuando se active inglés — Pasos a seguir

#### Paso 1: Estructura de routing
```typescript
// next.config.ts — activar cuando se añada inglés
const nextConfig = {
  // Opción A (subdirectorio — recomendada):
  // URLs: /en/projects/[slug]
  // Implementar con middleware o carpeta app/en/

  // Opción B (next/navigation i18n nativo):
  // Requiere configurar i18n en next.config.ts
}
```

#### Paso 2: Tags hreflang en cada página

```tsx
// En generateMetadata de cada page.tsx
alternates: {
  canonical: 'https://vibeiscoding.com/proyectos/chatbot-atencion-cliente',
  languages: {
    'es': 'https://vibeiscoding.com/proyectos/chatbot-atencion-cliente',
    'en': 'https://vibeiscoding.com/en/projects/chatbot-customer-service',
    'x-default': 'https://vibeiscoding.com/proyectos/chatbot-atencion-cliente',
  },
},
```

Next.js convierte `alternates.languages` a `<link rel="alternate" hreflang="...">` automáticamente.

#### Paso 3: Sitemap multilenguaje

```typescript
// Añadir al sitemap.ts cuando haya inglés
{
  url: `${baseUrl}/proyectos/${slug}`,
  alternates: {
    languages: {
      es: `${baseUrl}/proyectos/${slug}`,
      en: `${baseUrl}/en/projects/${slugEn}`,
    },
  },
}
```

#### Paso 4: Checklist hreflang (para cuando se active)

- [ ] `<html lang="es">` y `<html lang="en">` correctos por versión
- [ ] hreflang en todas las páginas traducidas (homepage, proyectos, about)
- [ ] `x-default` apunta a la versión española (mercado principal)
- [ ] Slugs en inglés creados (no traducción mecánica — revisar keyword research en inglés)
- [ ] Sitemap actualizado con `<xhtml:link rel="alternate">` por URL
- [ ] Google Search Console configurado con ambas versiones del sitio
- [ ] Probar con [hreflang Tags Testing Tool](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/)
- [ ] No usar parámetros de URL para cambiar idioma (`?lang=en`) — usar rutas separadas

---

## 8. Verificaciones Pre-Launch

- [ ] `<title>` único en cada página (verificar con Screaming Frog o equivalente)
- [ ] `<meta description>` única en cada página
- [ ] No hay páginas con `noindex` accidentalmente
- [ ] Favicon implementado: `app/favicon.ico` + `app/icon.png` (512×512px)
- [ ] Apple touch icon: `app/apple-icon.png` (180×180px)
- [ ] Manifest PWA básico (opcional pero recomendado): `app/manifest.ts`
- [ ] Google Search Console: verificación de propiedad con archivo HTML o meta tag
- [ ] Primera indexación solicitada manualmente en GSC tras el deploy
- [ ] Umami configurado y recolectando datos desde el primer día
- [ ] HTTPS funcionando (automático en Vercel)
- [ ] `www` redirige a `non-www` (configurar en Vercel → Domains)
