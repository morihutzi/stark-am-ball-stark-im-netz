import Image from 'next/image'
import { cn } from '@/lib/cn'

type StoreBadgesProps = {
  ios?: string
  android?: string
  /** Tailwind-Klassen für den Wrapper (Ausrichtung, Margins etc.). */
  className?: string
  /** Höhe der Badges in px. iOS-Badge wird proportional skaliert. */
  size?: 'sm' | 'md'
}

const heightClasses: Record<NonNullable<StoreBadgesProps['size']>, string> = {
  sm: 'h-10',
  md: 'h-12',
}

/**
 * Renderiert die offiziellen App-Store- und Play-Store-Badges nebeneinander.
 * Wenn nur eine URL übergeben wird, erscheint nur der entsprechende Badge.
 */
export function StoreBadges({ ios, android, className, size = 'md' }: StoreBadgesProps) {
  if (!ios && !android) return null
  const h = heightClasses[size]

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {ios ? (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Im App Store laden"
          className="inline-block transition-opacity hover:opacity-80"
        >
          <Image
            src="/badges/app-store-de.svg"
            alt="Im App Store laden"
            width={140}
            height={48}
            className={cn('w-auto', h)}
          />
        </a>
      ) : null}
      {android ? (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bei Google Play herunterladen"
          className="inline-block transition-opacity hover:opacity-80"
        >
          <Image
            src="/badges/google-play-de.png"
            alt="Bei Google Play herunterladen"
            width={158}
            height={48}
            className={cn('w-auto', h)}
          />
        </a>
      ) : null}
    </div>
  )
}
