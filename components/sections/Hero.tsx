'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/content'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image / fallback gradient */}
      <div className="absolute inset-0">
        {/* TODO: replace with real hero photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1B2631 0%, #2D6A4F 50%, #1B2631 100%)',
          }}
        />
        <Image
          src="/images/hero.jpg"
          alt="El Chaltén Patagonia, senderos al Fitz Roy"
          fill
          priority
          className="object-cover"
          onError={() => {}}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm font-semibold uppercase tracking-widest mb-6 opacity-80"
        >
          El Chaltén · Patagonia Argentina
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {siteConfig.hero.headline}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-10"
          style={{ lineHeight: 1.7 }}
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button href={siteConfig.hero.ctaPrimary.href} size="lg">
            {siteConfig.hero.ctaPrimary.label}
          </Button>
          <a
            href={siteConfig.hero.ctaSecondary.href}
            className="text-white/80 hover:text-white transition-colors text-base font-medium"
          >
            {siteConfig.hero.ctaSecondary.label}
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2 text-white/70 text-sm"
        >
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
            ))}
            <Star size={14} fill="none" className="text-yellow-400" />
          </div>
          <span>{siteConfig.hero.socialProof}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  )
}
