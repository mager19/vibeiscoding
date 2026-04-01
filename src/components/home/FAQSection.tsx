import { GradientText } from '@/components/ui'

const faqs = [
  {
    q: '¿Necesito saber programar para empezar con Vibe Coding?',
    a: 'No necesitas experiencia previa en código, pero sí disposición a pensar con lógica. Lo más importante es saber describir con claridad lo que quieres construir. La IA se encarga de la sintaxis; tú te encargas de la dirección.',
    color: '#8ff5ff',
  },
  {
    q: '¿Qué herramienta de IA recomiendan para empezar?',
    a: 'La mejor herramienta es la que ya tienes o la que más te llame la atención: Claude Code (Anthropic), Cursor, GitHub Copilot, Windsurf, o ChatGPT con cualquier editor. El método es el mismo en todas — la herramienta no es el requisito, la forma de dirigir la IA sí lo es.',
    color: '#ac8aff',
  },
  {
    q: '¿El código generado por IA es de calidad de producción?',
    a: 'Depende de cómo lo diriges. Con prompts bien estructurados, revisión activa y decisiones de arquitectura claras, sí. Sin criterio, produce código que funciona pero que no escala. La diferencia la pone el director humano.',
    color: '#ff89ac',
  },
  {
    q: '¿Cuánto cuesta usar las herramientas de IA mencionadas?',
    a: 'La mayoría tiene un free tier suficiente para empezar. Los proyectos de nivel principiante caben en esos límites. Para proyectos más complejos, un plan pro de ~$20/mes en cualquiera de las opciones cubre ampliamente el uso mensual de desarrollo.',
    color: '#8ff5ff',
  },
  {
    q: '¿Los proyectos son tutoriales paso a paso?',
    a: 'No. Son ideas concretas con contexto suficiente para que la IA construya, no instrucciones que tú sigues. La diferencia es fundamental: aquí tú diriges, la IA ejecuta.',
    color: '#ac8aff',
  },
  {
    q: '¿Puedo usar estos proyectos para mi portfolio o como negocio?',
    a: 'Completamente. Todos los proyectos están diseñados para ser reales y desplegables. Muchos se pueden convertir directamente en productos o features comerciales.',
    color: '#ff89ac',
  },
]

export function FAQSection() {
  return (
    <section aria-label="Preguntas frecuentes" className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-4">
          // PREGUNTAS FRECUENTES
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-on-surface mb-12">
          <GradientText variant="full">FAQ</GradientText>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <div
                key={i}
                className="glass-panel rounded-xl relative overflow-hidden p-4 md:p-6"
                style={{ borderLeft: `2px solid ${faq.color}` }}
              >
                {/* Watermark number */}
                <span
                  className="absolute -bottom-4 -right-2 text-6xl font-black select-none pointer-events-none leading-none"
                  style={{ color: faq.color, opacity: 0.05 }}
                >
                  {num}
                </span>

                <dl>
                  <dt className="text-sm font-bold uppercase tracking-wide text-on-surface leading-snug mb-3">
                    {faq.q}
                  </dt>
                  <dd className="text-sm text-on-surface-variant font-light leading-relaxed">
                    {faq.a}
                  </dd>
                </dl>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
