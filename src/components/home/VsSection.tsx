import { Zap, X } from 'lucide-react'
import { GradientText, AnimateIn } from '@/components/ui'

const traditional = [
  { text: 'Meses aprendiendo sintaxis antes de hacer algo' },
  { text: 'Debuggear errores de compilación durante horas' },
  { text: 'Necesitas un equipo para lanzar un producto' },
  { text: 'El código es el cuello de botella' },
  { text: 'Stack rígido, curva de aprendizaje alta' },
]

const vibe = [
  { text: 'Primer prototipo funcional en horas' },
  { text: 'La IA explica y corrige mientras construye' },
  { text: 'Un founder puede lanzar solo con IA como equipo' },
  { text: 'El criterio y la visión son el cuello de botella' },
  { text: 'Cualquier stack, aprendizaje continuo en contexto' },
]

export function VsSection() {
  return (
    <section aria-label="Comparación de metodologías" className="bg-surface-low py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <AnimateIn>
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-4">
            // METODOLOGÍA
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            <span className="text-on-surface block">PROGRAMACIÓN</span>
            <GradientText variant="full">REDEFINIDA.</GradientText>
          </h2>
        </AnimateIn>

        {/* Comparison grid */}
        <AnimateIn delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-md overflow-hidden"
          style={{ border: '1px solid rgba(38,38,38,0.8)' }}
        >
          {/* Left — Traditional */}
          <div role="region" aria-label="Programación tradicional" className="bg-[#0e0e0e] p-5 md:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-ultra text-on-surface-variant/40 mb-6">
              TRADICIONAL
            </p>
            <div className="space-y-0">
              {traditional.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-4 transition-colors duration-200 hover:bg-white/[0.02]"
                  style={{
                    borderBottom: i < traditional.length - 1
                      ? '1px solid rgba(255,255,255,0.04)'
                      : 'none',
                  }}
                >
                  <X
                    size={14}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.15)' }}
                  />
                  <span className="text-sm text-on-surface-variant/40 font-light leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Separator only visible on md+ — embedded as border-l */}
          {/* Right — Vibe Coding */}
          <div
            role="region" aria-label="Vibe Coding" className="bg-surface p-5 md:p-8 lg:p-10 md:border-l"
            style={{ borderColor: 'rgba(172,138,255,0.2)' }}
          >
            <p
              className="text-[10px] font-black uppercase tracking-ultra mb-6"
              style={{ color: '#ac8aff' }}
            >
              VIBE CODING
            </p>
            <div className="space-y-0">
              {vibe.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-4 transition-colors duration-200 hover:bg-secondary/[0.05]"
                  style={{
                    borderBottom: i < vibe.length - 1
                      ? '1px solid rgba(172,138,255,0.08)'
                      : 'none',
                  }}
                >
                  <Zap
                    size={14}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#ac8aff' }}
                  />
                  <span className="text-sm text-on-surface font-medium leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
