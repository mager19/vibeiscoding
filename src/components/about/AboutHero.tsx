import { GradientText } from '@/components/ui'

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface-lowest pt-32 pb-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        {/* Eyebrow */}
        <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-6">
          MANIFIESTO // VIBEISCODING.COM
        </p>

        {/* Headline — asymmetric layout */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
          <span className="text-on-surface">NO SOY SOLO UN PROGRAMADOR.</span>
          <br />
          <GradientText variant="full">SOY QUIEN DIRIGE.</GradientText>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
          Este sitio existe porque aprendí que la IA no reemplaza el criterio — lo amplifica. Lo construí sin escribir una línea de código a mano, tomando cada decisión de arquitectura, contenido y producto. Lo que lees aquí es el resultado de ese proceso.
        </p>
      </div>
    </section>
  )
}
