import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LevelBadge, Chip } from '@/components/ui'
import { type ProjectFrontmatter } from '@/types/project'
import { es } from '@/lib/i18n/es'
import { HeroBeam } from '@/components/home/HeroBeam'

interface ProjectHeroProps {
  project: ProjectFrontmatter
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const words = project.title.split(' ')

  return (
    <section className="hero-gradient grain-overlay pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Neon glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/8 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-secondary/6 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-tertiary/3 rounded-full blur-[70px] md:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Animated beam lines */}
      <HeroBeam />

      {/* Bottom fade into BentoGrid */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Back link */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-ultra text-on-surface-variant/50 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={12} />
          {es.project.backLabel}
        </Link>

        {/* Codename pill */}
        <div className="mb-6">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-ultra px-4 py-1.5 rounded-md"
            style={{ background: '#e30071', color: '#fff' }}
          >
            PROJECT CODENAME: {project.codename}
          </span>
        </div>

        {/* H1 — editorial, mixed colors */}
        <h1 className="font-black uppercase tracking-tighter leading-none mb-8" style={{ fontSize: 'clamp(1.75rem, 7vw, 7rem)' }}>
          {words.map((word, i) =>
            i % 3 === 1 ? (
              <span key={i} style={{ color: '#e30071' }}>{word} </span>
            ) : (
              <span key={i} className="text-on-surface">{word} </span>
            )
          )}
        </h1>

        {/* Short description */}
        <p className="text-sm md:text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed border-l-2 pl-3 md:pl-5"
          style={{ borderColor: '#e30071' }}>
          {project.shortDescription}
        </p>

        {/* Meta row */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <LevelBadge level={project.level} />
          {project.categories.map((cat) => (
            <Chip key={cat}>{cat}</Chip>
          ))}
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50 ml-2">
            ⏱ {project.estimatedTime}
          </span>
        </div>
      </div>
    </section>
  )
}
