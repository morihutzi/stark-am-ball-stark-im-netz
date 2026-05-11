import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import type { TenantConfig } from '@/tenants/types'

type HeroProps = {
  tenant: TenantConfig
}

export function Hero({ tenant }: HeroProps) {
  const { hero } = tenant

  return (
    <section id="top" className="relative flex min-h-[60svh] items-center overflow-hidden bg-surface sm:min-h-0 sm:block">
      {/* Mobile-only: unscharfes Hintergrundbild mit warmem Scrim, damit der
       * dunkle Text lesbar bleibt. Auf sm+ verstecken — dort übernimmt die
       * Bild-Karte rechts den visuellen Anker. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden sm:hidden"
        aria-hidden
      >
        <Image
          src={hero.image.src}
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover blur-[2px]"
          priority
        />
        {/* Minimaler Scrim — das eigentliche Frosted-Glass macht die Text-Card
         * mit backdrop-blur. Hier nur ein Hauch Wärme. */}
        <div className="absolute inset-0 bg-surface/15" />
      </div>

      <Container width="wide" className="relative py-6 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Auf Mobile: Frosted-Glass-Card über dem Blur-Bild. backdrop-blur
           * + halbtransparentes Weiß + zarter weißer Rand = Glas-Optik.
           * Auf sm+ alles zurücksetzen. */}
          <div className="rounded-3xl border border-white/15 bg-foreground/35 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl backdrop-saturate-150 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none sm:backdrop-saturate-100">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80 sm:mb-5 sm:text-sm sm:text-foreground/60">
              {hero.eyebrow}
            </p>
            <h1 className="text-[1.75rem] font-bold leading-[1.1] text-balance text-white sm:text-4xl sm:text-foreground lg:text-5xl xl:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg sm:text-foreground/75">
              {hero.subheadline}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button
                href={hero.primaryCta.href}
                external={hero.primaryCta.external}
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
              </Button>
              {hero.secondaryCta ? (
                <Button
                  href={hero.secondaryCta.href}
                  external={hero.secondaryCta.external}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Button>
              ) : null}
            </div>

            {hero.primaryCta.microcopy ? (
              <p className="mt-4 text-sm text-white/75 sm:text-foreground/60">{hero.primaryCta.microcopy}</p>
            ) : null}
          </div>

          {/* Bild-Karte nur ab sm sichtbar; auf Mobile übernimmt das blurred
           * Hintergrundbild diesen Anker. */}
          <div className="relative hidden sm:block">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(74,74,73,0.18)] lg:aspect-[5/4]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={800}
                height={1000}
                className="h-full w-full object-cover object-[center_25%]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
