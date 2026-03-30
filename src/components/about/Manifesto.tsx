import { GlassPanel } from '@/components/ui'

const sections = [
  {
    label: 'EL PROBLEMA',
    placeholder: true,
    content:
      'Escribe aquí: ¿qué frustración o vacío existía antes de crear el proyecto? ¿Qué te faltaba cuando querías aprender a programar con IA?',
  },
  {
    label: 'EL QUIEBRE',
    placeholder: true,
    content:
      'Escribe aquí: el momento o idea que lo cambió todo. ¿Por qué vibe coding, por qué ahora?',
  },
  {
    label: 'FILOSOFÍA',
    placeholder: true,
    content:
      'Escribe aquí: cómo entiendes el vibe coding. No es magia ni atajo — es un cambio de flujo de trabajo.',
  },
  {
    label: 'CÓMO TRABAJO',
    placeholder: true,
    content:
      'Escribe aquí: tu proceso real. Cómo usas la IA como co-pilot. Qué herramientas. Qué decisiones siguen siendo tuyas.',
  },
  {
    label: 'PARA QUIÉN ES ESTO',
    placeholder: true,
    content:
      'Escribe aquí: a quién le hablas. A quién no. Sé honesto sobre el público objetivo.',
  },
  {
    label: 'EL COMPROMISO',
    placeholder: true,
    content:
      'Escribe aquí: qué puede esperar quien siga el blog. Sin promesas vacías.',
  },
]

export function Manifesto() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
            // filosofía
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-on-surface">
            EL MANIFIESTO
          </h2>
        </div>

        {/* Sections */}
        <GlassPanel className="p-10">
          {sections.map((section, i) => (
            <div key={section.label}>
              <div className="py-8">
                <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
                  {section.label}
                </p>
                <p
                  className={`text-on-surface-variant font-light leading-relaxed${
                    section.placeholder ? ' opacity-40 italic' : ''
                  }`}
                >
                  {section.content}
                </p>
              </div>
              {i < sections.length - 1 && (
                <hr className="border-outline-variant/10" />
              )}
            </div>
          ))}
        </GlassPanel>
      </div>
    </section>
  )
}
