/**
 * Multi-Tenant-Vertrag für Initiativen-Landingpages.
 *
 * Eine TenantConfig liefert sämtliche Inhalte und Branding-Bezüge, die die
 * generischen Section-Components rendern. Pro Verein/Partner ein Modul unter
 * `src/tenants/<id>/config.ts`, eingetragen in `src/tenants/registry.ts`.
 */

export type CtaLink = {
  label: string
  href: string
  /** Externer Link öffnet neuen Tab und setzt rel="noopener". */
  external?: boolean
  /** Optional: Microcopy direkt unter dem Button (klein). */
  microcopy?: string
}

export type LogoAsset = {
  src: string
  alt: string
  /** Anzeigegröße in px für die Header-Lockup-Anzeige (Höhe). */
  height?: number
}

export type ImageAsset = {
  src: string
  alt: string
}

export type TrustItem = {
  title: string
  body: string
  icon: 'shield-check' | 'server' | 'graduation-cap' | 'heart'
}

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

/**
 * Sub-Item für die "Für Eltern"-Sektion.
 * Wird sowohl für Medienführerschein-Module als auch für App-Features
 * verwendet, da beide dieselbe Form haben.
 */
export type ForParentsIcon =
  | 'hourglass'
  | 'shield-check'
  | 'app-window'
  | 'map-pin'
  | 'brain'
  | 'compass'
  | 'lock'
  | 'search'

export type ForParentsItem = {
  title: string
  description: string
  icon: ForParentsIcon
}

export type ForParentsBlock = {
  /** Kurzer Eyebrow über dem Titel, z.B. "Der Medienführerschein". */
  eyebrow: string
  title: string
  lead: string
  items: ForParentsItem[]
  link: CtaLink
}

export type TenantConfig = {
  /** URL-Subdomain ohne kidgonet.de, z.B. 'dorfner'. */
  id: string
  /** Anzeigename des Partners. */
  partnerName: string
  /** Kurzform für Header (z.B. "Hans Dorfner"). */
  partnerShortName: string
  /** Logo des Partners. Kidgonet-Logo wird zentral aus public/logos/ geladen. */
  partnerLogo: LogoAsset

  /** SEO/Meta. */
  meta: {
    title: string
    description: string
  }

  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    primaryCta: CtaLink
    secondaryCta?: CtaLink
    image: ImageAsset
  }

  coInitiative: {
    headline: string
    body: string
    /** Optionales Schluss-Statement, fett gesetzt. */
    closing?: string
  }

  /**
   * Volle-Breite-Foto-Sektion zwischen Co-Initiative und Für Eltern.
   * Trägt die emotionale Atmosphäre der Initiative — Kinder, Camps,
   * Trainingsmomente. Kurzer Caption-Text statt Headline-Overlay.
   */
  atmosphere: {
    image: ImageAsset
    quote: string
    attribution: string
  }

  /**
   * "Für Eltern"-Sektion: Zwei Cards nebeneinander.
   * Card 1: Medienführerschein-Vorschau, Card 2: Kidgonet App-Vorschau.
   */
  forParents: {
    headline: string
    subheadline?: string
    mediaLicense: ForParentsBlock
    app: ForParentsBlock
  }

  /**
   * Optionales Testimonial mit Foto, Zitat, Attribution und CTA.
   * Z.B. Manuel-Neuer-Block aus kidgonet.de.
   */
  testimonial?: {
    image: ImageAsset
    quote: string
    attribution: string
    cta: CtaLink
  }

  /**
   * Optionale Store-Links für iOS und Android. Wenn gesetzt, rendern
   * Sektionen wie Footer und Testimonial die offiziellen Badges.
   */
  appStores?: {
    ios?: string
    android?: string
  }

  trust: {
    headline: string
    items: TrustItem[]
  }

  footer: {
    blurb: string
    links: FooterLink[]
  }
}
