import { GradientText } from '@/components/ui'

const levels = [
  {
    number: '01',
    badge: 'BEGINNER',
    color: '#8ff5ff',
    bg: 'bg-surface',
    border: 'rgba(143,245,255,0.2)',
    headline: 'Tu primera app con IA',
    description:
      'Construyes algo real desde el primer día. La IA escribe el código y te explica cada decisión mientras avanza — tú defines qué construir y por qué. No memorizar sintaxis: entender cómo funciona un sistema completo.',
    examples: ['Chatbot con personalidad', 'Landing page generada por IA', 'Formulario inteligente'],
  },
  {
    number: '02',
    badge: 'BUILDER',
    color: '#ac8aff',
    bg: 'bg-surface-low',
    border: 'rgba(172,138,255,0.2)',
    headline: 'Apps con lógica real',
    description:
      'Ya entiendes el flujo. Ahora la IA te ayuda a tomar decisiones de arquitectura — bases de datos, autenticación, integraciones. Cada proyecto es una conversación técnica donde tú haces las preguntas correctas.',
    examples: ['Dashboard con datos reales', 'SaaS con auth y pagos', 'API con IA integrada'],
  },
  {
    number: '03',
    badge: 'ARCHITECT',
    color: '#ff89ac',
    bg: 'bg-surface',
    border: 'rgba(255,137,172,0.2)',
    headline: 'Sistemas completos',
    description:
      'Proyectos que otras personas usan. La IA ejecuta; tú diseñas la arquitectura, defines los límites y tomas las decisiones que importan. El criterio y la visión son el cuello de botella — y ambos son tuyos.',
    examples: ['Motor de búsqueda semántico', 'Agentes con memoria persistente', 'Plataforma multi-tenant'],
  },
]

export function LevelsSection() {
  return (
    <section aria-label="Niveles de dificultad" className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-4">
          // NIVELES DE DIFICULTAD
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-on-surface mb-8">
          ELIGE TU{' '}
          <GradientText variant="full">PUNTO DE ENTRADA</GradientText>
        </h2>

        {/* Intro paragraph */}
        <p className="text-base text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
          El punto de entrada no es tu nivel técnico — es tu disposición a construir. Lo que cambia
          según donde estás es cómo usas la IA: al principio te explica, después te cuestiona,
          después ejecuta lo que decides.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levels.map((lvl) => (
            <div
              key={lvl.number}
              role="article"
              className={`relative overflow-hidden rounded-md p-5 md:p-8 flex flex-col group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${lvl.bg}`}
              style={{ border: `1px solid ${lvl.border}` }}
            >
              {/* Decorative number watermark */}
              <span
                className="absolute -top-2 -right-2 text-6xl md:text-8xl font-black select-none pointer-events-none leading-none opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-300"
                style={{ color: lvl.color }}
              >
                {lvl.number}
              </span>

              {/* Badge */}
              <span
                className="self-start inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                style={{
                  background: `rgba(0,0,0,0.3)`,
                  border: `1px solid ${lvl.border}`,
                  color: lvl.color,
                }}
              >
                {lvl.badge}
              </span>

              {/* Headline */}
              <h3
                className="text-xl font-black uppercase tracking-tight text-on-surface mb-3"
              >
                {lvl.headline}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6 flex-1">
                {lvl.description}
              </p>

              {/* Examples */}
              <ul aria-label="Ejemplos de proyectos" className="space-y-2">
                {lvl.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: lvl.color }}
                    />
                    <span className="text-on-surface-variant font-light">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
