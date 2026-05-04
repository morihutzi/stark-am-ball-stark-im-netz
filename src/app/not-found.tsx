import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

/**
 * Wird auch von der Subdomain-Middleware angesteuert, wenn die aufgerufene
 * Subdomain keinem Tenant zugeordnet ist (z.B. apex-Domain ohne Subdomain
 * oder unbekannter Verein).
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-surface">
      <Container width="prose" className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Seite nicht gefunden.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
          Diese Initiative-Seite existiert hier nicht. Möglicherweise haben Sie eine alte URL.
        </p>

        <div className="mt-10 flex justify-center">
          <Button href="https://kidgonet.de" external size="lg">
            Zur Kidgonet-Hauptseite
          </Button>
        </div>

        <p className="mt-8 text-sm text-foreground/50">
          Sie wollen einen eigenen Verein an Bord holen?{' '}
          <Link
            href="https://kidgonet.de/kontakt"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Schreiben Sie uns
          </Link>
          .
        </p>
      </Container>
    </main>
  )
}
