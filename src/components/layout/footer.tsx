import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import type { TenantConfig } from '@/tenants/types'

type FooterProps = {
  tenant: TenantConfig
}

export function Footer({ tenant }: FooterProps) {
  return (
    <footer className="border-t border-border bg-white">
      <Container width="wide" className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 sm:gap-4">
              <Image
                src="/logos/kidgonet.svg"
                alt="Kidgonet"
                width={120}
                height={32}
                className="h-7 w-auto"
              />
              <span aria-hidden className="text-foreground/30">
                ×
              </span>
              <Image
                src={tenant.partnerLogo.src}
                alt={tenant.partnerLogo.alt}
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="max-w-md text-sm text-foreground/70">{tenant.footer.blurb}</p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm sm:justify-end">
              {tenant.footer.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-foreground/70 hover:text-foreground">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 text-xs text-foreground/50">
          © {new Date().getFullYear()} Kidgonet GmbH. Eine Co-Initiative mit der{' '}
          {tenant.partnerName}.
        </p>
      </Container>
    </footer>
  )
}
