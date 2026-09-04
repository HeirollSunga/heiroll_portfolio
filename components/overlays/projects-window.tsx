'use client'

import { useState } from 'react'
import { ExternalLink, Folder } from 'lucide-react'
import { OverlayFrame } from './overlay-frame'
import { projects } from '@/lib/data/projects'
import { useRoom } from '@/components/room/room-provider'

export function ProjectsWindow() {
  const { close } = useRoom()
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? '')
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0]

  return (
    <OverlayFrame title="C:\PROJECTS.EXE" onClose={close} size="lg">
      <div className="grid gap-4 md:grid-cols-[190px_1fr]">
        {/* Sidebar: project "cartridges" */}
        <nav
          aria-label="Project list"
          className="flex gap-2 overflow-x-auto border-2 border-border bg-background/60 p-2 md:flex-col md:overflow-visible"
        >
          {projects.map((p) => {
            const active = p.id === selected.id
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedId(p.id)}
                aria-current={active}
                className={`flex min-w-[140px] items-center gap-2 border-2 px-2 py-2 text-left transition-colors md:min-w-0 ${
                  active
                    ? 'border-primary bg-primary/15'
                    : 'border-transparent bg-secondary/40 hover:border-border'
                }`}
              >
                <Folder
                  className={`h-4 w-4 shrink-0 ${active ? 'text-primary' : 'text-muted-foreground'}`}
                  aria-hidden
                />
                <span
                  className={`font-pixel text-[9px] leading-tight ${
                    active ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {p.title}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Detail pane */}
        <article className="min-w-0">
          {selected.image && (
            <div className="mb-4 border-2 border-border bg-background">
              <img
                src={selected.image || '/placeholder.svg'}
                alt={`${selected.title} screenshot`}
                className="pixelated h-44 w-full object-cover sm:h-56"
                draggable={false}
              />
            </div>
          )}

          <h3 className="font-pixel text-sm text-primary text-shadow-pixel">
            {selected.title}
          </h3>
          {selected.featured && (
            <span className="mt-2 inline-block border-2 border-[var(--accent-note)] bg-[var(--accent-note)]/15 px-2 py-1 font-pixel text-[9px] text-[var(--accent-note)]">
              FEATURED
            </span>
          )}
          <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
            {selected.type}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {selected.description}
          </p>

          <div className="mt-4">
            <p className="font-pixel text-[9px] text-neon-pink">TECH</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {selected.technologies.map((t) => (
                <li
                  key={t}
                  className="border-2 border-border bg-secondary/50 px-2 py-1 text-[11px] text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {selected.features && selected.features.length > 0 && (
            <div className="mt-4">
              <p className="font-pixel text-[9px] text-neon-pink">FEATURES</p>
              <ul className="mt-2 space-y-1">
                {selected.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="text-primary" aria-hidden>
                      ▸
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            {selected.liveDemo && (
              <a
                href={selected.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-primary bg-primary/10 px-3 py-2 font-pixel text-[9px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                LIVE DEMO →
              </a>
            )}
          </div>
        </article>
      </div>
    </OverlayFrame>
  )
}
