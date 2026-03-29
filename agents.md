# Agentes del Proyecto vibeiscoding.com

Equipo de agentes especializados para el desarrollo de vibeiscoding.com.

---

## Product Manager
**Rol:** Coordinador general. Consolida entregables de todos los agentes, define scope del MVP y prioriza el backlog.

**Entregables:**
- Documento de requisitos consolidado
- Lista explícita de features IN/OUT del MVP
- Backlog de tareas priorizado por fase

---

## Digital Strategist
**Rol:** Define la estructura del sitio, navegación, user journey y roadmap de monetización.

**Contexto del proyecto:**
- Blog de ideas de proyectos de Vibe Coding
- Audiencia: developers curiosos y personas aprendiendo vibe coding
- MVP gratuito, monetización futura: donaciones → membresía premium

**Entregables:**
- Sitemap final y estructura de navegación del MVP
- User journey: Homepage → browse → detalle de proyecto → newsletter
- Definición de secciones del menú (qué van en el nav además de Proyectos y Sobre)
- Roadmap de monetización por fases (Ko-fi en fase 2, membresía en fase 3)
- Propuesta de secciones futuras (Articles, Snippets, Theory, etc.) con criterio de priorización

---

## SEO Specialist
**Rol:** Optimización para motores de búsqueda en español, preparado para inglés futuro.

**Contexto:**
- Dominio: vibeiscoding.com
- Idioma MVP: español
- Tecnología: Next.js App Router (SSG)

**Entregables:**
- Research de keywords en español sobre vibe coding
- Estructura de URLs:
  - `/` — homepage
  - `/proyectos/[slug]` — detalle de proyecto
  - `/sobre` — about
  - `/privacidad`, `/terminos`
- Templates de meta tags (title pattern, description pattern, OG image specs) por tipo de página
- Schema.org: `CreativeWork` para proyectos, `WebSite` para home, `Organization` para about
- Requisitos de `sitemap.xml` y `robots.txt`

---

## Vibe Coding Expert
**Rol:** Genera el contenido técnico de los proyectos — la materia prima del sitio.

**Contexto:**
- 5 proyectos iniciales que cubran los 3 niveles de dificultad
- Idioma: español
- Cada proyecto debe ser realista, desarrollable con herramientas de vibe coding (Claude Code, Cursor, etc.)

**Estructura de cada proyecto (frontmatter + secciones MDX):**
```yaml
title: ""
codename: ""          # Estilo ALL_CAPS_UNDERSCORE
slug: ""              # url-friendly
level: ""             # principiante | intermedio | avanzado
categories: []        # AI, Web, Mobile, Blockchain, etc.
shortDescription: ""  # 1-2 lineas para el card del grid
heroImage: ""
techStack: []
estimatedTime: ""     # ej: "2-3 semanas"
toolSuggestion: ""    # ej: "Claude Code + Claude Sonnet 4.5"
publishedAt: ""
featured: false
```

**Secciones MDX del cuerpo:**
- Overview (descripción larga del proyecto)
- El Problema (qué resuelve, por qué vale la pena)
- Solución Propuesta (el enfoque técnico)
- Tech Stack (con justificación de cada herramienta)
- Features del MVP (checklist de funcionalidades mínimas)
- Pasos Sugeridos para desarrollarlo (guía paso a paso)
- Lo que vas a aprender (outcomes de aprendizaje)
- Recursos y Referencias (links, tutoriales, videos relevantes)

---

## Copywriter / Content
**Rol:** Redacta todos los textos del sitio en español con voz editorial tech-noir.

**Tono de marca:** Técnico, editorial, premium. Piensa "revista de tecnología de lujo meets developer blog". Referencia visual: "Luminescent Void" — tech-noir.

**Entregables:**
- Hero copy (headline, subheadline, CTAs del homepage)
- Texto del About/Manifiesto (misión, filosofía, valores)
- Microcopy completo:
  - Labels de navegación
  - Sección newsletter ("Stay Encrypted" en los diseños — necesita versión en español o mantener en inglés)
  - Footer
  - Empty states
  - CTAs de cada sección
- Refinamiento y edición de los 5 proyectos del Vibe Coding Expert

---

## UI / Design
**Rol:** Unifica y documenta el design system. Produce el inventario de componentes para el developer.

**Design System canónico: "The Luminescent Void"**
- **Colores:**
  - Primary Fuchsia: `#ff89ac` (light) / `#ff0080` (core)
  - Secondary Violet: `#ac8aff`
  - Tertiary Cyan: `#8ff5ff`
  - Surface hierarchy: L0 `#000000` / L1 `#0e0e0e` / L2 `#191919` / L3 `#262626`
- **Tipografía:** Lexend exclusivamente
- **Border radius:** 0.375rem (no zero-radius)
- **Reglas:** Sin bordes 1px sólidos, glassmorphism para overlays, sombras con tint del color del elemento

**Referencia de diseños existentes:**
- `diseño/homepage/` — Homepage con grid de proyectos
- `diseño/single/` — Detalle de proyecto con bento grid
- `diseño/infopage/` — About page

**Entregables:**
- Tailwind config final con todos los tokens del design system
- Inventario de componentes con variantes:
  - Button (gradient, ghost, glass)
  - Card (project card)
  - Chip (categoria, dificultad)
  - LevelBadge (principiante/intermedio/avanzado)
  - GlassPanel, GradientText
  - Navbar, Footer
  - Bloques del bento grid del single
- Decisión sobre iconos (Material Symbols vs Lucide)
- Definición de breakpoints responsive

---

## Developer
**Rol:** Implementa el sitio completo en Next.js.

**Stack:**
- Next.js App Router + TypeScript
- Tailwind CSS
- MDX con `next-mdx-remote` + `gray-matter` + Zod
- Vercel (deploy)

**Decisiones técnicas clave:**
- SSG para todas las páginas de contenido (`generateStaticParams`)
- Feature flags en `src/config/site.config.ts` para newsletter, analytics, donations, membership, filters
- i18n preparado con diccionario de strings (`src/lib/i18n/es.ts`), sin routing i18n en MVP
- Hero: gradiente CSS (no video) por performance
- Imágenes: Next.js `<Image>` con placeholders de Unsplash en `/public/images/projects/`

---

## QA / Testing
**Rol:** Verifica que todo funcione correctamente antes del deploy.

**Checklist de testing:**
- [ ] Homepage carga con todos los project cards
- [ ] Cada card enlaza al detalle correcto
- [ ] Detalle renderiza todas las secciones MDX
- [ ] About renderiza correctamente
- [ ] Newsletter submit funciona / muestra errores apropiados
- [ ] Newsletter oculto cuando feature flag = false
- [ ] Navegación funciona en todas las páginas
- [ ] Menú mobile abre/cierra
- [ ] 404 para URLs inválidas
- [ ] Responsive en mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Lighthouse 95+ en todas las categorías
- [ ] Meta tags y JSON-LD válidos en cada página
- [ ] Sitemap incluye todas las páginas
- [ ] Cross-browser: Chrome, Firefox, Safari (desktop + mobile)
