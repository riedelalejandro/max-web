'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

export default function Map() {
  const { map } = siteConfig

  return (
    <SectionWrapper id="ubicacion" style={{ backgroundColor: '#F0EDE8' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Cómo llegar
      </motion.h2>
      <motion.p
        className="text-center mb-12 max-w-md mx-auto"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        En el centro de El Chaltén, a pasos de los senderos al Fitz Roy y Cerro Torre.
      </motion.p>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Map — 60% */}
        <motion.div
          className="lg:col-span-3 rounded-2xl overflow-hidden"
          style={{ height: 300, boxShadow: 'var(--shadow-md)' }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={map.embedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Max El Chaltén"
            className="border-0 w-full h-full"
          />
        </motion.div>

        {/* Contact info — 40% */}
        <motion.div
          className="lg:col-span-2 space-y-5"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="p-5 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}>
                  Dirección
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{map.address}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{map.reference}</p>
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}>
                  Teléfono
                </p>
                <a
                  href={`tel:${siteConfig.business.phone.replace(/\s/g, '')}`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {siteConfig.business.phone}
                </a>
              </div>
            </div>
          </div>

          {/* TODO: agregar horarios de check-in y check-out */}
          <div
            className="p-5 rounded-2xl border opacity-50"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center gap-3">
              <Clock size={18} className="shrink-0" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}>
                  Horarios
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Consultar disponibilidad
                </p>
              </div>
            </div>
          </div>

          <a
            href={map.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-85"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
            }}
          >
            <ExternalLink size={16} />
            Cómo llegar en Google Maps
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
