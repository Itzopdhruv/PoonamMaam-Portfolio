'use client'

import { useEffect, useState } from 'react'
import { useInView } from './reveal'

export function CountUp({ value, suffix = '', duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}
