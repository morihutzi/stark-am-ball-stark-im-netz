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
    <section id="top" className="relative overflow-hidden bg-surface">
      <Container width="wide" className="py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground/60">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={hero.primaryCta.href}
                external={hero.primaryCta.external}
                size="lg"
              >
                {hero.primaryCta.label}
              </Button>
              {hero.secondaryCta ? (
                <Button
                  href={hero.secondaryCta.href}
                  external={hero.secondaryCta.external}
                  variant="secondary"
                  size="lg"
                >
                  {hero.secondaryCta.label}
                </Button>
              ) : null}
            </div>

            {hero.primaryCta.microcopy ? (
              <p className="mt-4 text-sm text-foreground/60">{hero.primaryCta.microcopy}</p>
            ) : null}
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(74,74,73,0.18)]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
