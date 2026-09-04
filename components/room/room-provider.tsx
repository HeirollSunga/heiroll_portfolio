'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { tracks, type Track } from '@/lib/data/music'
import type { OverlayKey } from '@/lib/data/hotspots'
import { getSynth } from '@/lib/audio/lofi-synth'

export type ActiveView = OverlayKey | 'poster' | null

interface MusicState {
  tracks: Track[]
  current: Track
  index: number
  isPlaying: boolean
  volume: number
  progress: number // seconds
  toggle: () => void
  play: () => void
  pause: () => void
  next: () => void
  prev: () => void
  select: (index: number) => void
  seek: (seconds: number) => void
  setVolume: (v: number) => void
}

interface RoomContextValue {
  entered: boolean
  enter: (withMusic: boolean) => void
  activeView: ActiveView
  /** Alias of activeView for overlay components. */
  activeOverlay: ActiveView
  focusedFigure: string | null
  focusedPoster: number | null
  openView: (view: OverlayKey) => void
  openPoster: (index: number) => void
  openAbout: (figureId?: string) => void
  close: () => void
  /** Alias of close for overlay components. */
  closeOverlay: () => void
  reducedMotion: boolean
  toggleReducedMotion: () => void
  toast: string | null
  showToast: (msg: string) => void
  music: MusicState
  /** Session-only custom poster images keyed by poster index. */
  posterOverrides: Record<number, string>
  setPosterOverride: (index: number, dataUrl: string) => void
  clearPosterOverride: (index: number) => void
}

const RoomContext = createContext<RoomContextValue | null>(null)

export function useRoom() {
  const ctx = useContext(RoomContext)
  if (!ctx) throw new Error('useRoom must be used within RoomProvider')
  return ctx
}

export function RoomProvider({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false)
  const [activeView, setActiveView] = useState<ActiveView>(null)
  const [focusedFigure, setFocusedFigure] = useState<string | null>(null)
  const [focusedPoster, setFocusedPoster] = useState<number | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [posterOverrides, setPosterOverrides] = useState<Record<number, string>>({})
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setPosterOverride = useCallback((idx: number, dataUrl: string) => {
    setPosterOverrides((prev) => ({ ...prev, [idx]: dataUrl }))
  }, [])

  const clearPosterOverride = useCallback((idx: number) => {
    setPosterOverrides((prev) => {
      const next = { ...prev }
      delete next[idx]
      return next
    })
  }, [])

  // Music state
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.6)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const current = tracks[index]

  // Respect the OS reduced-motion preference on first load.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const enter = useCallback((withMusic: boolean) => {
    setEntered(true)
    if (withMusic) {
      setIsPlaying(true)
      const el = audioRef.current
      if (el && el.src) el.play().catch(() => {})
    }
  }, [])

  const openView = useCallback((view: OverlayKey) => {
    setFocusedFigure(null)
    setFocusedPoster(null)
    setActiveView(view)
  }, [])

  const openAbout = useCallback((figureId?: string) => {
    setFocusedFigure(figureId ?? null)
    setActiveView('about')
  }, [])

  const openPoster = useCallback((idx: number) => {
    setFocusedPoster(idx)
    setActiveView('poster')
  }, [])

  const close = useCallback(() => {
    setActiveView(null)
    setFocusedFigure(null)
    setFocusedPoster(null)
  }, [])

  const toggleReducedMotion = useCallback(() => setReducedMotion((v) => !v), [])

  // --- Music controls ---
  const play = useCallback(() => {
    setIsPlaying(true)
    const el = audioRef.current
    if (el && el.src) el.play().catch(() => {})
  }, [])

  const pause = useCallback(() => {
    setIsPlaying(false)
    audioRef.current?.pause()
  }, [])

  const toggle = useCallback(() => {
    setIsPlaying((p) => {
      const nextVal = !p
      const el = audioRef.current
      if (el && el.src) {
        if (nextVal) el.play().catch(() => {})
        else el.pause()
      }
      return nextVal
    })
  }, [])

  const selectIndex = useCallback((i: number) => {
    setIndex(i)
    setProgress(0)
    setIsPlaying(true)
  }, [])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % tracks.length)
    setProgress(0)
    setIsPlaying(true)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + tracks.length) % tracks.length)
    setProgress(0)
    setIsPlaying(true)
  }, [])

  const seek = useCallback(
    (seconds: number) => {
      const clamped = Math.max(0, Math.min(seconds, current.duration))
      setProgress(clamped)
      const el = audioRef.current
      if (el && el.src) el.currentTime = clamped
    },
    [current.duration],
  )

  const setVolume = useCallback((v: number) => {
    setVolumeState(v)
    if (audioRef.current) audioRef.current.volume = v
  }, [])

  // Progress ticker. Uses the real <audio> time when a source is available,
  // otherwise simulates progression so the vinyl experience still feels alive.
  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => {
      setProgress((p) => {
        const el = audioRef.current
        if (el && el.src && !el.paused && el.currentTime > 0) {
          return el.currentTime
        }
        const nextP = p + 0.5
        if (nextP >= current.duration) {
          // advance to next track
          setIndex((i) => (i + 1) % tracks.length)
          return 0
        }
        return nextP
      })
    }, 500)
    return () => clearInterval(id)
  }, [isPlaying, current.duration])

  // Keep audio element volume in sync + load new source on track change.
  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.volume = volume
    if (current.audio) {
      el.src = current.audio
      if (isPlaying) el.play().catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // Drive the lofi synth when a track has no real audio file. This makes the
  // player produce actual sound in the browser instead of only simulating.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (current.audio) return // real file handled by the <audio> element
    const synth = getSynth()
    if (isPlaying) {
      synth.start(current.id)
    } else {
      synth.stop()
    }
    return () => synth.stop()
  }, [isPlaying, index, current.audio, current.id])

  // Live volume changes without restarting the loop.
  useEffect(() => {
    if (typeof window === 'undefined') return
    getSynth().setVolume(volume)
  }, [volume])

  const music: MusicState = useMemo(
    () => ({
      tracks,
      current,
      index,
      isPlaying,
      volume,
      progress,
      toggle,
      play,
      pause,
      next,
      prev,
      select: selectIndex,
      seek,
      setVolume,
    }),
    [
      current,
      index,
      isPlaying,
      volume,
      progress,
      toggle,
      play,
      pause,
      next,
      prev,
      selectIndex,
      seek,
      setVolume,
    ],
  )

  const value: RoomContextValue = {
    entered,
    enter,
    activeView,
    activeOverlay: activeView,
    focusedFigure,
    focusedPoster,
    openView,
    openPoster,
    openAbout,
    close,
    closeOverlay: close,
    reducedMotion,
    toggleReducedMotion,
    toast,
    showToast,
    music,
    posterOverrides,
    setPosterOverride,
    clearPosterOverride,
  }

  return (
    <RoomContext.Provider value={value}>
      {/* Single shared audio element for the whole room */}
      <audio ref={audioRef} preload="none" onEnded={next} />
      {children}
    </RoomContext.Provider>
  )
}
