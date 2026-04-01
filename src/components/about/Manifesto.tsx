import { GlassPanel } from '@/components/ui'

const sections = [
  {
    label: 'EL PROBLEMA',
    placeholder: false,
    content:
      'El vibe coding tiene mala fama: código sin estructura, sin estándares, sin contexto. Prompts sueltos que producen algo que funciona hoy y se rompe mañana sin saber por qué ni cómo resolverlo.\n\nEl problema no es la IA. Es que nadie enseña a usarla bien. No hay un lugar donde practicar el método, no solo el resultado. Donde aprender a dirigir, no solo a generar.\n\nY nadie lo enseña porque la IA funciona de todas formas. Das una instrucción, produce algo, y eso es suficiente para sentir que avanzas. La adrenalina de ver código generarse en tiempo real hace que las bases parezcan opcionales — hasta que el proyecto crece, algo falla, y no tienes herramientas para entender qué pasó ni cómo arreglarlo.\n\nEso es lo que faltaba. Y eso es lo que este sitio intenta resolver.',
    highlight: 'La IA no es el problema. El problema es no saber dirigirla.',
    highlightColor: '#ff89ac',
  },
  {
    label: 'EL QUIEBRE',
    placeholder: false,
    content:
      'El quiebre fue doble. Primero, ver a la IA hacer cosas que yo no entendía cómo había hecho. No porque fueran mágicas — sino porque eran buenas. Arquitectura coherente, decisiones razonables, código que funcionaba. Eso me obligó a prestar atención de otra forma.\n\nEl segundo fue ver a amigos y colegas rechazarla. No por razones técnicas — sino por identidad. Antes sabían que eran buenos programadores porque veían el código que producían con sus propias manos. Con IA, esa certeza desaparece. Y en lugar de adaptarse, eligieron descartarla con el argumento de que "pierden el control".\n\nAhí entendí el problema real: no es una discusión sobre herramientas. Es una discusión sobre quién eres cuando ya no produces el código tú mismo.',
    highlight: 'No es una discusión sobre herramientas. Es una discusión sobre identidad.',
    highlightColor: '#ac8aff',
  },
  {
    label: 'FILOSOFÍA',
    placeholder: false,
    content:
      'Vibe coding no es magia. No es darle un prompt a la IA y subir lo que salga a producción sin saber qué hay adentro.\n\nLa filosofía es simple: tienes que entender el proceso. No necesitas escribir cada línea, pero sí saber qué se está construyendo, por qué, y qué implicaciones tiene. Lo que no entiendes hoy es una deuda que pagas mañana — con un bug que no sabes cómo diagnosticar, con una arquitectura que no puedes explicar, con código que no puedes mantener.\n\nLa IA puede hacer el trabajo. Pero también puede explicarte por qué lo hizo así, sugerirte qué aprender, señalarte recursos — cursos, documentación, tecnologías — para que ese conocimiento se vuelva tuyo. Que no lo estés escribiendo tú no significa que debas dejar de aprender.\n\nEl objetivo no es reemplazar el aprendizaje. Es que el aprendizaje ocurra mientras construyes, no antes.',
    highlight: 'Que la IA lo construya no te exime de entenderlo.',
    highlightColor: '#8ff5ff',
  },
  {
    label: 'CÓMO TRABAJO',
    placeholder: false,
    content:
      'Todo empieza con claridad sobre el objetivo. Antes de escribir un prompt, defino qué quiero construir, cuál es el resultado final esperado, y cuáles son los features mínimos necesarios para llegar ahí.\n\nCon eso sobre la mesa, le pido a la IA que complemente el plan: que identifique vacíos, señale lo que no consideré, y sugiera elementos que podrían sumarse. No para seguir todo ciegamente — sino para tener una visión más completa antes de decidir.\n\nCada sugerencia pasa por un filtro: el mío. La IA propone, yo valido. Lo que entra al proyecto es lo que yo entiendo y apruebo. Lo que no entiendo, lo investigo antes de aceptarlo.\n\nAsí el proceso no es "pedirle a la IA que construya" — es una conversación técnica donde yo llevo la dirección y la IA ejecuta con criterio.',
    highlight: 'La IA propone. Yo valido. Lo que entra es lo que entiendo.',
    highlightColor: '#fbbf24',
  },
  {
    label: 'PARA QUIÉN ES ESTO',
    placeholder: false,
    content:
      'Para cualquier persona con curiosidad intelectual y ganas de aprender haciendo. No importa si eres desarrollador, diseñador, emprendedor, o alguien que nunca ha escrito una línea de código — lo que importa es la disposición a entender el proceso.\n\nEste sitio no es para quien busca un atajo. Es para quien quiere incorporar una forma de trabajar que amplifica lo que ya sabe, lo que ya piensa, lo que ya construye.\n\nY aunque aquí lo llamamos vibe coding, el principio aplica más allá del software: definir un objetivo, iterar con una herramienta inteligente, validar con criterio propio. Es un proceso de aprendizaje haciendo — que puede adaptarse a casi cualquier área donde tengas algo que construir.',
    highlight: 'No es para quien busca un atajo. Es para quien quiere entender mientras construye.',
    highlightColor: '#4ade80',
  },
  {
    label: 'EL COMPROMISO',
    placeholder: false,
    content:
      'Lo que vas a encontrar aquí son herramientas para pensar mejor el proceso — no para saltárselo. Proyectos diseñados para que practiques lo que importa: definir el objetivo, estructurar el problema, tomar decisiones de arquitectura, y delegar con criterio lo que la IA hace mejor que tú.\n\nPorque hay una parte del desarrollo que es repetitiva, reiterativa, y que se convierte en un cuello de botella cuando la haces a mano: el código. Una IA bien instruida lo produce más rápido y con menos errores — pero solo si le das las pautas correctas. Y para eso necesitas las bases.\n\nEl compromiso es que cada proyecto en este sitio está pensado para que llegues más lejos de lo que llegarías solo — sin perder de vista que el criterio, la dirección y el entendimiento siguen siendo tuyos.',
    highlight: 'La IA escribe mejor y más rápido. Pero solo si tú sabes qué pedirle.',
    highlightColor: '#ff89ac',
  },
]

export function Manifesto() {
  return (
    <section className="bg-surface-low py-24">
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
                  className={`text-on-surface-variant font-light leading-relaxed whitespace-pre-line${
                    section.placeholder ? ' opacity-40 italic' : ''
                  }`}
                >
                  {section.content}
                </p>
                {section.highlight && (
                  <p
                    className="mt-5 text-sm font-semibold leading-snug pl-4"
                    style={{
                      color: section.highlightColor,
                      borderLeft: `2px solid ${section.highlightColor}`,
                    }}
                  >
                    {section.highlight}
                  </p>
                )}
              </div>
              {i < sections.length - 1 && (
                <hr className="border-outline-variant/10" />
              )}
            </div>
          ))}

          {/* Firma */}
          <hr className="border-outline-variant/10" />
          <div className="py-8">
            <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
              QUIÉN LO FIRMA
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed whitespace-pre-line">
              {'Soy Mager — desarrollador web con foco en WordPress y automatizaciones con IA. No soy un gurú ni un experto en todo: soy alguien que eligió aprender haciendo, que nunca quiso perder la curiosidad, y que un día decidió hacer las cosas de manera diferente.\n\nEste sitio nació como un proyecto personal para explorar el vibe coding en serio — con estructura, con criterio, con buenas prácticas. Y también como una forma de mostrar lo que hago y cómo lo hago, por si le sirve a alguien más que quiera recorrer el mismo camino.'}
            </p>
            <p
              className="mt-5 text-sm font-semibold leading-snug pl-4"
              style={{ color: '#ac8aff', borderLeft: '2px solid #ac8aff' }}
            >
              Lo que me define no es lo que sé. Es que nunca dejo de querer aprender.
            </p>
            <a
              href="https://www.linkedin.com/in/mager19/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-md transition-opacity hover:opacity-80"
              style={{
                background: 'rgba(172,138,255,0.08)',
                border: '1px solid rgba(172,138,255,0.3)',
                color: '#ac8aff',
              }}
            >
              Mager — LinkedIn
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
