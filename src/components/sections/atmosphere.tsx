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
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <figure className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="relative aspect-[4/3] w-full sm:aspect-[21/9]">
            <Image
              src={atmosphere.image.src}
              alt={atmosphere.image.alt}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <figcaption className="mt-5 text-center sm:mt-7">
            <blockquote className="mx-auto max-w-2xl text-lg font-bold leading-tight text-foreground sm:text-2xl md:text-3xl">
              {`„${atmosphere.quote}"`}
            </blockquote>
            <p className="mt-2 text-sm font-medium text-foreground/55 sm:mt-3">
              {atmosphere.attribution}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
