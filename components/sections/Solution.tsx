'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

export default function Solution() {
  return (
    <SectionWrapper id="habitaciones" style={{ backgroundColor: 'var(--color-bg)' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {siteConfig.solution.title}
      </motion.h2>
      <motion.p
        className="text-center mb-14 max-w-xl mx-auto"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {siteConfig.business.description}
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.solution.features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={i}
              className="p-6 rounded-2xl border flex flex-col gap-4"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow)',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(45,106,79,0.12)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
              >
                <Icon size={24} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
                >
                  {feature.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {feature.benefit}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
