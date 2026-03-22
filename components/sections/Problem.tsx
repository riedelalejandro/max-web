'use client'

import { motion } from 'framer-motion'
import { Clock, DollarSign, Calendar, MapPin, Info } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

const iconMap: Record<string, React.ElementType> = {
  Clock,
  DollarSign,
  Calendar,
  MapPin,
  Info,
}

export default function Problem() {
  return (
    <SectionWrapper
      id="problema"
      style={{ backgroundColor: '#F0EDE8' }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {siteConfig.problem.title}
      </motion.h2>
      <motion.p
        className="text-center mb-14 max-w-xl mx-auto"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Estos son los dolores más comunes de los viajeros antes de encontrar Max.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.problem.pains.map((pain, i) => {
          const Icon = iconMap[pain.icon] ?? Info
          return (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow)',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
              >
                <Icon size={20} style={{ color: 'var(--color-primary)' }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', lineHeight: 1.7 }}>
                {pain.text}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
