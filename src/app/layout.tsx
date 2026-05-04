import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Initiative Digitale Balance · Kidgonet',
    template: '%s · Kidgonet',
  },
  description:
    'Initiativen für digitale Balance im Nachwuchssport — eine Co-Initiative von Kidgonet und Sportpartnern.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={openSans.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
