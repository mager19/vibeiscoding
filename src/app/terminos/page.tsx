import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description: 'Términos de uso de vibeiscoding.com.',
  robots: { index: false, follow: false },
}

export default function TerminosPage() {
  return (
    <main className="bg-surface-lowest min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-8">
        <p className="text-[10px] font-bold uppercase tracking-ultra text-primary/60 mb-4">
          // LEGAL
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tighter text-on-surface mb-12">
          TÉRMINOS<br />
          <span style={{ color: '#e30071' }}>DE USO</span>
        </h1>

        <div className="space-y-10 text-on-surface-variant font-light leading-relaxed">

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              1. Naturaleza del contenido
            </h2>
            <p className="text-sm">
              <strong className="text-on-surface font-normal">{siteConfig.name}</strong> es un sitio
              educativo sobre Vibe Coding. Todo el contenido — proyectos, guías, checklists y recursos —
              tiene propósito exclusivamente formativo. Los proyectos publicados son ideas estructuradas
              para aprender, no productos terminados ni asesoramiento profesional de ningún tipo.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              2. Uso del contenido
            </h2>
            <p className="text-sm">
              Puedes usar libremente las ideas, estructuras y recursos de este sitio para
              tu aprendizaje personal. Si reproduces contenido de forma pública, agradecemos
              atribuirlo a {siteConfig.url}.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              3. Limitación de responsabilidad
            </h2>
            <p className="text-sm">
              El contenido se proporciona "tal cual", sin garantías de ningún tipo.
              No somos responsables por daños derivados del uso, implementación o
              interpretación del contenido publicado. Antes de construir cualquier
              aplicación en producción, consulta a un equipo técnico calificado.
            </p>
            <p className="text-sm mt-3">
              Ver también nuestro <a href="/disclaimer" className="text-primary hover:underline">Aviso de Disclaimer</a> para
              información específica sobre el carácter educativo de los proyectos.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              4. Cambios al sitio
            </h2>
            <p className="text-sm">
              Nos reservamos el derecho de modificar, actualizar o eliminar contenido
              en cualquier momento sin previo aviso.
            </p>
          </section>

          <div className="pt-8 border-t border-outline-variant/10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/30">
              Última actualización: Marzo 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
