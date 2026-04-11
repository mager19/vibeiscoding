import { Zap, HelpCircle } from 'lucide-react'
import { Button, GradientText } from '@/components/ui'
import { es } from '@/lib/i18n/es'
import { HeroBeam } from './HeroBeam'

export function Hero() {
  return (
    <section aria-label="Inicio" className="relative min-h-screen flex items-center overflow-hidden hero-gradient grain-overlay">
      {/* Neon glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/8 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-secondary/6 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-tertiary/3 rounded-full blur-[70px] md:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <HeroBeam />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-6">
            {es.home.hero.eyebrow}
          </p>

          {/* Main headline */}
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-black tracking-tighter text-on-surface uppercase leading-none">
            {es.home.hero.headlineLines.map((line, i) =>
              i === 0
                ? <GradientText key={line} variant="primary" className="block">{line}</GradientText>
                : <span key={line} className="block">{line}</span>
            )}
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
            {es.home.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button
              variant="solid"
              size="md"
              href="/#proyectos"
              icon={<Zap size={15} />}
              iconPosition="left"
            >
              {es.home.hero.ctaPrimary}
            </Button>
            <Button
              variant="glass"
              size="md"
              href="/sobre"
              icon={<HelpCircle size={15} />}
              iconPosition="left"
              className="border-secondary/30 text-white hover:border-secondary/60 hover:bg-secondary/10"
            >
              {es.home.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
