'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

export default function Gallery() {
  const images = siteConfig.gallery.images

  return (
    <SectionWrapper id="galeria" style={{ backgroundColor: '#F0EDE8' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-3"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {siteConfig.gallery.title}
      </motion.h2>
      <motion.p
        className="text-center mb-12"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        {siteConfig.gallery.subtitle}
      </motion.p>

      {/* Grid: 1st image spans 2 cols on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'
            }`}
            style={{ minHeight: i === 0 ? 280 : 160 }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Fallback gradient while image loads or is missing */}
            {/* TODO: replace placeholder gradient with real photos */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, #2D6A4F ${20 + i * 10}%, #1B2631 100%)`,
                opacity: 0.7,
              }}
            />
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
            />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
