'use client'

import { useRoom } from './room-provider'
import { Hotspot } from './hotspot'
import { Dust } from './atmosphere'
import {
  hotspots,
  figureHotspots,
  posterHotspots,
  type HotspotDef,
  type OverlayKey,
} from '@/lib/data/hotspots'
import { posters } from '@/lib/data/posters'

const EGG_MESSAGES: Record<string, string> = {
  'egg-chair': 'Currently occupied. This is where most of the coding happens.',
  'egg-pc': 'The RGB makes the code compile ~20% faster. Probably.',
  'egg-cat': 'You pet the cat. He purrs in 8-bit. +10 happiness.',
}

export function RoomScene() {
  const { openView, openAbout, openPoster, reducedMotion, showToast, music } = useRoom()

  const handleHotspot = (h: HotspotDef) => {
    switch (h.action) {
      case 'projects':
      case 'experience':
      case 'resume':
      case 'music':
      case 'contact':
      case 'settings':
        openView(h.action)
        break
      case 'about':
        openAbout()
        break
      default:
        showToast(EGG_MESSAGES[h.action] ?? '...')
    }
  }

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-5 overflow-auto bg-background p-4 lg:flex-row lg:gap-8 lg:p-6">
      {/* ambient room glow behind the scene */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 35% 45%, rgba(56,214,239,0.08), transparent 45%), radial-gradient(circle at 70% 75%, rgba(255,92,200,0.06), transparent 40%)',
        }}
      />

      {/* Square scene, sized to fit the viewport */}
      <div
        className="relative aspect-square w-[min(100vw,100dvh)] shadow-2xl animate-crt-in lg:w-[min(calc(100vw-18rem),100dvh)]"
      >
        <img
          src="/assets/room/bedroom.png"
          alt="A cozy pixel-art gamer bedroom at night with a glowing gaming desk, red chair, vinyl player, collectible shelf, and a rainy city window."
          className="pixelated absolute inset-0 h-full w-full select-none object-cover"
          draggable={false}
        />

        {/* --- Ambient animated lighting layers --- */}
        {/* monitor cyan glow */}
        <div
          aria-hidden
          className={`pointer-events-none absolute ${reducedMotion ? '' : 'animate-pulse-glow'}`}
          style={{
            left: '24%',
            top: '38%',
            width: '27%',
            height: '16%',
            background:
              'radial-gradient(ellipse at center, rgba(56,214,239,0.45), transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* PC RGB pulse */}
        <div
          aria-hidden
          className={`pointer-events-none absolute ${reducedMotion ? '' : 'animate-pulse-glow'}`}
          style={{
            left: '7%',
            top: '48%',
            width: '11%',
            height: '15%',
            background:
              'radial-gradient(ellipse at center, rgba(255,92,200,0.4), transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* desk lamp warm flicker */}
        <div
          aria-hidden
          className={`pointer-events-none absolute ${reducedMotion ? '' : 'animate-flicker'}`}
          style={{
            left: '1%',
            top: '35%',
            width: '16%',
            height: '20%',
            background:
              'radial-gradient(circle at 40% 30%, rgba(255,177,92,0.35), transparent 65%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* spinning vinyl on the turntable while music plays */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: '70.5%', top: '69%', width: '9%', height: '9%' }}
        >
          <div
            className={`h-full w-full rounded-full ${
              music.isPlaying && !reducedMotion ? 'animate-vinyl' : ''
            }`}
            style={{
              background:
                'radial-gradient(circle, #0a0a12 34%, #2a2348 35%, #14121f 44%, #2a2348 45%, #14121f 60%, #ff495e 61%, #14121f 63%)',
              opacity: 0.9,
            }}
          />
        </div>

        {/* Atmosphere */}
        <Dust reducedMotion={reducedMotion} />

        {/* subtle CRT scanlines over the whole room */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 4px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* --- Poster frames (personalization) --- */}
        {posterHotspots.map((p) => {
          const poster = posters[p.index]
          if (!poster) return null
          return (
            <Hotspot
              key={poster.id}
              x={p.x}
              y={p.y}
              w={p.w}
              h={p.h}
              label={`Frame ${p.index + 1}`}
              hint="Click to view poster"
              tip="bottom"
              reducedMotion={reducedMotion}
              onClick={() => openPoster(p.index)}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[#070a14] opacity-45"
                style={{
                  clipPath: p.clipPath,
                  transform: 'translate(1px, 1px)',
                }}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-[#30283f]"
                style={{ clipPath: p.clipPath }}
              />
              {poster.image ? (
                <img
                  src={poster.image || '/placeholder.svg'}
                  alt={poster.title}
                  className="pixelated absolute inset-0 h-full w-full object-cover opacity-90"
                  style={{
                    clipPath:
                      'polygon(7% 25%, 93% 4%, 93% 76%, 7% 96%)',
                    filter: 'brightness(0.78) contrast(0.94) saturate(0.78)',
                  }}
                  draggable={false}
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center bg-muted/60 text-center font-pixel text-[8px] leading-tight text-muted-foreground">
                  + ADD
                </span>
              )}
            </Hotspot>
          )
        })}

        {/* Keep the desk lamp in front of the wall-mounted poster. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-21 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/room/bedroom.png')",
            clipPath:
              'polygon(4% 40%, 4% 37%, 5% 34%, 9% 37%, 12% 40%, 12% 46%, 9% 47%, 8% 51%, 4% 50%)',
          }}
        />

        {/* --- Collectible figures (About) --- */}
        {figureHotspots.map((figure) => (
          <Hotspot
            key={figure.id}
            x={figure.x}
            y={figure.y}
            w={figure.w}
            h={figure.h}
            label={figure.id.toUpperCase()}
            hint="Click to open About"
            tip="bottom"
            reducedMotion={reducedMotion}
            bob
            onClick={() => openAbout(figure.id)}
          />
        ))}

        {/* --- Main interactive objects --- */}
        {hotspots.filter((h) => !['chair', 'pc-tower', 'cat'].includes(h.id)).map((h) => (
          <Hotspot
            key={h.id}
            x={h.x}
            y={h.y}
            w={h.w}
            h={h.h}
            label={h.label}
            hint={h.hint}
            tip={h.tip}
            reducedMotion={reducedMotion}
            onClick={() => handleHotspot(h)}
          />
        ))}
      </div>

      <nav
        aria-label="Portfolio navigation"
        className="pixel-panel scanlines relative z-30 w-full max-w-sm p-4 lg:w-56 lg:shrink-0"
      >
        <div className="mb-3 border-b-2 border-dashed border-border pb-2">
          <p className="font-pixel text-[9px] text-primary">Welcome to my Room</p>
          <p className="mt-1 text-[10px] text-muted-foreground">This is Heiroll Sunga's Portfolio Click around and Interact with the Room or Select a destination</p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {[
            ['projects', 'PROJECTS'],
            ['experience', 'EXPERIENCE'],
            ['resume', 'RESUME'],
            ['music', 'MUSIC'],
            ['about', 'ABOUT'],
            ['contact', 'CONTACT'],
          ].map(([view, label]) => (
            <button
              key={view}
              type="button"
              onClick={() => (view === 'about' ? openAbout() : openView(view as OverlayKey))}
              className="border-2 border-border bg-secondary/60 px-2 py-2 text-left font-pixel text-[9px] text-foreground transition-colors hover:border-primary hover:bg-primary/15 hover:text-primary"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
