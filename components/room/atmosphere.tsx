'use client'

// Deterministic pseudo-random so SSR and client output match (no hydration warnings).
function seeded(i: number, salt = 1) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}


const DUST = Array.from({ length: 14 }, (_, i) => ({
  left: seeded(i, 5) * 100,
  top: seeded(i, 6) * 100,
  delay: seeded(i, 7) * 6,
  dur: 5 + seeded(i, 8) * 5,
  size: 1 + Math.round(seeded(i, 9) * 2),
}))

export function Dust({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return null
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      // floats within the warm desk-lamp light on the left
      style={{ left: '2%', top: '36%', width: '18%', height: '30%' }}
    >
      {DUST.map((d, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-warm/70"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animation: `float-dust ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
