import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/projects'
import { siteConfig } from '@/config/site.config'
import { Hero } from '@/components/home/Hero'
import { ManifestoTeaser } from '@/components/home/ManifestoTeaser'
import { LevelsSection } from '@/components/home/LevelsSection'
import { ProjectGrid } from '@/components/home/ProjectGrid'
import { FAQSection } from '@/components/home/FAQSection'
import { AIBuiltSection } from '@/components/home/AIBuiltSection'
import { NewsletterSection } from '@/components/home/NewsletterSection'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    url: siteConfig.url,
  },
}

export default function HomePage() {
  const projects = getAllProjects()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'es',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/proyectos/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ManifestoTeaser />
      <LevelsSection />
      <ProjectGrid projects={projects} />
      <AIBuiltSection />
      <FAQSection />
      <NewsletterSection />
    </>
  )
}
