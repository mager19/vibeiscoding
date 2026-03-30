import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ProjectFrontmatterSchema, type ProjectFrontmatter } from '@/types/project'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects')

function getProjectFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
}

function parseProject(filename: string): { frontmatter: ProjectFrontmatter; content: string } | null {
  const filePath = path.join(CONTENT_DIR, filename)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const result = ProjectFrontmatterSchema.safeParse(data)
  if (!result.success) {
    console.error(`Invalid frontmatter in ${filename}:`, result.error.flatten())
    return null
  }

  return { frontmatter: result.data, content }
}

export function getAllProjects(): ProjectFrontmatter[] {
  const files = getProjectFiles()
  const projects: ProjectFrontmatter[] = []

  for (const file of files) {
    const parsed = parseProject(file)
    if (parsed) projects.push(parsed.frontmatter)
  }

  return projects.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getProjectBySlug(slug: string): { frontmatter: ProjectFrontmatter; content: string } | null {
  const files = getProjectFiles()

  for (const file of files) {
    const parsed = parseProject(file)
    if (parsed && parsed.frontmatter.slug === slug) {
      return parsed
    }
  }

  return null
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug)
}
