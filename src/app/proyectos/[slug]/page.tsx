import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects'
import { ProjectHero } from '@/components/project/ProjectHero'
import { BentoGrid } from '@/components/project/BentoGrid'
import { siteConfig } from '@/config/site.config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  const { frontmatter } = project
  const title = `${frontmatter.title} | ${siteConfig.name}`
  const description = frontmatter.shortDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/proyectos/${slug}`,
      images: frontmatter.heroImage.startsWith('http')
        ? [{ url: frontmatter.heroImage }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const { frontmatter, content } = project

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.shortDescription,
    url: `${siteConfig.url}/proyectos/${slug}`,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    inLanguage: 'es',
    keywords: frontmatter.techStack.join(', '),
    educationalLevel: frontmatter.level,
    learningResourceType: 'Project Idea',
    isAccessibleForFree: true,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHero project={frontmatter} />
      {/* Disclaimer banner */}
      <div className="bg-black px-8 py-3 flex items-center gap-3 border-b border-outline-variant/10">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#fbbf24' }}>⚠</span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
          Proyecto educativo — no apto para producción sin validación técnica.{' '}
          <a href="/disclaimer" className="underline decoration-dotted hover:text-on-surface-variant/70 transition-colors">
            Leer disclaimer
          </a>
        </p>
      </div>
      <BentoGrid project={frontmatter} content={content} />
    </>
  )
}
