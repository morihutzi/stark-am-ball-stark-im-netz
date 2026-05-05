import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StoreBadges } from '@/components/ui/store-badges'
import type { TenantConfig } from '@/tenants/types'

type TestimonialProps = {
  tenant: TenantConfig
}

/**
 * Testimonial-Sektion: Foto links, Zitat + Attribution + CTA rechts.
 * Layout angelehnt an kidgonet.de (Manuel-Neuer-Block) inkl. dezentem
 * Hintergrundbild rechts, das nach links in die Surface-Farbe ausläuft.
 *
 * Auf Mobile: Foto oben, Inhalt unten zentriert.
 */
export function Testimonial({ tenant }: TestimonialProps) {
  const { testimonial } = tenant
  if (!testimonial) return null

  return (
    <section className="relative overflow-hidden bg-surface py-12 sm:py-20">
      {/* Dezentes Hintergrundbild (1:1 von kidgonet.de — Banner_2-1) rechts,
       * mit Mask-Gradient nach links verlaufend, damit die Schrift links auf
       * sauberem Surface liegt. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-50 [mask-image:linear-gradient(to_right,transparent,black_60%)] lg:block"
        aria-hidden
      >
        <Image
          src="/images/testimonial-bg.jpeg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>

      <Container width="wide" className="relative">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:mx-0">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(74,74,73,0.18)]">
              <Image
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                width={770}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <blockquote className="text-xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              {`„${testimonial.quote}"`}
            </blockquote>
            <p className="mt-4 text-sm font-medium text-foreground/60 sm:text-base">
              {testimonial.attribution}
            </p>
            {/* Desktop/Tablet: Button → Welcome-Flow. Auf Mobile stattdessen
             * Store-Badges, weil das Handy direkt installieren kann. */}
            <div className="mt-6 hidden justify-center sm:mt-7 sm:flex lg:justify-start">
              <Button
                href={testimonial.cta.href}
                external={testimonial.cta.external}
                size="lg"
              >
                {testimonial.cta.label}
              </Button>
            </div>
            {tenant.appStores ? (
              <StoreBadges
                ios={tenant.appStores.ios}
                android={tenant.appStores.android}
                className="mt-6 flex justify-center sm:hidden"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
