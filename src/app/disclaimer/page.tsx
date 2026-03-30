import type { Metadata } from 'next'
import { AlertTriangle, BookOpen, ShieldCheck, Users } from 'lucide-react'
import { siteConfig } from '@/config/site.config'

export const metadata: Metadata = {
  title: 'Disclaimer — Aviso importante',
  description: 'Aviso sobre el carácter educativo de vibeiscoding.com. Los proyectos son ideas de aprendizaje, no productos listos para producción.',
}

export default function DisclaimerPage() {
  return (
    <main className="bg-surface-lowest min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-8">

        <p className="text-[10px] font-bold uppercase tracking-ultra text-primary/60 mb-4">
          // LEE ESTO ANTES DE CONSTRUIR
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tighter text-on-surface mb-4">
          AVISO<br />
          <span style={{ color: '#e30071' }}>IMPORTANTE</span>
        </h1>
        <p className="text-on-surface-variant font-light text-sm mb-12 max-w-xl leading-relaxed">
          Este sitio existe para enseñar. Los proyectos publicados aquí son ejercicios
          educativos, no productos de software listos para producción.
        </p>

        {/* Cards de disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

          <div className="rounded-md p-6" style={{ background: '#1e0c14', border: '1px solid rgba(255,137,172,0.2)' }}>
            <AlertTriangle size={16} style={{ color: '#ff89ac' }} className="mb-4" />
            <h2 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#ff89ac' }}>
              Ideas, no productos
            </h2>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Cada proyecto es una <strong className="text-on-surface font-normal">idea estructurada para aprender</strong>.
              No son aplicaciones ya construidas ni validadas técnicamente para uso en producción.
              El objetivo es que los uses como punto de partida para desarrollar habilidades.
            </p>
          </div>

          <div className="rounded-md p-6" style={{ background: '#0c1e22', border: '1px solid rgba(143,245,255,0.2)' }}>
            <ShieldCheck size={16} style={{ color: '#8ff5ff' }} className="mb-4" />
            <h2 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#8ff5ff' }}>
              Valida la seguridad
            </h2>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Antes de llevar cualquier proyecto a producción, un equipo técnico debe revisar:
              manejo de autenticación, almacenamiento de datos sensibles, exposición de APIs,
              variables de entorno, y cualquier vector de ataque relevante.
            </p>
          </div>

          <div className="rounded-md p-6" style={{ background: '#14102c', border: '1px solid rgba(172,138,255,0.2)' }}>
            <BookOpen size={16} style={{ color: '#ac8aff' }} className="mb-4" />
            <h2 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#ac8aff' }}>
              Propósito educativo
            </h2>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              El objetivo principal de <strong className="text-on-surface font-normal">{siteConfig.name}</strong> es
              desarrollar habilidades para <strong className="text-on-surface font-normal">dirigir herramientas de IA</strong>.
              No es un catálogo de ideas de negocio, aunque las ideas pueden inspirarte.
              El valor está en el proceso de construcción, no en el producto final.
            </p>
          </div>

          <div className="rounded-md p-6" style={{ background: '#0c1c10', border: '1px solid rgba(74,222,128,0.2)' }}>
            <Users size={16} style={{ color: '#4ade80' }} className="mb-4" />
            <h2 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#4ade80' }}>
              Datos y privacidad
            </h2>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Nunca expongas datos reales de usuarios, API keys o credenciales en
              proyectos construidos con fines de aprendizaje. Las APIs y servicios
              externos deben siempre manejarse con variables de entorno protegidas,
              nunca hardcodeadas ni expuestas en el cliente.
            </p>
          </div>

        </div>

        {/* Texto final */}
        <div className="rounded-md p-8" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-sm text-on-surface-variant font-light leading-relaxed">
            Al usar este sitio, entiendes que el contenido es de naturaleza educativa.{' '}
            <strong className="text-on-surface font-normal">{siteConfig.name}</strong> no se hace responsable
            por implementaciones en producción derivadas de los proyectos publicados aquí.
            Siempre involucra a un equipo técnico calificado antes de lanzar cualquier
            producto que maneje datos de usuarios reales.
          </p>
          <div className="mt-6 pt-6 border-t border-outline-variant/10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/30">
              Última actualización: Marzo 2026
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
