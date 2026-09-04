'use client'

import { useEffect, useState } from 'react'
import { useRoom } from './room-provider'

function useClock() {
  const [time, setTime] = useState('01:37 AM')
  useEffect(() => {
    const fmt = () => {
      const d = new Date()
      let h = d.getHours()
      const m = d.getMinutes().toString().padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12
      if (h === 0) h = 12
      setTime(`${h.toString().padStart(2, '0')}:${m} ${ampm}`)
    }
    fmt()
    const id = setInterval(fmt, 10_000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function EnterScreen() {
  const { enter } = useRoom()
  const [withMusic, setWithMusic] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const time = useClock()

  const handleEnter = () => {
    setLeaving(true)
    setTimeout(() => enter(withMusic), 450)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-6 text-center transition-opacity duration-500 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* soft vignette + monitor-glow ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(56,214,239,0.10), transparent 55%)',
        }}
      />

      <div className="relative flex flex-col items-center gap-8 animate-fade-in">
        <p className="font-pixel text-4xl text-primary text-shadow-pixel sm:text-6xl">
          {time}
        </p>

        <div className="flex flex-col items-center gap-3">
          <h1 className="font-pixel text-sm leading-relaxed text-foreground sm:text-lg">
            Heiroll's Room.
          </h1>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            It&apos;s late. The city is asleep, the monitors are still glowing.
            Come in and look around — everything here is clickable.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setWithMusic((v) => !v)}
          aria-pressed={withMusic}
          className="flex items-center gap-3 border-2 border-border bg-card px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary"
        >
          <span
            className={`inline-block h-4 w-4 border-2 ${
              withMusic
                ? 'border-primary bg-primary'
                : 'border-muted-foreground bg-transparent'
            }`}
            aria-hidden
          />
          <span className="font-pixel">Turn on room music</span>
        </button>

        <button
          type="button"
          onClick={handleEnter}
          className="group relative border-2 border-primary bg-primary/10 px-8 py-4 font-pixel text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          style={{ boxShadow: '0 0 24px rgba(56,214,239,0.35)' }}
        >
          [ ENTER ROOM ]
        </button>

        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
          Best experienced with sound on
        </p>
      </div>
    </div>
  )
}
