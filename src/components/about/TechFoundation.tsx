const pillars = [
  {
    name: 'DIRIGIR, NO SOLO GENERAR',
    description:
      'El vibe coding no es copiar lo que la IA produce. Es saber qué pedirle, por qué, y qué hacer con el resultado. La dirección siempre es tuya.',
    color: 'text-primary',
    bg: 'bg-primary/5',
  },
  {
    name: 'HERRAMIENTAS CON CRITERIO',
    description:
      'No recomendamos herramientas por hype. Cada sugerencia tiene una razón: costo, velocidad, compatibilidad con flujos de IA, comunidad activa. La herramienta es el medio — el método es lo que importa.',
    color: 'text-secondary',
    bg: 'bg-secondary/5',
  },
  {
    name: 'APRENDER MIENTRAS CONSTRUYES',
    description:
      'Tengas o no las bases, el proceso exige entender lo que se construye. La IA puede explicarte lo que hace, sugerirte recursos y señalarte lo que no sabes. Aprender antes, durante o después — lo que importa es no ignorarlo.',
    color: 'text-tertiary',
    bg: 'bg-tertiary/5',
  },
  {
    name: 'CURIOSIDAD COMO MÉTODO',
    description:
      'No saber algo no es un obstáculo — es el punto de partida. La curiosidad intelectual sostenida es lo que separa a quien dirige de quien solo ejecuta.',
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
