import { cn } from '@/lib/cn'

type CardProps = {
  className?: string
  children: React.ReactNode
  /** `surface` für warme Beige-Karte, `white` für solide weiße Karte, `ink` für dunkle Sektion. */
  tone?: 'surface' | 'white' | 'ink'
}

const toneClasses = {
  surface: 'bg-surface text-foreground',
  white: 'bg-white text-foreground border border-border',
  ink: 'bg-[var(--color-ink)] text-white',
}

export function Card({ children, className, tone = 'white' }: CardProps) {
  return (
    <div className={cn('rounded-3xl p-6 sm:p-8', toneClasses[tone], className)}>{children}</div>
  )
}

export function CardEyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}
