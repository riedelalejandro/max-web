'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function SectionWrapper({
  id,
  className = '',
  children,
  style,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 px-6 ${className}`}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}
