'use client'

import { useState } from 'react'

interface HotspotProps {
  x: number
  y: number
  w: number
  h: number
  label: string
  hint?: string
  tip?: 'top' | 'bottom' | 'left' | 'right'
  onClick: () => void
  // If true, animate a subtle bob on hover (used for figures).
  bob?: boolean
  reducedMotion?: boolean
  // Optional overlay content rendered inside the box (e.g. poster image).
  children?: React.ReactNode
  showTooltip?: boolean
}

const tipPos: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}

export function Hotspot({
  x,
  y,
  w,
  h,
  label,
  hint,
  tip = 'top',
  onClick,
  bob,
  reducedMotion,
  children,
  showTooltip = true,
}: HotspotProps) {
  const [hover, setHover] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      aria-label={hint ? `${label}. ${hint}` : label}
      className="group absolute z-20 focus:outline-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${w}%`,
        height: `${h}%`,
      }}
    >
      {/* Glow / outline highlight on hover + focus */}
      <span
        aria-hidden
        className={`absolute inset-0 transition-all duration-150 ${
          hover ? 'opacity-100' : 'opacity-0'
        } ${bob && hover && !reducedMotion ? 'animate-bob' : ''}`}
        style={{
          boxShadow:
            '0 0 0 2px var(--primary), 0 0 14px 2px rgba(56,214,239,0.6)',
          background:
            'linear-gradient(rgba(56,214,239,0.14), rgba(255,92,200,0.10))',
        }}
      />

      {children}

      {showTooltip && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute z-30 whitespace-nowrap border-2 border-primary bg-popover px-2 py-1 text-left transition-all duration-150 ${
            tipPos[tip]
          } ${hover ? 'opacity-100' : 'translate-y-0 opacity-0'}`}
          style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.6)' }}
        >
          <span className="block font-pixel text-[10px] leading-tight text-primary">
            {label}
          </span>
          {hint && (
            <span className="mt-1 block text-[11px] leading-tight text-muted-foreground">
              {hint}
            </span>
          )}
        </span>
      )}
    </button>
  )
}
