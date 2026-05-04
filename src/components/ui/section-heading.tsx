import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'inverse'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        align === 'center' && 'mx-auto',
        'max-w-3xl',
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-sm font-semibold uppercase tracking-widest',
            tone === 'inverse' ? 'text-primary' : 'text-primary'
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-3xl font-bold leading-tight sm:text-4xl md:text-5xl',
          tone === 'inverse' ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            tone === 'inverse' ? 'text-white/80' : 'text-foreground/75'
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
