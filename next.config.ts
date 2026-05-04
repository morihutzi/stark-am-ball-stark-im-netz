import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'

// CSP-Direktiven für die Initiativen-Landingpages. Strenger als das Portal,
// da hier keine Stripe-/Brevo-Embeds laufen. `unsafe-inline` für Scripts ist
// im Dev wegen HMR Pflicht; in Prod nur, solange wir noch Inline-Styles aus
// Tailwind/Next nicht via Nonce ersetzen.
const cspDirectives: string[] = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  'upgrade-insecure-requests',
]

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: ['camera=()', 'microphone=()', 'geolocation=()', 'interest-cohort=()'].join(', '),
  },
  { key: 'Content-Security-Policy', value: cspDirectives.join('; ') },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
