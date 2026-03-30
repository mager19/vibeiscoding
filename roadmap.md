# Roadmap — vibeiscoding.com
*Última actualización: 2026-03-29*

---

## Estado actual del MVP

- Fase 0 completada: estrategia, SEO, contenido de 5 proyectos, copy y design system
- Fase 1 completada: scaffolding Next.js + TypeScript + Tailwind + MDX + Zod + i18n
- Fase 2 completada: todos los componentes UI (primitivos, layout, homepage, bento grid, about)
- Stack: Next.js App Router, TypeScript, Tailwind CSS "Luminescent Void", next-mdx-remote, Vercel
- Homepage actual: Hero → Grid de proyectos → Sección "Hecho con IA" (bento) → Newsletter

---

## Roadmap de fases

### Fase 3 (en progreso)
- Páginas de detalle `/proyectos/[slug]`
- Homepage (`/`) conectada con `getAllProjects()`
- About (`/sobre`)
- Páginas legales (`/privacidad`, `/terminos`)
- Página 404 con design system
- 5 archivos MDX con contenido completo
- SEO: `generateMetadata` por tipo de página, JSON-LD structured data, `sitemap.ts`, `robots.txt`

### Fase 4
- Newsletter Mailchimp — API route proxy `/api/newsletter`, estados loading/success/error
- Analytics Umami — script condicional en root layout, setup de cuenta cloud
- Responsive polish — mobile (375px), tablet (768px), desktop (1280px+)
- Animaciones — hover en cards (scale, glow), smooth scroll
- Performance — `next/image`, font optimization, verificar SSG
- Accesibilidad — focus indicators, HTML semántico, alt text, contraste

### Fase 5
- QA checklist completo
- Cross-browser: Chrome, Firefox, Safari (desktop + mobile)
- Lighthouse 95+ en todas las categorías
- Deploy a Vercel — conectar repo GitHub
- Configuración dominio vibeiscoding.com + DNS
- Variables de entorno: Mailchimp API key, Umami website ID
- Verificar SSL y build de producción

---

## Ideas de nuevas secciones para el homepage

> Propuesta del equipo (Estratega + SEO + PM) para expandir el homepage más allá del MVP actual.
> El homepage actual: Hero → Grid de proyectos → Sección "Hecho con IA" → Newsletter.

---

### 1. Stack de Herramientas Destacadas

**Qué muestra:** Grid visual de las herramientas de IA más usadas en los proyectos del blog (Cursor, Claude, ChatGPT, Vercel, Replit, v0, etc.) con una línea de descripción y enlace a cada una.

**Por qué agrega valor:**
- *Usuario*: Referencia rápida de herramientas para empezar. Es una de las primeras preguntas de un developer que entra al vibe coding: "¿con qué herramientas arranco?"
- *SEO*: Keywords long-tail como "mejores herramientas para vibe coding", "cursor vs chatgpt para programar", "herramientas de IA para developers". Potencial de featured snippet.

**Prioridad:** Alta — responde la pregunta más frecuente de la audiencia objetivo.
**Complejidad:** Baja — datos estáticos, grilla de logos + texto. No requiere backend.

---

### 2. Proyecto Destacado de la Semana

**Qué muestra:** Un card grande (hero card) con el proyecto más reciente o seleccionado manualmente — imagen, título, nivel de dificultad, tech stack, y CTA a la página de detalle.

**Por qué agrega valor:**
- *Usuario*: Punto de entrada editorial que guía la atención. Reduce la parálisis de "¿por cuál empiezo?"
- *SEO*: Rotación de contenido en la homepage señaliza actualidad a Google. El proyecto destacado puede tener un rich snippet mejorado.

**Prioridad:** Alta — bajo esfuerzo editorial (1 decisión por semana) con alto impacto visual.
**Complejidad:** Baja — campo `featured: true` en frontmatter MDX ya existe en el schema.

---

### 3. Vibe Coding vs Programación Tradicional

**Qué muestra:** Comparativa visual en formato tabla o dos columnas: qué se necesitaba antes (IDE complejo, años de estudio, conocer el stack de memoria) vs qué se necesita con vibe coding (un buen prompt, claridad del problema, herramientas de IA). Mensaje central: no reemplaza el pensamiento, amplifica la velocidad.

**Por qué agrega valor:**
- *Usuario*: Elimina la barrera de entrada para devs con dudas sobre "si esto es para mí". Es contenido que convierte visitantes escépticos.
- *SEO*: Ataca keywords informacionales de alto volumen como "qué es vibe coding", "vibe coding para principiantes", "diferencia vibe coding programación". Ideal para posicionamiento educativo.

**Prioridad:** Alta — SEO y conversión de primer visit. Refuerza el posicionamiento del blog.
**Complejidad:** Baja — contenido estático, layout de dos columnas con iconografía.

---

### 4. Explainer de Niveles de Dificultad

**Qué muestra:** Descripción visual de los tres niveles del blog (Principiante / Intermedio / Avanzado) con criterios claros — qué conocimiento se asume, qué herramientas se usan, tiempo estimado. Puede ir justo antes o después de la grilla de proyectos.

**Por qué agrega valor:**
- *Usuario*: Contexto clave antes de explorar proyectos. Reduce el rebote de quien entra y no sabe si el contenido es para él.
- *SEO*: Señaliza la estructura temática del sitio a los crawlers. Puede aparecer en búsquedas como "proyectos de programación con IA para principiantes".

**Prioridad:** Alta — directamente ligado a la arquitectura de contenido del sitio.
**Complejidad:** Baja — tres bloques de texto + iconos. Contenido estático del diccionario i18n.

---

### 5. Stats del Sitio (Social Proof)

**Qué muestra:** Números clave del proyecto en formato destacado: proyectos publicados, herramientas curadas, suscriptores al newsletter, fecha de lanzamiento. Pueden ser estáticos al principio y dinámicos después.

**Por qué agrega valor:**
- *Usuario*: Genera confianza y percepción de comunidad activa incluso siendo un MVP temprano. "12 proyectos publicados, 3 niveles, 1 newsletter" ya es credible.
- *SEO*: Señal de contenido actualizado y sitio activo. Posible marcado con `schema.org/WebSite`.

**Prioridad:** Media — más impacto cuando hay masa crítica de contenido (20+ proyectos, 500+ suscriptores).
**Complejidad:** Baja — datos estáticos en un primer momento, dinámicos vía CMS/API después.

---

### 6. FAQ — Preguntas Frecuentes sobre Vibe Coding

**Qué muestra:** 5-7 preguntas frecuentes con respuestas directas: "¿Necesito saber programar para empezar?", "¿Qué herramienta recomiendan para comenzar?", "¿Cuánto tiempo tarda hacer un proyecto?", "¿Es gratis?", etc. Formato acordeón expandible.

**Por qué agrega valor:**
- *Usuario*: Responde objeciones y dudas en el momento exacto de decisión. Reduce la fricción para suscribirse o explorar proyectos.
- *SEO*: El FAQ con markup `schema.org/FAQPage` activa rich results en Google (preguntas expandibles en SERP). Alto impacto en CTR orgánico.

**Prioridad:** Media — SEO de alto retorno pero no crítico para el lanzamiento.
**Complejidad:** Baja — contenido estático, componente acordeón simple.

---

### 7. Testimonios / Reacciones de la Comunidad

**Qué muestra:** 3-5 citas de developers hispanohablantes que probaron los proyectos, con nombre, avatar, y red social de origen (X/Twitter, LinkedIn). Puede incluir screenshots de respuestas reales si el dueño las recopila.

**Por qué agrega valor:**
- *Usuario*: Prueba social que valida que los proyectos funcionan y son realizables. Crítico para conversión en etapas tempranas.
- *SEO*: Contenido generado por usuarios señaliza relevancia temática. Posible marcado con `schema.org/Review`.

**Prioridad:** Media — depende de tener testimonios reales. Placeholder o "sé el primero" en MVP.
**Complejidad:** Media — necesita proceso de recopilación y moderación de testimonios.

---

### 8. Últimas Publicaciones / Feed de Actividad

**Qué muestra:** Lista compacta (3-5 ítems) de los proyectos más recientes con fecha, nivel, y título. Opcionalmente incluye actualizaciones del blog como "nuevo proyecto publicado" o "guía actualizada".

**Por qué agrega valor:**
- *Usuario*: Razón para volver al sitio regularmente. Convierte visitantes únicos en lectores habituales.
- *SEO*: Contenido dinámico en homepage es señal de sitio activo. Mejora el crawl budget y la indexación de nuevo contenido.

**Prioridad:** Baja para MVP (solo hay 5 proyectos), Alta cuando haya 10+ publicaciones.
**Complejidad:** Baja — `getAllProjects()` ya existe, ordenar por fecha y mostrar los últimos N.

---

### Tabla resumen de prioridades

| # | Sección | Prioridad | Complejidad | Fase sugerida |
|---|---------|-----------|-------------|---------------|
| 1 | Stack de Herramientas Destacadas | Alta | Baja | Fase 3-4 |
| 2 | Proyecto Destacado de la Semana | Alta | Baja | Fase 3 |
| 3 | Vibe Coding vs Programación Tradicional | Alta | Baja | Fase 3-4 |
| 4 | Explainer de Niveles de Dificultad | Alta | Baja | Fase 3 |
| 5 | Stats del Sitio | Media | Baja | Fase 4-5 |
| 6 | FAQ — Preguntas Frecuentes | Media | Baja | Fase 4 |
| 7 | Testimonios / Reacciones | Media | Media | Fase 5+ |
| 8 | Últimas Publicaciones / Feed | Baja→Alta | Baja | Fase 5+ |

**Orden de implementación recomendado para el homepage final:**
Hero → Proyecto Destacado → Grid de Proyectos → Explainer de Niveles → Vibe Coding vs Tradicional → Herramientas → Stats → FAQ → Newsletter

---

## Evaluación estratégica: Sección de Patrocinadores

> Análisis del equipo (Estratega Digital + SEO Specialist + Product Manager).

---

### Estratega Digital

**¿Tiene sentido en el MVP?**

No. En el MVP es prematuro y puede tener el efecto contrario al deseado. Una sección de patrocinadores en un sitio con 0-500 visitas mensuales proyecta una imagen de "sitio que necesita dinero" antes que "sitio de referencia". La audiencia de developers hispanohablantes es especialmente sensible a la autenticidad — si ven sponsors en un sitio que recién lanza, lo perciben como spam antes que como validación.

El momento correcto para activarlo es cuando se cumplan estas condiciones simultáneamente:
- Tráfico orgánico sostenido: mínimo 2.000–3.000 visitas/mes durante 2 meses consecutivos
- Audiencia consolidada: 300–500 suscriptores al newsletter activos (tasa apertura >30%)
- Contenido establecido: 15+ proyectos publicados con niveles variados
- Comunidad visible: menciones en redes sociales, comentarios, o forks de proyectos

**¿Qué tipos de patrocinadores encajan?**

La audiencia son developers hispanohablantes que quieren construir con IA. Los patrocinadores con mayor fit:

1. *Herramientas de IA para código*: Cursor, Windsurf, GitHub Copilot, Codeium
2. *Plataformas cloud y hosting*: Vercel, Railway, Fly.io, Cloudflare Workers
3. *APIs de IA*: Anthropic Claude API, OpenAI, Groq, Together AI
4. *Cursos y educación*: Platzi, Midudev, cualquier instructor de programación en español
5. *Herramientas SaaS para developers*: Supabase, PlanetScale, Upstash, Resend
6. *Servicios de productividad*: Notion, Linear, GitHub Teams

Evitar: productos financieros, crypto/NFT, VPN genéricas — dañan la credibilidad editorial.

**¿Cómo posicionarlo sin parecer "vendido"?**

Transparencia radical. El modelo de newsletters técnicas como TLDR, Bytes, o This Week in React funciona porque son explícitamente patrocinadas y el lector lo sabe. La clave es:

- Etiquetar todo contenido patrocinado con "Patrocinado" o "Sponsor" de forma visible
- Separar editorialmente sponsors de recomendaciones genuinas ("Herramientas que uso" vs "Partner")
- Publicar una página `/sponsors` con criterios de selección y política de transparencia
- Solo aceptar productos que el dueño haya probado o que encajen orgánicamente con el contenido

---

### SEO Specialist

**Implicaciones SEO del contenido patrocinado:**

El principal riesgo SEO es el link juice de links patrocinados. Cualquier enlace hacia el patrocinador debe llevar el atributo `rel="nofollow sponsored"` — esto es requisito de Google para links pagados. No hacerlo puede resultar en penalización manual.

**Riesgos concretos:**
- *Trust y E-E-A-T*: Google evalúa Experience, Expertise, Authoritativeness, Trustworthiness. Sponsors mal integrados (poco relevantes, muchos, sin transparencia) bajan la percepción de autoridad del sitio.
- *Contenido patrocinado como página propia*: Si se crea una página `/patrocinadores` o cards de sponsors con texto, deben tener `noindex` si son puramente comerciales, o contenido editorial de valor para indexar.
- *Dilución de señal temática*: Si los sponsors son de temas ajenos al desarrollo con IA, confunden a Google sobre el tema central del sitio.

**Cómo estructurarlo correctamente:**
- Usar `rel="nofollow sponsored"` en todos los links de patrocinadores
- Mantener el ratio de contenido patrocinado vs editorial bajo: no más de 1 sponsor por cada 5-10 proyectos
- Integrar sponsors dentro del contexto temático (ej: un proyecto usa Vercel → sponsor de Vercel en esa página tiene coherencia semántica)
- Separar visualmente con CSS el contenido patrocinado — esto también lo requiere la FTC y equivalente en legislación española/latinoamericana

---

### Product Manager

**Pros concretos:**
- Monetización directa sin barrera de membresía (el usuario no paga)
- Valida el mercado: si alguien paga por aparecer, el sitio tiene audiencia de valor
- Legitima el proyecto como negocio sostenible, lo que puede atraer más colaboración y contribuciones
- Los mejores sponsors son también los mejores partners para contenido (casos de uso, integraciones)

**Contras concretos:**
- En MVP con poco tráfico: imposible conseguir sponsors de calidad (los buenos tienen mínimos de audiencia)
- Tiempo de gestión alto: negociar, crear assets, revisar copy, procesar pagos — distrae del contenido
- Riesgo de credibilidad si se acepta cualquier sponsor por necesidad económica
- Complejidad legal: contrato, facturación, cumplimiento FTC/GDPR

**Alternativas al modelo tradicional (recomendadas antes de sponsors):**

1. *"Herramientas que uso"*: Sección o página con afiliados transparentes de herramientas que el dueño realmente usa. Sin contratos, sin gestión — solo links con `ref=vibeiscoding`. Ejemplo: enlace a Cursor con afiliado. Ingresos pasivos desde el día 1. Cero fricción editorial.

2. *Ko-fi / Buy Me a Coffee*: Donaciones voluntarias de la comunidad. Ya está en el plan como Fase 2 del plan original. Modelo de soporte directo sin intermediarios.

3. *Afiliados de cursos*: Platzi, Udemy, y otros tienen programas de afiliados. Si el blog recomienda cursos en proyectos, el link de afiliado es natural y transparente.

4. *Membresía de proyectos exclusivos*: Modelo freemium — proyectos básicos gratis, proyectos avanzados/premium con membresía. Ya contemplado como Fase 3 en el plan original.

**Recomendación final:**

Agregar al roadmap como **Fase 6** (post-lanzamiento y con audiencia probada), NO como Fase 2 o 3.

El camino correcto de monetización para vibeiscoding.com en orden:
1. Fase 2: Ko-fi / Buy Me a Coffee (donaciones — ya en plan)
2. Fase 3: Afiliados transparentes ("Herramientas que uso")
3. Fase 4-5: Membresía premium para proyectos avanzados
4. **Fase 6**: Patrocinadores formales — solo cuando tráfico y newsletter justifiquen el esfuerzo

El modelo de sponsors tiene ROI positivo cuando el costo de gestión es menor que el ingreso generado. Eso requiere escala. Sin escala, es una distracción que puede dañar la reputación del proyecto antes de que esta esté consolidada.

---

### Decisión de roadmap: Patrocinadores

| Opción | Decisión |
|--------|----------|
| Agregar como Fase 2 | No — prematuro, audiencia insuficiente |
| Agregar como Fase 3 | No — el foco debe ser crecer el contenido y la audiencia |
| Agregar como Fase 4-5 | No — fases reservadas para afiliados y membresía |
| **Agregar como Fase 6** | **Sí — cuando tráfico ≥ 3.000 visitas/mes y 500 suscriptores** |
| Descartar permanentemente | No — tiene potencial real con la audiencia correcta |

---

## Ideas futuras adicionales

Surgidas del análisis de las dos tareas anteriores, para no perderlas:

### Contenido
- **Guías de herramientas**: Páginas `/herramientas/cursor`, `/herramientas/claude`, etc. con reviews y casos de uso — alto potencial SEO en keywords informacionales
- **Serie "Construí esto en X horas"**: Formato de proyectos con tiempo real documentado — storytelling que engancha y es muy compartible en redes
- **Directorio de recursos**: Lista curada de repos, tutoriales, y recursos en español sobre vibe coding — posicionamiento como hub de referencia

### Funcionalidades
- **Filtros por nivel y stack**: Ya contemplado con feature flags — activar cuando haya 10+ proyectos
- **Búsqueda**: Full-text search simple con Fuse.js o Algolia cuando haya volumen suficiente de contenido
- **RSS feed**: Automático desde Next.js — audiencia técnica lo valorará para seguir el blog desde lectores de feeds

### Comunidad
- **Discord o grupo privado**: Canal de comunidad para developers que están construyendo proyectos del blog — crea retención y genera testimonios orgánicos
- **"Hall of Fame"**: Sección donde usuarios muestran qué construyeron inspirándose en el blog — UGC que valida el contenido y genera tráfico de vuelta
- **Newsletter con casos reales**: Formato "developer hizo X proyecto en Y días usando Z herramienta" — storytelling basado en la comunidad

### Monetización (hoja de ruta completa)
| Fase | Mecanismo | Prerequisito |
|------|-----------|--------------|
| Fase 4 (post-lanzamiento) | Ko-fi / Buy Me a Coffee | Lanzamiento público |
| Fase 5 | Afiliados transparentes | 1.000+ visitas/mes |
| Fase 6 | Membresía premium | 500+ suscriptores |
| Fase 7 | Patrocinadores formales | 3.000+ visitas/mes |
