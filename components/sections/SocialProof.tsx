'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Star, User } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

export default function SocialProof() {
  const { metrics, testimonials } = siteConfig.socialProof
  // Filter out testimonials with null quotes (pending)
  const validTestimonials = testimonials.filter((t) => t.quote !== null)
  const pendingTestimonials = testimonials.filter((t) => t.quote === null)

  return (
    <SectionWrapper id="resenas" style={{ backgroundColor: 'var(--color-bg)' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Lo que dicen quienes ya estuvieron
      </motion.h2>

      {/* Metrics */}
      <div className="flex flex-wrap justify-center gap-12 my-14">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
          >
            <div
              className="text-5xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-primary)' }}
            >
              {metric.value.includes('★') ? (
                metric.value
              ) : (
                <>
                  <Counter target={parseInt(metric.value)} />
                  {metric.value.replace(/\d/g, '')}
                </>
              )}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      {validTestimonials.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {validTestimonials.map((t, i) => (
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
              transition={{ delay: i * 0.1, duration: 0.45 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic flex-1" style={{ color: 'var(--color-text)', lineHeight: 1.7 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(45,106,79,0.12)' }}
                >
                  <User size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    {t.name ?? 'Huésped verificado'}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // TODO: buscar reseñas reales en Google Maps y completar los testimonios
        <div className="grid md:grid-cols-3 gap-6">
          {pendingTestimonials.map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                opacity: 0.5,
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <div
                className="h-16 rounded-lg mb-4"
                style={{ backgroundColor: 'var(--color-border)' }}
              />
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full"
                  style={{ backgroundColor: 'var(--color-border)' }}
                />
                <div className="space-y-1">
                  <div className="h-3 w-20 rounded" style={{ backgroundColor: 'var(--color-border)' }} />
                  <div className="h-2 w-14 rounded" style={{ backgroundColor: 'var(--color-border)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <motion.p
        className="text-center text-sm mt-8"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        57 reseñas verificadas · 4.1★ en Google
      </motion.p>
    </SectionWrapper>
  )
}
