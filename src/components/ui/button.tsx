import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-semibold transition-[transform,filter,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]'

const variantClasses: Record<Variant, string> = {
  // Primary: weißer Text auf CI-Gelb. Niemals graue Schrift auf orangem
  // Hintergrund. Hover über brightness statt Opacity-Tint.
  primary: 'bg-primary text-white hover:brightness-95',
  secondary: 'bg-white text-foreground border border-border hover:bg-surface',
  ghost: 'text-foreground hover:bg-surface',
}

const sizeClasses: Record<Size, string> = {
  md: 'h-11 px-5 text-sm [&_svg]:size-4',
  lg: 'h-13 px-7 text-base [&_svg]:size-5',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: undefined
  }

type LinkButtonProps = CommonProps & {
  href: string
  external?: boolean
}

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          className={classes}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps
  void _v
  void _s
  void _c
  void _ch
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
