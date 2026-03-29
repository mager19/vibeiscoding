# Plan de Desarrollo: vibeiscoding.com

## Contexto
Blog de ideas de proyectos de Vibe Coding organizados por niveles de dificultad (principiante, intermedio, avanzado). Ayuda a personas que quieren aprender vibe coding con ideas concretas, tech stack, pasos y herramientas sugeridas. MVP gratuito en Vercel.

---

## Stack Técnico
- **Framework**: Next.js (App Router, TypeScript)
- **Contenido**: MDX con `next-mdx-remote` + `gray-matter` + Zod
- **Estilos**: Tailwind CSS — Design System "Luminescent Void"
- **Hosting**: Vercel (free tier)
- **Newsletter**: Mailchimp (modular, desactivable via config)
- **Analytics**: Umami (free tier cloud)
- **i18n**: Diccionario de strings en español, preparado para inglés sin routing i18n en MVP

---

## Fase 0 — Estrategia y Contenido

Agentes en paralelo antes de tocar código.

| Agente | Entregable |
|--------|------------|
| Product Manager | Scope MVP, backlog priorizado |
| Digital Strategist | Sitemap, navegación, user journey, monetización futura |
| SEO Specialist | Keywords, URL structure, meta templates, schema.org |
| Vibe Coding Expert | 5 proyectos completos (3 niveles) |
| Copywriter | Hero copy, about, microcopy en español |
| UI/Design | Design system unificado, inventario de componentes |

---

## Fase 1 — Scaffolding

Setup del proyecto Next.js con toda la configuración base.

- `create-next-app` con TypeScript, Tailwind, App Router, src/
- Instalar: `next-mdx-remote`, `gray-matter`, `zod`
- `tailwind.config.ts` con tokens del design system (fuchsia/violet/cyan/void)
- `site.config.ts` con feature flags: newsletter, analytics, donations, membership, filters
- Utilidad de carga MDX: `getAllProjects()`, `getProjectBySlug()`
- Schema Zod para validar frontmatter de proyectos
- Diccionario i18n: `src/lib/i18n/es.ts`
- Fuente Lexend via `next/font/google`

**Frontmatter de cada proyecto:**
```yaml
title, codename, slug, level, categories, shortDescription,
heroImage, techStack, estimatedTime, toolSuggestion, publishedAt, featured
```

---

## Fase 2 — Componentes UI

Implementación del design system en componentes React.

1. **UI primitivos**: Button (gradient/ghost/glass), GradientText, GlassPanel, Card, Chip, LevelBadge
2. **Layout**: Navbar (glassmorphism, mobile hamburger), Footer
3. **Homepage**: Hero (CSS gradient), ProjectGrid (3 col responsive), NewsletterSection
4. **Project detail**: ProjectHero, BentoGrid + bloques (Overview, TechStack, Problem, Solution, Features, Steps, Learning, Resources, CTA)
5. **About**: AboutHero (tipografía asimétrica), Manifesto, TechFoundation

---

## Fase 3 — Páginas e Integración de Contenido

Conectar componentes con contenido MDX y construir todas las páginas.

- **Homepage**: Server component, `getAllProjects()` → Hero → ProjectGrid → Newsletter
- **Project detail**: `generateStaticParams` + `getProjectBySlug()` → BentoGrid
- **About**: Contenido estático del diccionario i18n
- **Páginas legales**: Privacidad, Términos (placeholder)
- **404**: Styled con design system
- **5 archivos MDX**: Contenido del Vibe Coding Expert formateado
- **SEO**: `generateMetadata`, JSON-LD, `sitemap.ts`, `robots.txt`

---

## Fase 4 — Integraciones y Polish

- **Mailchimp**: API route proxy `/api/newsletter`, estados loading/success/error
- **Umami**: Script condicional en root layout, setup de cuenta cloud
- **Responsive**: Mobile (375px), tablet (768px), desktop (1280px+)
- **Animaciones**: Hover en cards (scale, glow), smooth scroll
- **Performance**: Next.js `<Image>`, font optimization, verificar SSG
- **Accesibilidad**: Focus indicators, HTML semántico, alt text, contraste

---

## Fase 5 — QA y Deploy

- Testing funcional completo (ver `agents.md` → sección QA)
- Cross-browser: Chrome, Firefox, Safari (desktop + mobile)
- Lighthouse 95+ en todas las categorías
- Conectar repo GitHub a Vercel
- Configurar dominio `vibeiscoding.com`
- Variables de entorno: Mailchimp API key, Umami website ID
- Verificar SSL y build de producción

---

## Decisiones Técnicas Clave

| Decisión | Elección | Razón |
|----------|----------|-------|
| MDX processing | `next-mdx-remote` | Estable, App Router compatible |
| Hero background | CSS gradient (no video) | Performance |
| Design system | "Luminescent Void" del homepage | Unificar todo bajo un solo sistema |
| Filtros | Client-side (si se activan) | Solo 5 proyectos, no amerita server-side |
| Imágenes | Placeholder Unsplash en `/public/` | URLs del HTML de referencia son temporales |
| i18n | Diccionario de strings | Mínimo esfuerzo ahora, fácil de expandir |

---

## Monetización Futura (no MVP)
- **Fase 2**: Botón de donaciones Ko-fi / Buy Me a Coffee
- **Fase 3**: Membresía premium para proyectos exclusivos
- Feature flags ya preparados en `site.config.ts`

---

## Archivos de Referencia
- `diseño/DESIGN (1).md` — Design system canónico
- `diseño/homepage/code.html` — Tokens Tailwind + patrón homepage
- `diseño/single/code.html` — Layout bento grid para detalle
- `diseño/infopage/code.html` — Layout about page
- `agents.md` — Definición del equipo de agentes
