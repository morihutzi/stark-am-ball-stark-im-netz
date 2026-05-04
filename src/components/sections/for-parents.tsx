import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ChildviewMockup } from '@/components/mockups/childview-mockup'
import { MediaLicenseMockup } from '@/components/mockups/media-license-mockup'
import type { ForParentsBlock, TenantConfig } from '@/tenants/types'

type ForParentsProps = {
  tenant: TenantConfig
}

export function ForParents({ tenant }: ForParentsProps) {
  const { forParents } = tenant

  return (
    <section id="fuer-eltern" className="bg-white py-20 sm:py-28">
      <Container width="wide">
        <SectionHeading
          eyebrow="Für Eltern"
          title={forParents.headline}
          subtitle={forParents.subheadline}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ForParentsCard block={forParents.mediaLicense} mockup={<MediaLicenseMockup />} />
          <ForParentsCard block={forParents.app} mockup={<ChildviewMockup />} />
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
      <div className="flex items-center justify-center bg-[#f1ece4] px-6 py-12 sm:py-14">
        {mockup}
      </div>

      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {block.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {block.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">{block.lead}</p>

        <ul className="mt-6 space-y-4">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="border-t border-border pt-4 first:border-t-0 first:pt-0"
            >
              <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 group-hover:underline">
          {block.link.label}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </div>
      </div>
    </a>
  )
}
