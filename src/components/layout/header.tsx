import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import type { TenantConfig } from '@/tenants/types'

type HeaderProps = {
  tenant: TenantConfig
}

export function Header({ tenant }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white">
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          {/* Co-Brand-Lockup: beide Logos gleichberechtigt */}
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-4">
            <Image
              src="/logos/kidgonet.svg"
              alt="Kidgonet"
              width={120}
              height={32}
              className="h-6 w-auto sm:h-8"
              priority
            />
            <span aria-hidden className="text-foreground/30">
              ×
            </span>
            <Image
              src={tenant.partnerLogo.src}
              alt={tenant.partnerLogo.alt}
              width={140}
              height={40}
              className="h-7 w-auto sm:h-10"
              priority
            />
          </a>

          {/* Desktop-CTA, mobile zeigt nur Sticky-CTA am Bottom */}
          <div className="hidden sm:block">
            <Button href={tenant.hero.primaryCta.href} external={tenant.hero.primaryCta.external}>
              {tenant.hero.primaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
