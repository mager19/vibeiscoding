import { type ProjectFrontmatter } from '@/types/project'
import { ProjectCard } from './ProjectCard'
import { es } from '@/lib/i18n/es'

interface ProjectGridProps {
  projects: ProjectFrontmatter[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="proyectos" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-3">
            // proyectos disponibles
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-on-surface">
            {es.home.projects.sectionTitle}
          </h2>
          <p className="mt-4 text-on-surface-variant font-light">
            {es.home.projects.sectionSubtitle}
          </p>
        </div>

        {/* Grid */}
        {projects.length === 0 ? (
          <p className="text-on-surface-variant">{es.home.projects.emptyState}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
