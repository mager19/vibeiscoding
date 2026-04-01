import { GlassPanel } from '@/components/ui'

const steps = [
  {
    date: '29 mar 2026',
    phase: 'SESIÓN 1 — IDEA Y SCOPE',
    summary: 'Primera conversación. Se define el proyecto: blog de ideas de Vibe Coding organizadas por nivel de dificultad. Se decide el stack (Next.js 15, Tailwind v3, MDX), el design system "The Luminescent Void", y el modelo de negocio (MVP gratuito, monetización futura).',
    details: [
      'Stack: Next.js 15 App Router + TypeScript + Tailwind CSS v3',
      'Contenido: MDX con next-mdx-remote + gray-matter + validación Zod',
      'Design system: fuchsia #ff89ac/#e30071, violet #ac8aff, cyan #8ff5ff, void negro',
      'Decisión: sin video background — CSS gradient animado por performance',
      'i18n: diccionario de strings en español neutro, preparado para multiidioma',
    ],
    status: 'done',
    color: '#8ff5ff',
  },
  {
    date: '29 mar 2026',
    phase: 'FASE 0 — AGENTES ESPECIALIZADOS',
    summary: '7 agentes de Claude generan toda la estrategia y el contenido base. Cada agente tiene un rol específico y sus outputs alimentan las fases siguientes.',
    details: [
      'Product Manager → scope del MVP, backlog priorizado',
      'Estratega Digital → sitemap, user journey, roadmap de monetización',
      'SEO Specialist → keywords, estructura de URLs, meta templates, schema.org',
      'Vibe Coding Expert → 5 proyectos completos con tech stack y pasos',
      'Copywriter → hero copy, about, microcopy en español neutro',
      'UI/Design → design system unificado, inventario de componentes',
    ],
    status: 'done',
    color: '#ac8aff',
  },
  {
    date: '29 mar 2026',
    phase: 'FASE 1 — SCAFFOLDING',
    summary: 'Estructura del proyecto desde cero. Sin create-next-app (el directorio ya tenía archivos). Instalación manual de dependencias, config de Tailwind con los tokens del design system, y toda la infraestructura base.',
    details: [
      'Tailwind v3 instalado explícitamente (Next.js 15 trae v4 por defecto)',
      'tailwind.config.ts con tokens completos: colores, tipografía, sombras, gradientes',
      'site.config.ts con feature flags: newsletter, analytics, donations, membership',
      'Tipos Zod para frontmatter de proyectos MDX',
      'Diccionario i18n: src/lib/i18n/es.ts con todos los strings del sitio',
      '5 archivos MDX de proyectos con contenido completo',
    ],
    status: 'done',
    color: '#ff89ac',
  },
  {
    date: '29 mar 2026',
    phase: 'FASE 2 — COMPONENTES UI',
    summary: '50+ componentes implementados siguiendo el design system. Iteración visual intensa: colores, botones, tipografía, efectos y animaciones.',
    details: [
      'UI primitivos: Button (4 variantes), GradientText, GlassPanel, Card, Chip, LevelBadge',
      'Layout: Navbar glassmorphism, Footer, menú mobile',
      'Hero: gradiente CSS animado + grain overlay + HeroBeam (SVG stroke-dashoffset)',
      'ProjectCard, ProjectGrid, BentoGrid para detalle',
      'Corrección hydration mismatch (LanguageTool extension → suppressHydrationWarning)',
      'Iteración de botones: solid fuchsia #e30071, hover color change, tamaño reducido',
    ],
    status: 'done',
    color: '#fbbf24',
  },
  {
    date: '29 mar 2026',
    phase: 'FASE 3 — PÁGINAS Y CONTENIDO',
    summary: 'Páginas del sitio, sección meta del proceso, bento grid transparente sobre cómo se construyó vibeiscoding.com.',
    details: [
      'Página /sobre con manifiesto estructurado en 6 secciones editables',
      'Sección AIBuiltSection: bento grid de 7 celdas mostrando el proceso',
      'Agentes con colores únicos e iconos Lucide',
      'Roadmap del proyecto integrado en el bento',
      'Timeline de proceso (este componente)',
    ],
    status: 'done',
    color: '#4ade80',
  },
  {
    date: 'próximamente',
    phase: 'FASE 4 — INTEGRACIONES',
    summary: 'Newsletter con Mailchimp, analytics con Umami, responsive polish y accesibilidad.',
    details: [
      'API route /api/newsletter proxy a Mailchimp',
      'Script de Umami analytics condicional',
      'Responsive completo: mobile 375px, tablet 768px, desktop 1280px+',
      'Lighthouse 95+ en todas las categorías',
    ],
    status: 'pending',
    color: '#ac8aff',
  },
  {
    date: 'próximamente',
    phase: 'FASE 5 — QA Y DEPLOY',
    summary: 'Testing completo, checklist de QA, deploy a Vercel con dominio vibeiscoding.com.',
    details: [
      'QA checklist: navegación, responsiveness, meta tags, newsletter',
      'Deploy en Vercel free tier',
      'Configuración de dominio vibeiscoding.com',
      'Variables de entorno: Mailchimp API key, Umami website ID',
    ],
    status: 'pending',
    color: '#fb923c',
  },
]

export function ProcessTimeline() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
            // transparencia radical
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-on-surface">
            CÓMO SE CONSTRUYÓ ESTO
          </h2>
          <p className="mt-4 text-on-surface-variant font-light max-w-xl leading-relaxed">
            Este es el registro real del proceso. Cada decisión, cada iteración, cada agente usado —
            documentado tal como ocurrió en la conversación con Claude.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, rgba(172,138,255,0.4), rgba(143,245,255,0.2))' }} />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="relative md:pl-10">
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full hidden md:block"
                  style={{
                    background: step.status === 'pending' ? 'transparent' : step.color,
                    border: `2px solid ${step.color}`,
                    opacity: step.status === 'pending' ? 0.4 : 1,
                  }}
                />

                <GlassPanel className={`p-6 md:p-8 ${step.status === 'pending' ? 'opacity-50' : ''}`}>
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                        color: step.color,
                      }}
                    >
                      {step.phase}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/40 font-mono">
                      {step.date}
                    </span>
                    {step.status === 'done' && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-green-400/70">
                        ✓ completado
                      </span>
                    )}
                    {step.status === 'pending' && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                        style={{ background: 'rgba(172,138,255,0.08)', border: '1px solid rgba(172,138,255,0.25)', color: '#ac8aff' }}
                      >
                        PRÓXIMAMENTE
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-on-surface-variant font-light leading-relaxed text-sm mb-5">
                    {step.summary}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-on-surface-variant/60 font-light">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.color, opacity: 0.6 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
