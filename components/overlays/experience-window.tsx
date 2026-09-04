'use client'

import { OverlayFrame } from './overlay-frame'
import { useRoom } from '@/components/room/room-provider'
import { experience } from '@/src/data/experience'

export function ExperienceWindow() {
  const { activeView, close } = useRoom()

  return (
    <OverlayFrame
      open={activeView === 'experience'}
      onClose={close}
      title="C:\\EXPERIENCE.EXE"
      size="lg"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex items-center justify-between border-b-2 border-dashed border-border pb-3">
          <div>
            <p className="font-pixel text-[9px] text-primary">SYSTEM LOG</p>
            <h3 className="mt-1 font-pixel text-sm text-foreground">EXPERIENCE</h3>
          </div>
          <span className="font-pixel text-[9px] text-muted-foreground">2 ENTRIES</span>
        </div>

        <div className="flex flex-col gap-5">
          {experience.map((entry) => (
            <article key={`${entry.company}-${entry.position}`} className="border-2 border-border bg-muted/50 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-pixel text-[11px] text-primary">{entry.position}</h4>
                <span className="text-[10px] text-muted-foreground">{entry.date}</span>
              </div>
              <p className="mt-2 text-xs text-neon-pink">{entry.company}</p>
              <p className="mt-3 text-[11px] leading-relaxed text-foreground/90">{entry.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="border-2 border-border bg-secondary/50 px-2 py-1 text-[10px] text-secondary-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </OverlayFrame>
  )
}
