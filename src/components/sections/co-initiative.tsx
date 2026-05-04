import { Heart, ListChecks, Shield } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import type { TenantConfig } from '@/tenants/types'

type CoInitiativeProps = {
  tenant: TenantConfig
}

/**
 * Drei Werte, die im Sport selbstverständlich sind und im digitalen Alltag
 * erst noch gelernt werden müssen. Pro Wert je eine Sport- und eine
 * Online-Entsprechung — die Brücke, die das Konzeptpapier rhetorisch
 * aufmacht, hier visuell auf den Punkt gebracht.
 */
const PILLARS = [
  {
    icon: Heart,
    title: 'Respekt',
    sport: 'Faires Spiel auf dem Platz.',
    online: 'Faires Wort im Chat.',
  },
  {
    icon: ListChecks,
    title: 'Klare Regeln',
    sport: 'Trainingszeiten draußen.',
    online: 'Bildschirmzeiten drinnen.',
  },
  {
    icon: Shield,
    title: 'Verantwortung',
    sport: 'Für sich und das Team.',
    online: 'Für die eigenen Daten.',
  },
] as const

export function CoInitiative({ tenant }: CoInitiativeProps) {
  return (
    <section id="gemeinsam" className="bg-surface py-20 sm:py-28">
      <Container width="wide">
        <SectionHeading
          eyebrow="Sport und Smartphone"
          title={tenant.coInitiative.headline}
          align="center"
          className="mx-auto"
        />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
          {tenant.coInitiative.body}
        </p>

        {/* Drei Werte als visueller Anker — Sport ↔ Online im direkten Vergleich */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="flex flex-col rounded-3xl bg-white p-6 sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="size-6" strokeWidth={2.2} aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{pillar.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                      Auf dem Platz
                    </dt>
                    <dd className="mt-1 text-foreground/80">{pillar.sport}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                      Online
                    </dt>
                    <dd className="mt-1 text-foreground/80">{pillar.online}</dd>
                  </div>
                </dl>
              </article>
            )
          })}
        </div>

        {tenant.coInitiative.closing ? (
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
            {tenant.coInitiative.closing}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
