import { cn } from '@/lib/cn'

type PhoneFrameProps = {
  children: React.ReactNode
  className?: string
}

/**
 * iPhone-Mockup-Rahmen mit Notch und Home-Indicator. Reine Optik, kein
 * Verhalten. Außenmaße folgen einer 9.5:20-Ratio (entspricht iPhone-15-Pro).
 *
 * Innen ein Surface-Hintergrund, der vom Inhalt überdeckt werden kann.
 */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto aspect-[9.5/20] w-full max-w-[230px] rounded-[2.4rem] bg-[#1a1a19] shadow-[0_24px_60px_rgba(74,74,73,0.18)]',
        className
      )}
    >
      {/* Inner screen — absolute inset statt h-full, damit iOS Safari den
       * Inner-Screen nicht über das aspect-ratio'd Outer hinauswachsen lässt
       * (h-full kann auf iOS Safari von Inhalt überschrieben werden). */}
      <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-[#fcfaf7]">
        {children}

        {/* Notch */}
        <div className="pointer-events-none absolute inset-x-0 top-1.5 z-20 flex justify-center">
          <div className="h-[18px] w-[62px] rounded-full bg-[#1a1a19]" aria-hidden />
        </div>

        {/* Home indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center">
          <div className="h-1 w-20 rounded-full bg-foreground/25" aria-hidden />
        </div>
      </div>
    </div>
  )
}
