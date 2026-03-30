import { type ProjectLevel } from '@/types/project'
import { es } from '@/lib/i18n/es'

interface LevelBadgeProps {
  level: ProjectLevel
  className?: string
}

const levelStyles: Record<ProjectLevel, string> = {
  principiante: 'bg-primary/20 text-primary border-primary/30',
  intermedio: 'bg-secondary/20 text-secondary border-secondary/30',
  avanzado: 'bg-tertiary/20 text-tertiary border-tertiary/30',
}

export function LevelBadge({ level, className = '' }: LevelBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${levelStyles[level]} ${className}`}
    >
      {es.project.levels[level]}
    </span>
  )
}
