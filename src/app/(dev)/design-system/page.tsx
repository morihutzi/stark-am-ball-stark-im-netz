import { ArrowUpRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardEyebrow } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

/**
 * Interne Design-System-Showcase — nicht öffentlich verlinkt.
 *
 * Erreichbar unter `/design-system` auf jeder Subdomain (Middleware leitet
 * weiter). Dient als Sicht-Check für UI-Primitives im echten Tailwind/Token-
 * Kontext. Skill: `design-system-showcase`.
 *
 * Jede neue UI-Komponente unter `src/components/ui/` muss hier registriert
 * werden, damit sie im Live-Kontext sichtbar ist.
 */

export const metadata = {
  title: 'Design System',
  robots: { index: false, follow: false },
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-surface py-16">
      <Container width="wide">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Internal · Dev Only
          </p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
            Design System
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/70">
            Sicht-Check für UI-Primitives. Hier landen alle Komponenten aus
            <code className="mx-1 rounded bg-white px-1.5 py-0.5 text-sm">src/components/ui/</code>
            zur Visual-Prüfung im echten Token-Kontext.
          </p>
        </header>

        <div className="space-y-16">
          <Block title="Tokens" description="Kern-Farben, Schrift, Radius. Definiert in src/app/globals.css.">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              <Swatch token="primary" hex="#F9B000" textOn="white" />
              <Swatch token="foreground" hex="#4A4A49" textOn="white" />
              <Swatch token="surface" hex="#F7F5F2" textOn="foreground" />
              <Swatch token="border" hex="#E5E1DA" textOn="foreground" />
              <Swatch token="success" hex="#95C11E" textOn="white" />
              <Swatch token="warning" hex="#F9B000" textOn="white" />
              <Swatch token="destructive" hex="#FC5802" textOn="white" />
            </div>
          </Block>

          <Block title="Buttons" description="3 Varianten, 2 Größen, 10px Radius, weiße Schrift auf Primary.">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Mehr für Eltern</Button>
              <Button size="lg">Mehr für Eltern</Button>
              <Button variant="secondary">Sekundär</Button>
              <Button variant="secondary" size="lg">
                Sekundär groß
              </Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href="https://www.kidgonet.de" external>
                Externer Link
                <ArrowUpRight />
              </Button>
              <Button href="#anchor" variant="secondary">
                Anchor-Link
              </Button>
            </div>
          </Block>

          <Block title="Section Heading" description="Eyebrow + Headline + optional Subtitle. Center- oder Left-Align.">
            <div className="space-y-12">
              <SectionHeading
                eyebrow="Beispiel"
                title="Linksbündige Headline für eine Sektion."
                subtitle="Subtitle-Zeile, in der der Inhalt der Sektion knapp eingeleitet wird."
              />
              <SectionHeading
                eyebrow="Zentriert"
                title="Zentrierte Headline."
                subtitle="Wird typischerweise mit einer mittig positionierten Sektion gepaart."
                align="center"
              />
            </div>
          </Block>

          <Block title="Card" description="Drei Tones: white (default mit Border), surface (warm), ink (dunkel).">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card>
                <CardEyebrow>White</CardEyebrow>
                <h3 className="mt-3 text-lg font-bold">Beispiel-Card</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Solide Border, weißer Hintergrund. Default für Inhalts-Cards.
                </p>
              </Card>
              <Card tone="surface">
                <CardEyebrow>Surface</CardEyebrow>
                <h3 className="mt-3 text-lg font-bold">Beispiel-Card</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Warmer Beige-Hintergrund, kein Rand. Für sekundäre Inhalte.
                </p>
              </Card>
              <Card tone="ink">
                <CardEyebrow>Ink</CardEyebrow>
                <h3 className="mt-3 text-lg font-bold">Beispiel-Card</h3>
                <p className="mt-2 text-sm text-white/75">
                  Dunkler Hintergrund. Für Trust-Streifen oder Quotes.
                </p>
              </Card>
            </div>
          </Block>

          <Block title="Container" description="3 Breiten: prose (lesbar), default (Standard), wide (Hero/Grid).">
            <div className="space-y-3">
              {(['prose', 'default', 'wide'] as const).map((width) => (
                <div key={width} className="rounded-2xl bg-white p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    width=&quot;{width}&quot;
                  </p>
                  <Container width={width} className="rounded-md bg-primary/0 outline outline-1 outline-dashed outline-primary">
                    <div className="py-2 text-center text-sm font-medium text-foreground/70">
                      Content sitzt hier
                    </div>
                  </Container>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Icons" description="Lucide-Icons. Strikt 1.5–2.5 strokeWidth, size-Klassen.">
            <div className="flex flex-wrap items-center gap-6 text-foreground">
              <div className="flex flex-col items-center gap-1">
                <Heart className="size-6 text-primary" strokeWidth={2.2} />
                <span className="text-xs text-foreground/60">size-6</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ArrowUpRight className="size-5" strokeWidth={2} />
                <span className="text-xs text-foreground/60">size-5</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart className="size-4 text-primary" strokeWidth={2.5} />
                <span className="text-xs text-foreground/60">size-4</span>
              </div>
            </div>
          </Block>
        </div>
      </Container>
    </main>
  )
}

function Block({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="mb-6 border-b border-border pb-3">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-foreground/65">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

function Swatch({ token, hex, textOn }: { token: string; hex: string; textOn: 'white' | 'foreground' }) {
  return (
    <div
      className="flex flex-col rounded-2xl p-5"
      style={{ backgroundColor: `var(--color-${token})`, color: textOn === 'white' ? 'white' : 'var(--color-foreground)' }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest opacity-75">{token}</span>
      <span className="mt-2 font-mono text-sm">{hex}</span>
    </div>
  )
}
