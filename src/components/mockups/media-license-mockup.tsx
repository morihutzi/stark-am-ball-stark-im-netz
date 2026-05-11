import { Lock } from 'lucide-react'

/**
 * Medienführerschein-Mockup: App-Karten sortieren (Kapitel 1).
 *
 * Im Laptop-Browser-Rahmen, weil der Medienführerschein für Eltern und Kinder
 * am Laptop oder iPad bearbeitet wird (nicht am Handy).
 *
 * Statische Replik des echten Sortier-Screens aus dem Kidgonet-Portal:
 * Kinder ziehen App-Karten in eine der drei Säulen — Lernen, Kreativ,
 * Unterhaltung. Ziel ist, ein Bewusstsein für die unterschiedlichen Modi
 * von Bildschirmzeit zu schaffen ("Gute Zeit, smarte Zeit").
 */

const CARDS = [
  'Video schneiden',
  'Vokabeltrainer',
  'Minecraft bauen',
  'Roblox zocken',
  'Foto bearbeiten',
]

export function MediaLicenseMockup() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <LaptopFrame>
        <BrowserContent />
      </LaptopFrame>
    </div>
  )
}

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Lid (screen) */}
      <div className="rounded-t-xl bg-[#1a1a19] p-1.5 shadow-[0_24px_60px_rgba(74,74,73,0.18)]">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f7f5f2]">
          {children}
        </div>
      </div>
      {/* Hinge */}
      <div className="h-1 w-full bg-[#2a2a29]" aria-hidden />
      {/* Base */}
      <div className="relative mx-auto h-2 w-[105%] -translate-x-[2.5%] rounded-b-2xl bg-gradient-to-b from-[#3a3a39] to-[#1a1a19] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
        <div
          className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-md bg-[#1a1a19]"
          aria-hidden
        />
      </div>
    </div>
  )
}

function BrowserContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Browser chrome */}
      <div className="flex shrink-0 items-center gap-2 border-b border-border bg-surface px-3 py-1.5">
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-[#FF5F57]" />
          <span className="size-2 rounded-full bg-[#FEBC2E]" />
          <span className="size-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-1 flex flex-1 items-center gap-1.5 rounded-md bg-white px-2 py-1 text-[8px] text-foreground/60">
          <Lock className="size-2" strokeWidth={2.5} aria-hidden />
          <span className="font-medium">portal.kidgonet.de/medienfuehrerschein</span>
        </div>
      </div>

      {/* Orange Header-Banner mit Aufgabentitel */}
      <div className="rounded-b-2xl bg-primary px-3 pb-2 pt-1.5 text-white">
        <span className="text-[7px] font-bold">Medienführerschein</span>
        <h3 className="mt-1 text-center text-[10px] font-extrabold leading-tight">
          App-Karten sortieren: Lernen, Kreativ, Unterhaltung
        </h3>
      </div>

      {/* Inhalt */}
      <div className="flex flex-1 flex-col gap-1 px-2.5 pb-1.5 pt-1.5">
        {/* Karten-Pool */}
        <div className="rounded-md bg-white px-2 py-1">
          <p className="mb-0.5 text-center text-[7px] font-semibold text-foreground/60">
            Karten ({CARDS.length}/15)
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {CARDS.map((card) => (
              <span
                key={card}
                className="rounded-[6px] border border-border bg-white px-1.5 py-[2px] text-[7px] font-medium text-foreground"
              >
                {card}
              </span>
            ))}
          </div>
        </div>

        {/* Drop-Zonen */}
        <div className="grid flex-1 grid-cols-3 gap-1">
          <DropZone label="Lernen" labelClass="text-[#5a8a00]" bgClass="bg-[#f4f7e0]" />
          <DropZone label="Kreativ" labelClass="text-[#6b5cd9]" bgClass="bg-[#f1edff]" />
          <DropZone label="Unterhaltung" labelClass="text-primary" bgClass="bg-[#fdf3d8]" />
        </div>
      </div>
    </div>
  )
}

function DropZone({
  label,
  labelClass,
  bgClass,
}: {
  label: string
  labelClass: string
  bgClass: string
}) {
  return (
    <div
      className={`flex flex-col rounded-md border border-dashed border-foreground/20 ${bgClass} px-2 py-1.5`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[8px] font-extrabold ${labelClass}`}>{label}</span>
        <span className={`text-[10px] leading-none ${labelClass}`}>+</span>
      </div>
      <span className="mt-0.5 text-[6px] text-foreground/45">Ablegen per Drag &amp; Drop</span>
    </div>
  )
}
