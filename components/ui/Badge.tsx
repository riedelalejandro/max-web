interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${className}`}
      style={{
        backgroundColor: 'var(--color-accent)',
        color: '#1A1A1A',
      }}
    >
      {children}
    </span>
  )
}
