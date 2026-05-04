import { ShieldCheck, Server, GraduationCap, Heart } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import type { TenantConfig, TrustItem } from '@/tenants/types'

type TrustProps = {
  tenant: TenantConfig
}

const iconMap = {
  'shield-check': ShieldCheck,
  server: Server,
  'graduation-cap': GraduationCap,
  heart: Heart,
} as const

export function Trust({ tenant }: TrustProps) {
  return (
    <section id="vertrauen" className="bg-white py-20 sm:py-28">
      <Container width="wide">
        <SectionHeading
          eyebrow="Vertrauen"
          title={tenant.trust.headline}
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {tenant.trust.items.map((item) => (
            <TrustCard key={item.title} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

function TrustCard({ item }: { item: TrustItem }) {
  const Icon = iconMap[item.icon]
  return (
    <li className="rounded-3xl bg-surface p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.body}</p>
    </li>
  )
}
