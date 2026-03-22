import Link from 'next/link'
import { siteConfig } from '@/lib/content'

export const metadata = {
  title: `Política de Privacidad | ${siteConfig.business.name} El Chaltén`,
}

export default function PrivacidadPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-primary)' }}
        >
          ← Volver al inicio
        </Link>
        <h1
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Política de Privacidad
        </h1>
        <div className="prose max-w-none" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          <p className="mb-4">
            En <strong style={{ color: 'var(--color-text)' }}>Max El Chaltén</strong> respetamos tu privacidad. Los datos
            personales que puedas compartir con nosotros (nombre, teléfono, email) serán utilizados
            exclusivamente para responder a tus consultas y gestionar tu reserva.
          </p>
          <p className="mb-4">
            No compartimos tu información con terceros ni la utilizamos con fines
            publicitarios. Podés solicitar la eliminación de tus datos en cualquier
            momento contactándonos al{' '}
            <a
              href={`tel:${siteConfig.business.phone.replace(/\s/g, '')}`}
              style={{ color: 'var(--color-primary)' }}
            >
              {siteConfig.business.phone}
            </a>
            .
          </p>
          <p>{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </main>
  )
}
