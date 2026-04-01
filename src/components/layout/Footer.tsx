import Link from 'next/link'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { es } from '@/lib/i18n/es'
import { GradientText } from '@/components/ui'

const socialLinks = [
  { href: siteConfig.social.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: siteConfig.social.twitter, label: 'X / Twitter', icon: Twitter },
  { href: siteConfig.social.instagram, label: 'Instagram', icon: Instagram },
].filter((s) => s.href)

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-surface-lowest">
      {/* Línea superior con gradiente magenta → púrpura → transparente */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, #e30071, #ac8aff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xl md:text-2xl font-black uppercase tracking-widest">
                <GradientText variant="full">{es.site.name}</GradientText>
              </Link>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#e30071' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#ac8aff' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#8ff5ff' }} />
              </div>
            </div>
            <p className="text-xs text-on-surface-variant/60 tracking-wide font-mono">
              // {es.footer.tagline}
            </p>
          </div>

          {/* Links — gap uniforme en todos los items */}
          <div className="flex items-center flex-wrap" style={{ gap: '1.25rem' }}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70"
                style={{ color: '#e30071' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.routes.disclaimer}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface-variant transition-colors"
            >
              DISCLAIMER
            </Link>
            <Link
              href={siteConfig.routes.privacy}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface-variant transition-colors"
            >
              {es.footer.links.privacy}
            </Link>
            <Link
              href={siteConfig.routes.terms}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/50 hover:text-on-surface-variant transition-colors"
            >
              {es.footer.links.terms}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center flex flex-col gap-4 items-center">
          {/* Iconos de redes sociales */}
          {siteConfig.features.socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center gap-5">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: '#e30071' }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          )}
          <p className="text-[10px] font-bold uppercase tracking-ultra text-on-surface-variant/60">
            {es.footer.copyright}
          </p>
          <p className="text-[10px] tracking-ultra text-on-surface-variant/70">
            un proyecto de{' '}
            <a
              href="https://www.linkedin.com/in/mager19/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-colors hover:opacity-80"
              style={{ color: '#e30071' }}
            >
              mager19
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
