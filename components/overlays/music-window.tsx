"use client"

import Image from "next/image"
import { useRoom } from "@/components/room/room-provider"
import { OverlayFrame } from "@/components/overlays/overlay-frame"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

function fmt(sec: number) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function MusicWindow() {
  const { activeView, close, music, reducedMotion } = useRoom()
  const open = activeView === "music"
  const { current, isPlaying, progress, volume, tracks, index } = music

  return (
    <OverlayFrame open={open} onClose={close} title="turntable" accent="var(--accent-vinyl)">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:flex-row">
        {/* Turntable */}
        <div className="flex flex-col items-center gap-4 md:w-64">
          <div className="relative aspect-square w-48 sm:w-56">
            {/* vinyl disc */}
            <div
              className="absolute inset-0 rounded-full bg-[#120f22]"
              style={{
                animation:
                  isPlaying && !reducedMotion ? "spin 4s linear infinite" : "none",
                boxShadow: "0 0 0 4px #241d3f, 0 0 24px rgba(0,0,0,0.6)",
              }}
            >
              {/* grooves */}
              <div className="absolute inset-3 rounded-full border border-[#2c2450]" />
              <div className="absolute inset-6 rounded-full border border-[#2c2450]" />
              <div className="absolute inset-10 rounded-full border border-[#2c2450]" />
              {/* label / cover */}
              <div className="absolute inset-[38%] overflow-hidden rounded-full">
                <Image
                  src={current.cover || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover [image-rendering:pixelated]"
                  sizes="80px"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a0814]" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-foreground">{current.title}</p>
            <p className="text-[11px] text-[var(--accent-vinyl)]">{current.artist}</p>
          </div>
        </div>

        {/* Controls + playlist */}
        <div className="flex flex-1 flex-col">
          {/* progress */}
          <div className="flex items-center gap-2">
            <span className="w-9 text-right text-[10px] text-muted-foreground">{fmt(progress)}</span>
            <input
              type="range"
              min={0}
              max={current.duration}
              value={progress}
              onChange={(e) => music.seek(Number(e.target.value))}
              className="pixel-range h-2 flex-1"
              aria-label="Seek"
            />
            <span className="w-9 text-[10px] text-muted-foreground">{fmt(current.duration)}</span>
          </div>

          {/* transport */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={music.prev}
              className="pixel-border bg-muted p-2.5 text-foreground transition-transform hover:-translate-y-0.5"
              aria-label="Previous track"
            >
              <SkipBack className="h-4 w-4" />
            </button>
            <button
              onClick={music.toggle}
              className="pixel-border bg-[var(--accent-vinyl)] p-3 text-[#e6e5eb] transition-transform hover:-translate-y-0.5"
              aria-label={isPlaying ? "Pause" : "Play"}
              aria-pressed={isPlaying}
              title={isPlaying ? "Pause playback" : "Play playback"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button
              onClick={music.next}
              className="pixel-border bg-muted p-2.5 text-foreground transition-transform hover:-translate-y-0.5"
              aria-label="Next track"
            >
              <SkipForward className="h-4 w-4" />
            </button>
          </div>

          {/* volume */}
          <div className="mt-4 flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => music.setVolume(Number(e.target.value))}
              className="pixel-range h-2 flex-1"
              aria-label="Volume"
            />
          </div>

          {/* playlist */}
          <ul className="mt-5 flex flex-col gap-1.5">
            {tracks.map((t, i) => (
              <li key={t.id}>
                <button
                  onClick={() => music.select(i)}
                  className={`pixel-border flex w-full items-center gap-3 px-2.5 py-2 text-left transition-colors ${
                    i === index
                      ? "bg-[var(--accent-vinyl)] text-[#1a1533]"
                      : "bg-muted text-foreground hover:bg-[#2a2350]"
                  }`}
                >
                  <span className="text-[10px] opacity-70">{(i + 1).toString().padStart(2, "0")}</span>
                  <span className="flex-1 truncate text-[11px]">{t.title}</span>
                  <span className="truncate text-[10px] opacity-70">{t.artist}</span>
                  {i === index && isPlaying && (
                    <span className="flex items-end gap-0.5" aria-hidden>
                      <span className="eq-bar" />
                      <span className="eq-bar" style={{ animationDelay: "0.15s" }} />
                      <span className="eq-bar" style={{ animationDelay: "0.3s" }} />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OverlayFrame>
  )
}
