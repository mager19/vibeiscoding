import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { Manifesto } from '@/components/about/Manifesto'
import { ProcessTimeline } from '@/components/about/ProcessTimeline'
import { TechFoundation } from '@/components/about/TechFoundation'

export const metadata: Metadata = {
  title: 'Sobre vibeiscoding — Por qué construí esto con IA',
  description:
    'Un manifiesto personal sobre programar con IA como co-pilot, sin pretender ser experto. Por qué existe vibeiscoding.com y para quién lo construí.',
}

export default function SobrePage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <ProcessTimeline />
      <TechFoundation />
    </>
  )
}
