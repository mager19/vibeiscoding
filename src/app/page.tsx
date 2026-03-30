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

  return (
    <>
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
