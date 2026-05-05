import {
  ArrowUpRight,
  AppWindow,
  Brain,
  Compass,
  Hourglass,
  Lock,
  MapPin,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ChildviewMockup } from '@/components/mockups/childview-mockup'
import { MediaLicenseMockup } from '@/components/mockups/media-license-mockup'
import type { ForParentsBlock, ForParentsIcon, TenantConfig } from '@/tenants/types'

const iconMap: Record<ForParentsIcon, typeof Hourglass> = {
  hourglass: Hourglass,
  'shield-check': ShieldCheck,
  'app-window': AppWindow,
  'map-pin': MapPin,
  brain: Brain,
  compass: Compass,
  lock: Lock,
  search: Search,
}

type ForParentsProps = {
  tenant: TenantConfig
}

export function ForParents({ tenant }: ForParentsProps) {
  const { forParents } = tenant

  return (
    <section id="fuer-eltern" className="bg-white py-16 sm:py-28">
      <Container width="wide">
        <SectionHeading
          eyebrow="Für Eltern"
          title={forParents.headline}
          subtitle={forParents.subheadline}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <ForParentsCard block={forParents.app} mockup={<ChildviewMockup />} />
          <ForParentsCard block={forParents.mediaLicense} mockup={<MediaLicenseMockup />} />
        </div>
      </Container>
    </section>
  )
}

function ForParentsCard({
  block,
  mockup,
}: {
  block: ForParentsBlock
  mockup: React.ReactNode
}) {
  return (
    <a
      href={block.link.href}
      target={block.link.external ? '_blank' : undefined}
      rel={block.link.external ? 'noopener noreferrer' : undefined}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-surface ring-2 ring-transparent transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(74,74,73,0.12)] hover:ring-primary focus-visible:outline-none focus-visible:ring-primary"
    >
      {/* Mockup-Bühne mit warmem Hintergrund-Akzent. Mockups bestimmen ihre
       * eigene Breite, damit Phone (schmal) und Laptop (breit) passen. */}
      <div className="flex items-center justify-center bg-[#f1ece4] px-4 py-10 sm:px-6 sm:py-14">
        {mockup}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {block.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {block.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">{block.lead}</p>

        <ul className="mt-6 space-y-4">
          {block.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li
                key={item.title}
                className="border-t border-border pt-4 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                    <Icon className="size-5" strokeWidth={2.2} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 group-hover:underline">
          {block.link.label}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </div>
      </div>
    </a>
  )
}
