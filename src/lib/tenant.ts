/**
 * Hostname → Tenant-ID-Extraktor.
 *
 * Production:  dorfner.kidgonet.de        → 'dorfner'
 * Development: dorfner.localhost:3000     → 'dorfner'
 *              dorfner.localhost          → 'dorfner'
 * Vercel:      <project>.vercel.app       → Fallback auf DEFAULT_PREVIEW_TENANT
 *
 * Wir betrachten apex- und www-Hosts als „kein Tenant", damit der Root nicht
 * versehentlich eine Tenant-Page ausliefert. Auf Vercel-Default-URLs
 * (*.vercel.app) zeigen wir hingegen die Default-Tenant-Page, damit Reviewer
 * die Page ohne DNS-Setup sehen können.
 */

const RESERVED_SUBDOMAINS = new Set(['www', 'app', 'api', 'portal', 'stgapi'])

/**
 * Tenant, der auf Vercel-Default-Hosts (*.vercel.app) gerendert wird, wenn
 * keine echte Subdomain konfiguriert ist. Ermöglicht Reviewer-Vorschau ohne
 * Wildcard-DNS.
 */
const DEFAULT_PREVIEW_TENANT = 'dorfner'

export function extractTenantFromHost(host: string | null): string | null {
  if (!host) return null

  // Port abschneiden (localhost:3000 → localhost)
  const hostname = host.split(':')[0]?.toLowerCase()
  if (!hostname) return null

  // Vercel-Default-URLs (*.vercel.app) → Default-Tenant für Vorschau.
  // Schlägt vor allen anderen Regeln zu, weil die Subdomain dort eine
  // Vercel-Project-ID ist und kein Tenant-Slug.
  if (hostname.endsWith('.vercel.app')) {
    return DEFAULT_PREVIEW_TENANT
  }

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
