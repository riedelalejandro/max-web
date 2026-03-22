'use client'

import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  className?: string
  target?: string
  rel?: string
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: '#FFFFFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '2px solid var(--color-primary)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
  },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-opacity hover:opacity-85 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`

  const content = loading ? (
    <>
      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
      {children}
    </>
  ) : (
    children
  )

  if (href) {
    return (
      <Link href={href} className={base} style={variantStyles[variant]} target={target} rel={rel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={base}
      style={variantStyles[variant]}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  )
}
