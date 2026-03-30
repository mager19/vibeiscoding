import { z } from 'zod'

export const ProjectLevel = z.enum(['principiante', 'intermedio', 'avanzado'])
export type ProjectLevel = z.infer<typeof ProjectLevel>

export const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  codename: z.string(),
  slug: z.string(),
  level: ProjectLevel,
  categories: z.array(z.string()),
  shortDescription: z.string(),
  heroImage: z.string(),
  techStack: z.array(z.string()),
  estimatedTime: z.string(),
  toolSuggestion: z.string(),
  publishedAt: z.string(),
  featured: z.boolean().default(false),
})

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>

export interface Project extends ProjectFrontmatter {
  content: string
}
