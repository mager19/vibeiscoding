import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de vibeiscoding.com. Información sobre qué datos recopilamos y cómo los usamos.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <main className="bg-surface-lowest min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-8">
        <p className="text-[10px] font-bold uppercase tracking-ultra text-primary/60 mb-4">
          // LEGAL
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tighter text-on-surface mb-12">
          POLÍTICA DE<br />
          <span style={{ color: '#e30071' }}>PRIVACIDAD</span>
        </h1>

        <div className="space-y-10 text-on-surface-variant font-light leading-relaxed">

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              1. ¿Qué datos recopilamos?
            </h2>
            <p className="text-sm">
              El único dato personal que recopilamos es tu <strong className="text-on-surface font-normal">dirección de correo electrónico</strong>,
              y únicamente si decides suscribirte voluntariamente a nuestro newsletter.
            </p>
            <p className="text-sm mt-3">
              No recopilamos nombre, ubicación, datos de pago, ni ningún otro dato personal.
              No tenemos cuenta de usuario ni formularios de registro.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              2. ¿Para qué usamos tu correo?
            </h2>
            <p className="text-sm">
              Exclusivamente para enviarte actualizaciones sobre nuevos proyectos, recursos y
              contenido de Vibe Coding. No enviamos spam ni compartimos tu correo con terceros
              para fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              3. ¿Dónde se almacena tu correo?
            </h2>
            <p className="text-sm">
              Tu correo electrónico es procesado y almacenado por <strong className="text-on-surface font-normal">Mailchimp</strong>,
              un servicio externo de gestión de newsletters. El tratamiento de tus datos está
              sujeto a la{' '}
              <a
                href="https://mailchimp.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                política de privacidad de Mailchimp
              </a>.
              Nosotros no almacenamos tu correo en nuestros propios servidores.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              4. ¿Puedo darme de baja?
            </h2>
            <p className="text-sm">
              Sí, en cualquier momento. Cada correo que enviamos incluye un enlace para
              cancelar la suscripción con un solo clic. También puedes contactarnos para
              solicitar la eliminación de tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              5. Cookies y analytics
            </h2>
            <p className="text-sm">
              Actualmente no utilizamos cookies de rastreo ni publicidad. Si en el futuro
              activamos analytics (Umami, que es privacy-first y no usa cookies), lo
              indicaremos en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-4">
              6. Contacto
            </h2>
            <p className="text-sm">
              Si tienes preguntas sobre esta política, puedes escribirnos a través de
              las redes sociales de <strong className="text-on-surface font-normal">{siteConfig.name}</strong>.
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
