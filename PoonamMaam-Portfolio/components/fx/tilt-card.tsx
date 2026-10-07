'use client'

import { useRef, type ReactNode } from 'react'

// 3D tilt that follows the pointer, with a moving glare highlight.
export default function TiltCard({ children, className = '', max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType === 'touch') return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div style={{ perspective: '1200px' }} className={className}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="tilt-card relative h-full w-full transition-transform duration-300 ease-out motion-reduce:transform-none"
        style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
      >
        {children}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.tilt-card:hover>&]:opacity-100"
          style={{ background: 'radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.25), transparent 55%)' }}
        />
      </div>
    </div>
  )
}
