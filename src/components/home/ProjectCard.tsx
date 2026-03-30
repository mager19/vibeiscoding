import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { LevelBadge, Chip } from '@/components/ui'
import { type ProjectFrontmatter } from '@/types/project'
import { siteConfig } from '@/config/site.config'
import { es } from '@/lib/i18n/es'

interface ProjectCardProps {
  project: ProjectFrontmatter
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={siteConfig.routes.project(project.slug)}
      aria-label={project.title}
      className="group block bg-surface-container rounded-lg overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Hero image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        {/* Badges overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <LevelBadge level={project.level} />
          {project.categories.slice(0, 2).map((cat) => (
            <Chip key={cat} className="text-[10px] py-1 px-2">
              {cat}
            </Chip>
          ))}
        </div>

        {/* Codename */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-ultra text-on-surface-variant/70">
            {project.codename}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-8">
        <h3 className="text-xl font-black uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-on-surface-variant font-light leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Meta */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
            {project.estimatedTime}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all">
            {es.home.projects.readMore}
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}
