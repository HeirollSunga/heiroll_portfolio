'use client'

import { useEffect, useRef } from 'react'
import { useRoom } from '@/components/room/room-provider'

interface OverlayFrameProps {
  open?: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
  // max width in tailwind (default readable)
  size?: 'sm' | 'md' | 'lg'
  // label for the close button
  closeLabel?: string
  accent?: string
  headerActions?: React.ReactNode
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
}

export function OverlayFrame({
  title,
  open = true,
  onClose,
  children,
  size = 'md',
  closeLabel = 'EXIT TO ROOM',
  accent = 'var(--primary)',
  headerActions,
}: OverlayFrameProps) {
  const { reducedMotion } = useRoom()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    // focus the panel for keyboard users
    panelRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close and return to room"
        onClick={onClose}
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={`pixel-panel scanlines relative flex max-h-[88dvh] w-full flex-col outline-none ${sizes[size]} ${
          reducedMotion ? 'animate-fade-in' : 'animate-crt-in'
        }`}
        style={{ borderColor: accent }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b-2 border-primary bg-secondary px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex gap-1" aria-hidden>
              <span className="h-3 w-3 bg-accent" />
              <span className="h-3 w-3 bg-warm" />
              <span className="h-3 w-3 bg-primary" />
            </span>
            <h2 className="font-pixel text-[10px] text-foreground sm:text-xs">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {headerActions}
            <button
              type="button"
              onClick={onClose}
              className="border-2 border-accent bg-accent/10 px-2 py-1 font-pixel text-[8px] text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:text-[10px]"
            >
              {closeLabel}
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="relative overflow-y-auto p-4 sm:p-6">{children}</div>
      </div>
    </div>
  )
}
