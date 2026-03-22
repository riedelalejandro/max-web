import Link from 'next/link'
import { siteConfig } from '@/lib/content'
import { MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: `Contacto | ${siteConfig.business.name} El Chaltén`,
  description: `Reservá tu alojamiento en El Chaltén. ${siteConfig.business.address}. Tel: ${siteConfig.business.phone}.`,
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-primary)' }}
        >
          ← Volver al inicio
        </Link>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        >
          Contacto
        </h1>
        <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>
          Para consultas y reservas, comunicate con nosotros directamente.
        </p>

        <div className="space-y-6">
          <div
            className="flex items-start gap-4 p-6 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <MapPin className="mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} size={20} />
            <div>
              <p className="font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Dirección
              </p>
              <p style={{ color: 'var(--color-text-muted)' }}>{siteConfig.map.address}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {siteConfig.map.reference}
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-6 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <Phone className="mt-1 shrink-0" style={{ color: 'var(--color-primary)' }} size={20} />
            <div>
              <p className="font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Teléfono
              </p>
              <a
                href={`tel:${siteConfig.business.phone.replace(/\s/g, '')}`}
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-primary)' }}
              >
                {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={siteConfig.map.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Cómo llegar →
          </a>
        </div>
      </div>
    </main>
  )
}
