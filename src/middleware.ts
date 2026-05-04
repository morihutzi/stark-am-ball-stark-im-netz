import { NextResponse, type NextRequest } from 'next/server'
import { extractTenantFromHost } from '@/lib/tenant'

/**
 * Subdomain-Routing für Initiativen-Landingpages.
 *
 * - <tenant>.kidgonet.de         → /<tenant>/...
 * - <tenant>.localhost:3000      → /<tenant>/...     (Dev)
 * - kidgonet.de / www.kidgonet.de → /not-found       (kein Tenant)
 *
 * Statische Assets und _next-Routen werden vom Matcher unten ausgenommen,
 * sie laufen direkt durch.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const tenant = extractTenantFromHost(host)
  const url = request.nextUrl.clone()

  // Kein Tenant erkannt → 404 (verhindert, dass die Apex-Domain Tenant-Inhalte
  // ausliefert).
  if (!tenant) {
    url.pathname = '/not-found'
    return NextResponse.rewrite(url)
  }

  // Tenant-Pfad bereits vorhanden? → durchlassen, kein doppeltes Rewrite.
  if (url.pathname.startsWith(`/${tenant}/`) || url.pathname === `/${tenant}`) {
    return NextResponse.next()
  }

  // /<original-path> → /<tenant>/<original-path>
  const newPath = url.pathname === '/' ? `/${tenant}` : `/${tenant}${url.pathname}`
  url.pathname = newPath
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Alles matchen außer:
     * - /_next/* (Next-Internals)
     * - /api/* (zukünftig)
     * - /design-system (interne Dev-Route, nicht tenant-spezifisch)
     * - statische Files mit Extension (favicon.ico, robots.txt, /images/*.jpg)
     * - /not-found (sonst Endlos-Rewrite)
     */
    '/((?!_next/|api/|design-system|not-found|.*\\..*).*)',
  ],
}
