'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/content'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <SectionWrapper id="faq" style={{ backgroundColor: 'var(--color-bg)' }}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Preguntas frecuentes
      </motion.h2>
      <motion.p
        className="text-center mb-12 max-w-md mx-auto"
        style={{ color: 'var(--color-text-muted)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Todo lo que necesitás saber antes de reservar.
      </motion.p>

      <div className="max-w-2xl mx-auto space-y-3">
        {siteConfig.faq.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{
              borderColor: open === i ? 'var(--color-primary)' : 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span
                className="font-semibold text-base"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
              >
                {item.q}
              </span>
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: open === i ? 'var(--color-primary)' : 'rgba(45,106,79,0.1)',
                  color: open === i ? 'white' : 'var(--color-primary)',
                }}
              >
                {open === i ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA post-FAQ */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
          {siteConfig.faqUrgency}
        </p>
        <Button href="/contacto" size="lg">
          {siteConfig.faqCta}
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
