'use client'

import { useEffect, useRef } from 'react'

// Animated node graph behind the hero — a nod to her work on social
// networks, IoT and blockchain. Nodes drift, link when close, and are
// pulled toward the cursor.
export default function NetworkCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    type Node = { x: number; y: number; vx: number; vy: number; r: number; gold: boolean }
    let nodes: Node[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((w * h) / 14000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        gold: Math.random() < 0.18,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const d = Math.hypot(dx, dy)
        if (d < 180 && d > 1) {
          n.vx += (dx / d) * 0.012
          n.vy += (dy / d) * 0.012
        }
        n.vx *= 0.992
        n.vy *= 0.992
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(148, 197, 255, ${(1 - d / 130) * 0.28})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const md = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y)
        if (md < 180) {
          ctx.strokeStyle = `rgba(233, 162, 59, ${(1 - md / 180) * 0.6})`
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.gold ? 'rgba(233, 162, 59, 0.95)' : 'rgba(191, 219, 254, 0.85)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}
