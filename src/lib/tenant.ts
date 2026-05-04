/**
 * Hostname → Tenant-ID-Extraktor.
 *
 * Production:  dorfner.kidgonet.de        → 'dorfner'
 * Development: dorfner.localhost:3000     → 'dorfner'
 *              dorfner.localhost          → 'dorfner'
 *
 * Wir betrachten apex- und www-Hosts als „kein Tenant", damit der Root nicht
 * versehentlich eine Tenant-Page ausliefert.
 */

const RESERVED_SUBDOMAINS = new Set(['www', 'app', 'api', 'portal', 'stgapi'])

export function extractTenantFromHost(host: string | null): string | null {
  if (!host) return null

  // Port abschneiden (localhost:3000 → localhost)
  const hostname = host.split(':')[0]?.toLowerCase()
  if (!hostname) return null

  const parts = hostname.split('.')

  // Localhost-Single-Word: keine Subdomain → kein Tenant
  if (parts.length < 2) return null

  // Apex-Domain (z.B. kidgonet.de) → kein Tenant
  if (parts.length === 2 && parts[1] !== 'localhost') return null

  // Erste Component ist der Subdomain-Slug
  const subdomain = parts[0]
  if (!subdomain) return null
  if (RESERVED_SUBDOMAINS.has(subdomain)) return null

  return subdomain
}
