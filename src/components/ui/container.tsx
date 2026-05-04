import { cn } from '@/lib/cn'

type ContainerProps = {
  className?: string
  children: React.ReactNode
  /** Max-Width-Tier. `prose` schmaler für Fließtext, `wide` für Hero/Grids. */
  width?: 'prose' | 'default' | 'wide'
}

const widthClasses = {
  prose: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
}

export function Container({ children, className, width = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8', widthClasses[width], className)}>
      {children}
    </div>
  )
}
