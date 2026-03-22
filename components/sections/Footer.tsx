import Link from 'next/link'
import { Mountain } from 'lucide-react'
import { siteConfig } from '@/lib/content'

export default function Footer() {
  const { footer, business } = siteConfig

  return (
    <footer
      className="py-14 px-6"
      style={{ backgroundColor: 'var(--color-secondary)', color: 'rgba(255,255,255,0.85)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mountain size={22} style={{ color: 'var(--color-accent)' }} />
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {business.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">{siteConfig.hero.subheadline}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Navegación
            </p>
            <ul className="space-y-2">
              {footer.nav.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contacto
            </p>
            <ul className="space-y-2 text-sm opacity-70">
              <li>{business.address}</li>
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:opacity-100 transition-opacity"
                >
                  {business.phone}
                </a>
              </li>
              {/* TODO: agregar email e Instagram cuando estén disponibles */}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs opacity-50"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p>{footer.copyright}</p>
          <div className="flex gap-5">
            {footer.legal.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
