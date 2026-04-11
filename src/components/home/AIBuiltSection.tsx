import { Target, Compass, Search, PenLine, Code2, Palette, ShieldCheck } from 'lucide-react'
import { GradientText } from '@/components/ui'

const agents = [
  { name: 'Product Manager',    icon: Target,       color: '#ff89ac', bg: 'rgba(255,137,172,0.08)', border: 'rgba(255,137,172,0.25)' },
  { name: 'Estratega Digital',  icon: Compass,      color: '#ac8aff', bg: 'rgba(172,138,255,0.08)', border: 'rgba(172,138,255,0.25)' },
  { name: 'SEO Specialist',     icon: Search,       color: '#8ff5ff', bg: 'rgba(143,245,255,0.08)', border: 'rgba(143,245,255,0.25)' },
  { name: 'Copywriter',         icon: PenLine,      color: '#fbbf24', bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.25)'  },
  { name: 'Vibe Coding Expert', icon: Code2,        color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.25)'  },
  { name: 'UI Design',          icon: Palette,      color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.25)'  },
  { name: 'QA',                 icon: ShieldCheck,  color: '#2dd4bf', bg: 'rgba(45,212,191,0.08)', border: 'rgba(45,212,191,0.25)'  },
]

const stack = ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel']

const roadmap = [
  { phase: 'MVP',         label: 'Homepage + proyectos',          status: 'done'    },
  { phase: 'V2',          label: 'Detalle de proyectos + SEO',    status: 'done'    },
  { phase: 'NEXT',        label: 'Newsletter + analytics',        status: 'current' },
  { phase: 'Q2–Q3 2026',  label: 'Responsive + accesibilidad',    status: 'planned' },
  { phase: 'FUTURO',      label: 'Ko-fi · Membership · +Proyectos', status: 'future' },
]

const stats = [
  { value: '~25', label: 'COMPONENTES' },
  { value: '5', label: 'PROYECTOS' },
  { value: '100%', label: 'IA BUILT', accent: true },
]

const terminalLines = [
  { prompt: true, text: 'claude "build vibeiscoding.com"' },
  { check: true, text: 'Fase 0: Estrategia y contenido' },
  { check: true, text: 'Fase 1: Scaffolding Next.js 15' },
  { check: true, text: 'Fase 2: 25+ componentes' },
  { check: true, text: 'Fase 3: 5 proyectos MDX publicados' },
  { check: true, text: 'Fase 4: SEO, analytics, newsletter' },
  { check: true, text: 'Deploy en producción' },
]

export function AIBuiltSection() {
  return (
    <section className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-8">
          // DE PROMPTS A PRODUCCIÓN
        </p>

        {/* Bento grid — 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* CELDA A — Titular (col-span-7) */}
          <div
            className="md:col-span-7 rounded-md p-5 md:p-8 relative overflow-hidden"
            style={{ background: '#1e0c14', border: '1px solid rgba(255,137,172,0.2)' }}
          >
            {/* Ambient glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.08) 0%, transparent 70%)' }}
            />
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{ background: 'rgba(255,137,172,0.1)', border: '1px solid rgba(255,137,172,0.3)', color: '#ff89ac' }}
            >
              CLAUDE SONNET 4.6
            </span>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              <span className="text-on-surface">CONSTRUIDO</span>
              <br />
              <span className="text-on-surface">POR IA.</span>
              <br />
              <GradientText variant="primary">DIRIGIDO POR MÍ.</GradientText>
            </h2>
            <div className="mt-6 h-px w-16" style={{ background: 'rgba(255,137,172,0.3)' }} />
            <p className="mt-4 text-on-surface-variant font-light leading-relaxed text-sm max-w-sm">
              Cada componente, página y decisión de arquitectura — generados con Claude Code,
              sin escribir una línea de código a mano.{' '}
              <span className="text-on-surface font-normal">Cada decisión fue mía.</span>
            </p>
            <p className="mt-3 text-on-surface-variant/40 font-light text-xs max-w-sm leading-relaxed">
              Esta es la herramienta que usamos para construir este sitio.
              Tu puedes replicar el mismo proceso con Cursor, Windsurf o cualquier agente que ya uses.
            </p>
          </div>

          {/* CELDA B — Agentes (col-span-5) */}
          <div
            className="md:col-span-5 bg-[#14102c] rounded-md p-6 md:p-8 flex flex-col justify-between"
            style={{ border: '1px solid rgba(172,138,255,0.2)' }}
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-ultra mb-6" style={{ color: '#ac8aff' }}>
                AGENT TEAM
              </p>
              <div className="grid grid-cols-2 gap-2">
                {agents.map((agent, i) => {
                  const Icon = agent.icon
                  const isLast = i === agents.length - 1
                  const isOdd = agents.length % 2 !== 0
                  return (
                    <div
                      key={agent.name}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md ${isLast && isOdd ? 'col-span-2' : ''}`}
                      style={{
                        background: agent.bg,
                        border: `1px solid ${agent.border}`,
                      }}
                    >
                      <Icon size={16} style={{ color: agent.color }} className="flex-shrink-0" />
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest leading-tight"
                        style={{ color: agent.color }}
                      >
                        {agent.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <p className="mt-6 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
              7 agentes especializados coordinados por Claude
            </p>
          </div>

          {/* CELDA C — Stack (col-span-4) */}
          <div
            className="md:col-span-4 bg-[#0c1e22] rounded-md p-6"
            style={{ border: '1px solid rgba(143,245,255,0.2)' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-ultra mb-4" style={{ color: '#8ff5ff' }}>
              STACK
            </p>
            <div className="space-y-2">
              {stack.map((item, i) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="font-mono text-xs" style={{ color: '#8ff5ff' }}>{item}</span>
                  {i < stack.length - 1 && (
                    <span className="text-[#3a3a3a] text-xs">·</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400/70">DEPLOYED</span>
            </div>
          </div>

          {/* CELDA D — Stats (col-span-4) */}
          <div
            className="md:col-span-4 bg-[#0c1a20] rounded-md p-6"
            style={{ border: '1px solid rgba(143,245,255,0.2)' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-ultra mb-5" style={{ color: '#8ff5ff' }}>
              BY THE NUMBERS
            </p>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span
                    className="text-3xl font-black tracking-tighter"
                    style={{ color: stat.accent ? '#ff89ac' : '#f0f0f0' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CELDA E — Roadmap (col-span-4) */}
          <div
            className="md:col-span-4 bg-[#111828] rounded-md p-6"
            style={{ border: '1px solid rgba(172,138,255,0.2)' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-ultra mb-5" style={{ color: '#ac8aff' }}>
              ROADMAP
            </p>
            <div className="space-y-3">
              {roadmap.map((item) => (
                <div key={item.phase} className="flex items-start gap-3">
                  {/* Status indicator */}
                  <div className="mt-0.5 flex-shrink-0">
                    {item.status === 'done'    && <span className="block w-2 h-2 rounded-full bg-green-400" />}
                    {item.status === 'current' && <span className="block w-2 h-2 rounded-full bg-primary-dim animate-pulse" />}
                    {item.status === 'planned' && <span className="block w-2 h-2 rounded-full bg-secondary/40" />}
                    {item.status === 'future'  && <span className="block w-2 h-2 rounded-full bg-outline-variant/30" />}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/40 leading-none mb-0.5">
                      {item.phase}
                    </p>
                    <p className={`text-xs font-light ${item.status === 'done' ? 'text-on-surface' : item.status === 'current' ? 'text-on-surface font-medium' : 'text-on-surface-variant/50'}`}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CELDA F — El proceso / plan (col-span-5) */}
          <div
            className="md:col-span-5 bg-[#1e0c14] rounded-md p-6 relative overflow-hidden"
            style={{ border: '1px solid rgba(255,137,172,0.25)' }}
          >
            <p className="text-[10px] font-bold uppercase tracking-ultra mb-3" style={{ color: '#ff89ac' }}>
              THE PROCESS
            </p>
            <p className="text-xs text-on-surface-variant/60 mb-4 font-light">
              From plan.md to production — el documento real de planificación del proyecto.
            </p>
            {/* Blurred document preview */}
            <div className="relative rounded-md overflow-hidden mb-5" style={{ background: '#0e0e0e', padding: '12px 14px' }}>
              <div className="font-mono text-[10px] text-on-surface-variant/30 space-y-1 select-none">
                <p># Plan de Desarrollo: vibeiscoding.com</p>
                <p>## Fase 0: Estrategia y Contenido</p>
                <p>## Fase 1: Scaffolding del Proyecto</p>
                <p>## Fase 2: Componentes UI</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-8"
                style={{ background: 'linear-gradient(transparent, #191919)' }}
              />
            </div>
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-md"
              style={{
                background: 'rgba(255,137,172,0.08)',
                border: '1px solid rgba(255,137,172,0.3)',
                color: '#ff89ac',
              }}
            >
              PRÓXIMAMENTE — /PROCESO
            </span>
          </div>

          {/* CELDA G — Terminal (col-span-7) */}
          <div
            className="md:col-span-7 bg-[#0e1410] rounded-md overflow-hidden"
            style={{ border: '1px solid rgba(74,222,128,0.15)' }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(74,222,128,0.15)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-[10px] text-on-surface-variant/30">vibeiscoding — bash</span>
            </div>
            {/* Terminal body */}
            <div className="px-5 py-4 font-mono text-xs space-y-1.5">
              {terminalLines.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  {line.prompt && (
                    <span style={{ color: '#ff89ac' }}>{'>'}</span>
                  )}
                  {line.check && (
                    <span style={{ color: '#8ff5ff' }}>✓</span>
                  )}
                  <span className="text-on-surface-variant/60">{line.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 mt-1">
                <span style={{ color: '#ff89ac' }}>{'>'}</span>
                <span className="w-2 h-3 bg-white/70 animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
