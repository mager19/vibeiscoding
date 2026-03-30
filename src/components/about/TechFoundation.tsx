const pillars = [
  {
    name: 'ITERACIÓN BRUTAL',
    description:
      'El MVP no es el destino — es el método. Creemos en lanzar rápido, medir en contexto real y mejorar con evidencia. No en planificar en el vacío hasta que la idea pierda energía.',
    color: 'text-primary',
    bg: 'bg-primary/5',
  },
  {
    name: 'HERRAMIENTAS CON CRITERIO',
    description:
      'No recomendamos stack por hype. Cada sugerencia de herramienta en este sitio tiene una razón: costo, velocidad de setup, compatibilidad con flujos de IA, comunidad activa. Si cambiamos de opinión, lo decimos.',
    color: 'text-secondary',
    bg: 'bg-secondary/5',
  },
  {
    name: 'CLARIDAD TÉCNICA',
    description:
      'El vibe coding no es magia ni atajo. Es un cambio de flujo de trabajo que requiere entender lo que estás haciendo, aunque no escribas cada línea. Acá no simplificamos en exceso ni inflamos lo básico.',
    color: 'text-tertiary',
    bg: 'bg-tertiary/5',
  },
  {
    name: 'ACCESO ABIERTO',
    description:
      'Todo el contenido del sitio es gratuito. Siempre. No hay paywall en las ideas. El conocimiento sobre cómo construir cosas debería estar disponible para quien quiera aprender.',
    color: 'text-primary-fixed',
    bg: 'bg-surface-container',
  },
]

export function TechFoundation() {
  return (
    <section className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
            // principios
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-on-surface">
            PILARES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div key={pillar.name} className={`${pillar.bg} p-10`}>
              <h3 className={`text-sm font-black uppercase tracking-widest ${pillar.color} mb-4`}>
                {pillar.name}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
