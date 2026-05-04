'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import type { CtaLink } from '@/tenants/types'

type StickyCtaProps = {
  cta: CtaLink
}

/**
 * Mobile-only Sticky CTA am unteren Bildschirmrand. Erscheint, sobald der
 * Hero-Bereich gescrollt ist (ca. > 600px), damit Eltern den Anker behalten.
 *
 * Client Component, weil scroll-Listener und window benötigt werden.
 */
export function StickyCta({ cta }: StickyCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-opacity sm:hidden ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="pointer-events-auto rounded-2xl bg-white p-2 shadow-[0_8px_32px_rgba(74,74,73,0.18)]">
        <Button
          href={cta.href}
          external={cta.external}
          size="lg"
          className="w-full"
        >
          {cta.label}
        </Button>
      </div>
    </div>
  )
}
