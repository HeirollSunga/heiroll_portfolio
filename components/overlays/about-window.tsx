"use client"

import { useEffect, useState } from "react"
import { useRoom } from "@/components/room/room-provider"
import { OverlayFrame } from "@/components/overlays/overlay-frame"
import { collectibles } from "@/lib/data/collectibles"
import { profile } from "@/lib/data/profile"

export function AboutWindow() {
  const { activeOverlay, closeOverlay, focusedFigure } = useRoom()
  const open = activeOverlay === "about"
  const [selected, setSelected] = useState(0)
  const active = collectibles[selected]

  useEffect(() => {
    if (!focusedFigure) return
    const index = collectibles.findIndex((collectible) => collectible.id === focusedFigure)
    if (index >= 0) setSelected(index)
  }, [focusedFigure])

  return (
    <OverlayFrame open={open} onClose={closeOverlay} title="THE_SHELF.EXE" accent="var(--accent)">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-pixel text-base text-primary sm:text-lg">ABOUT ME</h2>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <h3 className="mt-6 border-b-2 border-dashed border-border pb-2 font-pixel text-[10px] tracking-wider text-accent">
          THE COLLECTION
        </h3>

        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {collectibles.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`flex flex-col items-center gap-1 border-2 p-2 transition-transform hover:-translate-y-1 ${
                selected === i ? "border-accent bg-accent text-accent-foreground" : "border-border bg-muted text-foreground"
              }`}
            >
              <span
                className="text-lg leading-none"
                style={{ color: selected === i ? "var(--accent-foreground)" : c.color }}
                aria-hidden
              >
                {c.name.slice(0, 1)}
              </span>
              <span className="text-[8px] leading-tight">{c.name}</span>
            </button>
          ))}
        </div>

        <div key={active.name} className="pixel-panel mt-4 animate-fade-in bg-muted p-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl leading-none" style={{ color: active.color }} aria-hidden>
              {active.name.slice(0, 1)}
            </span>
            <div>
              <h4 className="text-sm text-foreground">{active.name}</h4>
              <p className="text-[10px] text-accent">{active.category}</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{active.description}</p>
          <p className="mt-3 border-l-2 border-accent pl-3 text-[11px] italic leading-relaxed text-foreground/80">{active.quote}</p>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{active.connection}</p>
        </div>
      </div>
    </OverlayFrame>
  )
}
