'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { siteConfig } from '@/lib/content'

export default function Pricing() {
  const { plans, guarantee } = siteConfig.pricing

  return (
    <SectionWrapper id="precios" style={{ backgroundColor: '#F0EDE8' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Alojamiento para cada viajero
      </motion.h2>
      <motion.p
        className="text-center mb-14 max-w-md mx-auto"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        {guarantee}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className="relative p-8 rounded-2xl border flex flex-col gap-6"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: plan.featured ? 'var(--color-primary)' : 'var(--color-border)',
              borderWidth: plan.featured ? 2 : 1,
              boxShadow: plan.featured ? 'var(--shadow-md)' : 'var(--shadow)',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            animate={plan.featured ? { scale: 1.02 } : {}}
          >
            {plan.featured && plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>{plan.badge}</Badge>
              </div>
            )}

            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
              >
                {plan.name}
              </h3>
              <div
                className="text-3xl font-bold"
                style={{ color: 'var(--color-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {plan.price}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {siteConfig.pricing.billing}
              </div>
            </div>

            <ul className="space-y-3 flex-1">
              {plan.includes.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text)' }}>
                  <Check
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href={plan.ctaHref}
              variant={plan.featured ? 'primary' : 'secondary'}
              size="md"
              className="w-full justify-center"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
