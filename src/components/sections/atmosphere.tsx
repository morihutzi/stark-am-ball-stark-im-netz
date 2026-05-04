import Image from 'next/image'
import type { TenantConfig } from '@/tenants/types'

type AtmosphereProps = {
  tenant: TenantConfig
}

/**
 * Atmosphäre-Sektion: Volle-Breite-Foto mit emotionalem Anker.
 * Kein Card-Layout, sondern bewusst luftig und großzügig — die Bildsprache
 * der Initiative trägt hier den Ton, nicht der Text.
 */
export function Atmosphere({ tenant }: AtmosphereProps) {
  const { atmosphere } = tenant

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <figure className="overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={atmosphere.image.src}
              alt={atmosphere.image.alt}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <figcaption className="mt-8 text-center">
            <blockquote className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
              {`„${atmosphere.quote}"`}
            </blockquote>
            <p className="mt-4 text-sm font-medium text-foreground/55">
              {atmosphere.attribution}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
