'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  from?: 'up' | 'left' | 'right' | 'scale'
}

const hidden = {
  up: 'opacity-0 translate-y-10',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  scale: 'opacity-0 scale-95',
}

export function Reveal({ children, delay = 0, className = '', from = 'up' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hidden[from]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
