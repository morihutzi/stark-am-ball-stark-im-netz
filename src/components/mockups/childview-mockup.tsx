'use client'

import { useEffect, useState } from 'react'
import { Wifi, BatteryMedium, Hourglass, Clock } from 'lucide-react'
import { PhoneFrame } from './phone-frame'

/**
 * Childview-Mockup: Animierter Lock-Cycle aus dem iOS-Onboarding-Funnel.
 *
 * Phasen:
 *  - 4.0s Countdown: 60 Min ticken auf 0, Wave-Fill-Circle leert sich,
 *    Farbe blendet von Grün (#C6C500) auf Orange (#F9B000)
 *  - 1.8s Lock-State: "Zeit vorbei", Stoppuhr-Icon mittig
 *  - Loop
 *
 * Replikat von `ParentSolutionTimeLimitScreenView.swift` (Wave-Fill mit
 * Sinus-Path, Farbblend, Greeting-Card-Inhalt). Als reine Marketing-Demo,
 * nicht funktional verbunden mit einer echten Bildschirmzeit.
 */

const COUNTDOWN_DURATION = 4000
const BLOCKED_DURATION = 1800
const CYCLE_DURATION = COUNTDOWN_DURATION + BLOCKED_DURATION
const INITIAL_MINUTES = 60

const COLOR_FULL = { r: 0.776, g: 0.773, b: 0 } // #C6C500
const COLOR_LOW = { r: 0.976, g: 0.69, b: 0 } // #F9B000

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function fillColorFor(fillFraction: number): string {
  // Smooth blend: voll = grün, niedrig = orange.
  const t = Math.max(0, Math.min(1, (fillFraction - 0.2) / 0.3))
  const r = Math.round(lerp(COLOR_LOW.r, COLOR_FULL.r, t) * 255)
  const g = Math.round(lerp(COLOR_LOW.g, COLOR_FULL.g, t) * 255)
  const b = Math.round(lerp(COLOR_LOW.b, COLOR_FULL.b, t) * 255)
  return `rgb(${r},${g},${b})`
}

/**
 * Sinus-Wellen-Pfad als SVG d-Attribut. waterY in [0..100], offset in [0..1].
 * Spannt sich über die volle SVG-Breite (100x100 viewBox).
 */
function buildWavePath(waterY: number, offset: number): string {
  if (waterY >= 100) return ''
  const amplitude = 3
  const step = 2
  const segments: string[] = []
  segments.push(`M 0 100`)
  segments.push(`L 0 ${waterY}`)
  for (let x = 0; x <= 100 + step; x += step) {
    const phase = (x / 100 + offset) * 2 * Math.PI
    const y = waterY + Math.sin(phase) * amplitude
    segments.push(`L ${x.toFixed(1)} ${y.toFixed(2)}`)
  }
  segments.push(`L 100 100`)
  segments.push('Z')
  return segments.join(' ')
}

function readReduceMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ChildviewMockup() {
  const [elapsed, setElapsed] = useState(0)
  const [waveOffset, setWaveOffset] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(readReduceMotion)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const start = Date.now()
    let frame = 0
    const tick = () => {
      const now = Date.now() - start
      setElapsed(now)
      // Wave-Phase loopt langsam, unabhängig vom Cycle.
      setWaveOffset((now / 3000) % 1)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduceMotion])

  // Bei reduce-motion: Standfoto im Lock-State, ohne Animation.
  const effectiveElapsed = reduceMotion ? COUNTDOWN_DURATION + 200 : elapsed
  const phaseTime = effectiveElapsed % CYCLE_DURATION
  const isBlocked = phaseTime >= COUNTDOWN_DURATION
  const countdownProgress = Math.min(1, phaseTime / COUNTDOWN_DURATION)
  const remainingMinutes = isBlocked
    ? 0
    : Math.max(0, Math.round((1 - countdownProgress) * INITIAL_MINUTES))
  const fillFraction = isBlocked ? 0 : Math.max(0.02, 1 - countdownProgress)
  const fillColor = fillColorFor(fillFraction)
  const waterY = 100 * (1 - fillFraction)
  const wavePath = buildWavePath(waterY, waveOffset)
  const wavePathBg = buildWavePath(waterY, waveOffset + 0.3)

  const currentTime = '14:07'

  return (
    <PhoneFrame className="max-w-[220px]">
      {/* Top gradient overlay (mimic iOS Childview) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[110px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(249,176,0,1) 0%, rgba(249,176,0,0) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-3 text-white">
          <span className="text-[10px] font-semibold leading-none">{currentTime}</span>
          <div className="flex items-center gap-1">
            <Wifi className="size-2.5" strokeWidth={2.5} aria-hidden />
            <BatteryMedium className="size-3" strokeWidth={2.5} aria-hidden />
          </div>
        </div>

        {/* Greeting card */}
        <div className="mx-3 mt-3 rounded-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="px-3 pb-1.5 pt-2.5 text-[11px] font-extrabold text-foreground">
            Hallo Anna
          </div>
          <div className="mx-3 h-px bg-border" />
          <div className="flex items-center gap-2 px-3 py-2">
            <div
              className={`flex size-6 items-center justify-center rounded-md text-white transition-colors ${
                isBlocked ? 'bg-primary' : 'bg-[#C6C500]'
              }`}
            >
              {isBlocked ? (
                <Clock className="size-3" strokeWidth={2.5} aria-hidden />
              ) : (
                <Hourglass className="size-3" strokeWidth={2.5} aria-hidden />
              )}
            </div>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="text-[8px] font-extrabold text-foreground">
                {isBlocked ? 'Zeit vorbei' : 'Heute noch:'}
              </span>
              <span className="text-[8px] text-foreground/60">
                {isBlocked ? 'Aufgebraucht für heute' : `${remainingMinutes} Min.`}
              </span>
            </div>
          </div>
        </div>

        {/* Hero display: countdown wave OR locked */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative aspect-square w-full max-w-[150px]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <clipPath id="wave-circle-clip">
                  <circle cx="50" cy="50" r="48" />
                </clipPath>
                {/* Wave-Clip für die weiße Schrift, die nur über dem
                 * gefüllten (farbigen) Bereich sichtbar sein soll. */}
                <clipPath id="wave-fill-clip">
                  <path d={wavePath} />
                </clipPath>
              </defs>

              {/* Hintergrund (Weiß im Kreis) */}
              <circle cx="50" cy="50" r="48" fill="white" />

              {!isBlocked ? (
                <>
                  {/* Wave-Füllung (Tiefen-Welle hinter Primary) */}
                  <g clipPath="url(#wave-circle-clip)">
                    <path d={wavePathBg} fill={fillColor} fillOpacity="0.4" />
                    <path d={wavePath} fill={fillColor} />
                  </g>

                  {/* Orange Schrift — sichtbar über dem weißen Hintergrund */}
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fill="#F9B000"
                    className="font-sans"
                  >
                    <tspan fontSize="28" fontWeight={800}>
                      {remainingMinutes}
                    </tspan>
                    <tspan fontSize="10" fontWeight={600} dx="1.5">
                      Min.
                    </tspan>
                  </text>

                  {/* Weiße Schrift — geclippt auf den Wellenbereich, also
                   * nur dort sichtbar, wo die orange Schrift vom Wasser
                   * überdeckt würde. */}
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fill="white"
                    clipPath="url(#wave-fill-clip)"
                    className="font-sans"
                  >
                    <tspan fontSize="28" fontWeight={800}>
                      {remainingMinutes}
                    </tspan>
                    <tspan fontSize="10" fontWeight={600} dx="1.5">
                      Min.
                    </tspan>
                  </text>
                </>
              ) : null}

              {/* Border */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#F9B000"
                strokeWidth="3"
              />
            </svg>

            {/* Lock-State als HTML-Overlay (Icon + Text). Absolute, damit das
             * aspect-square-Parent nicht von h-full-Content in die Höhe
             * gezogen wird (iOS-Safari aspect-ratio + h-full Bug). */}
            {isBlocked ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 text-center">
                  <Clock className="size-7 text-primary" strokeWidth={2.5} aria-hidden />
                  <span className="text-[13px] font-extrabold text-foreground">Zeit vorbei</span>
                  <span className="px-3 text-[9px] leading-tight text-foreground/55">
                    Deine Zeit für heute
                    <br />
                    ist aufgebraucht
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Bottom spacer for home indicator */}
        <div className="h-4" />
      </div>
    </PhoneFrame>
  )
}
