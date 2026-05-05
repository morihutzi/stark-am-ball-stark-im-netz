import type { TenantConfig } from '../types'

export const dorfnerConfig: TenantConfig = {
  id: 'dorfner',
  partnerName: 'Hans Dorfner Fußballschule',
  partnerShortName: 'Hans Dorfner',
  partnerLogo: {
    src: '/logos/hans-dorfner.png',
    alt: 'Hans Dorfner Fußballschule',
    height: 48,
  },

  meta: {
    title: 'Initiative Digitale Balance · Hans Dorfner × Kidgonet',
    description:
      'Eine Co-Initiative der Hans Dorfner Fußballschule und Kidgonet für mehr Bewegung und gesunde Mediennutzung im Familienalltag.',
  },

  hero: {
    eyebrow: 'Eine Initiative der Hans Dorfner Fußballschule und Kidgonet',
    headline: 'Klare Regeln. Auf dem Platz und am Smartphone.',
    subheadline:
      'Damit Ihr Kind die Werte aus dem Training auch online erlebt: Respekt, klare Regeln, Verantwortung. Mit dem Medienführerschein und der Kidgonet App, kostenlos für Familien der Hans Dorfner Fußballschule.',
    primaryCta: {
      label: 'Mehr für Eltern',
      href: '#fuer-eltern',
    },
    image: {
      src: '/images/camp-3tage.jpg',
      alt: 'Kinder beim Fußballtraining im Camp der Hans Dorfner Fußballschule',
    },
  },

  coInitiative: {
    headline: 'Was im Training gilt, gilt auch online.',
    body: 'Auf dem Platz lernt Ihr Kind Schritt für Schritt: erst der Pass, dann der Schuss, dann das Spiel. Mit dem Medienführerschein lernt es genauso, was im Netz wichtig ist: in kleinen Etappen, kindgerecht, mit Aha-Effekt.',
    closing: 'Damit zu Hause weniger diskutiert und mehr gespielt wird.',
  },

  atmosphere: {
    image: {
      src: '/images/camp-team-huddle.jpg',
      alt: 'Junges Team im Kreis auf dem Platz, Hans Dorfner Fußballschule',
    },
    quote: 'Was auf dem Platz gilt, gilt auch online.',
    attribution: 'Ein Tag im Camp der Hans Dorfner Fußballschule.',
  },

  forParents: {
    headline: 'Das bekommen Sie als Familie.',
    subheadline:
      'Zwei Werkzeuge, die Familien der Hans Dorfner Fußballschule kostenlos nutzen können.',
    mediaLicense: {
      eyebrow: 'Der Medienführerschein',
      title: 'Spielerisch lernen, was im Netz zählt.',
      lead: 'Ein Lernprogramm für Kinder von 7 bis 13, entwickelt mit Pädagoginnen. Aufgebaut wie eine Trainingseinheit: kurz, konkret, mit Aha-Effekt. Sie und Ihr Kind machen die Module zusammen.',
      items: [
        {
          title: 'Bildschirmzeit verstehen',
          description: 'Warum dein Gehirn Pausen braucht und wie du selbst merkst, wann es Zeit ist aufzuhören.',
          icon: 'brain',
        },
        {
          title: 'Sicher unterwegs',
          description: 'Was tun, wenn ein Fremder schreibt, eine Werbung lockt, ein Inhalt verstört.',
          icon: 'compass',
        },
        {
          title: 'Privatsphäre schützen',
          description: 'Welche Daten gehören mir, und welche darf ich teilen.',
          icon: 'lock',
        },
        {
          title: 'Fake oder echt?',
          description: 'Wie du Werbung von Inhalten unterscheidest und Bilder hinterfragst.',
          icon: 'search',
        },
      ],
      link: {
        label: 'Mehr zum Medienführerschein',
        href: 'https://www.kidgonet.de/medienfuehrerschein',
        external: true,
      },
    },
    app: {
      eyebrow: 'Die Kidgonet App',
      title: 'Klare Regeln im Familienalltag.',
      lead: 'Bildschirmzeit, Webfilter, App-Freigaben und Standort in einer App. In drei Minuten auf Ihrem Handy und dem Ihres Kindes eingerichtet.',
      items: [
        {
          title: 'Bildschirmzeit klar regeln',
          description: 'Limits pro App und pro Tag, die Ihr Kind selbst versteht. Schluss mit Aushandeln am Esstisch.',
          icon: 'hourglass',
        },
        {
          title: 'Sicherer Webfilter',
          description: 'Altersgerechte Filter automatisch, ohne dass Sie jeden Link prüfen müssen.',
          icon: 'shield-check',
        },
        {
          title: 'Apps freigeben',
          description: 'Sie entscheiden, was läuft. Ihr Kind weiß, woran es ist.',
          icon: 'app-window',
        },
        {
          title: 'Standort & Familienfunktionen',
          description: 'Wissen, wo Ihr Kind ist, wenn das Training endet. Ohne Detektivarbeit.',
          icon: 'map-pin',
        },
      ],
      link: {
        label: 'Zur Kidgonet App',
        href: 'https://www.kidgonet.de',
        external: true,
      },
    },
  },

  appStores: {
    ios: 'https://apps.apple.com/de/app/kidgonet/id6759919131',
    android: 'https://play.google.com/store/apps/details?id=de.kidgonet.kidprotection.v2',
  },

  testimonial: {
    image: {
      src: '/images/manuel-neuer.jpg',
      alt: 'Manuel Neuer',
    },
    quote: 'Kidgonet vereint pädagogische Verantwortung und Sicherheit.',
    attribution: 'Manuel Neuer, Weltmeister und Vater',
    cta: {
      label: 'Jetzt downloaden!',
      href: 'https://portal.kidgonet.de/welcome',
      external: true,
    },
  },

  trust: {
    headline: 'Worauf Sie sich verlassen können.',
    items: [
      {
        title: 'DSGVO-konform',
        body: 'Alle Daten werden in Deutschland verarbeitet, keine Werbung, keine Tracker.',
        icon: 'shield-check',
      },
      {
        title: 'Server in Deutschland',
        body: 'Hetzner-Hosting, ausschließlich europäische Subdienstleister.',
        icon: 'server',
      },
      {
        title: 'Mit Pädagoginnen entwickelt',
        body: 'Lernmodule entstehen mit Medienpädagoginnen, nicht aus dem Marketing.',
        icon: 'graduation-cap',
      },
      {
        title: 'Empfohlen von Hans Dorfner',
        body: 'Eine Co-Initiative der Hans Dorfner Fußballschule und Kidgonet.',
        icon: 'heart',
      },
    ],
  },

  footer: {
    blurb:
      'Eine Co-Initiative der Hans Dorfner Fußballschule und Kidgonet für digitale Balance im Nachwuchssport.',
    links: [
      { label: 'Kidgonet', href: 'https://www.kidgonet.de', external: true },
      { label: 'Hans Dorfner Fußballschule', href: 'https://fussballferien.de', external: true },
      { label: 'Datenschutz', href: 'https://www.kidgonet.de/datenschutz', external: true },
      { label: 'Impressum', href: 'https://www.kidgonet.de/impressum', external: true },
    ],
  },
}
