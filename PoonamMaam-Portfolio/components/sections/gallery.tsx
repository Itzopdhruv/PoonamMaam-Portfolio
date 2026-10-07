'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Hand, Camera } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import FullPhoto from '@/components/fx/full-photo'
import { GALLERY, type GalleryPhoto } from '@/lib/profile'


// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (d: number) => void }) {
  const photo = GALLERY[index]
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onStep])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030b17]/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
    >
      <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20" aria-label="Close">
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onStep(-1) }}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onStep(1) }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
        aria-label="Next photo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure className="flex max-h-full w-full max-w-5xl flex-col items-center px-14 sm:px-20" onClick={(e) => e.stopPropagation()}>
        <div key={photo.src} className="relative h-[70vh] w-full animate-zoom-in">
          <Image src={photo.src} alt={photo.alt} fill sizes="90vw" quality={90} className="object-contain" />
        </div>
        <figcaption className="mt-5 text-center text-white">
          <p className="font-display text-lg">{photo.caption}</p>
          <p className="text-sm text-blue-200/70">{photo.event}</p>
          <p className="mt-2 text-xs text-white/40">
            {index + 1} / {GALLERY.length}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

// ─── Coverflow carousel ──────────────────────────────────────────────────────

function Coverflow({ onOpen }: { onOpen: (i: number) => void }) {
  const n = GALLERY.length
  const [current, setCurrent] = useState(0)
  const [spacing, setSpacing] = useState(300)
  const hover = useRef(false)
  const drag = useRef<{ x: number; moved: number } | null>(null)

  const go = useCallback((d: number) => setCurrent((c) => (c + d + n) % n), [n])

  useEffect(() => {
    const fit = () => setSpacing(window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 230 : 320)
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => !hover.current && go(1), 3500)
    return () => clearInterval(id)
  }, [go])

  const photo = GALLERY[current]

  return (
    <div
      className="relative"
      onPointerEnter={() => (hover.current = true)}
      onPointerLeave={() => { hover.current = false; drag.current = null }}
    >
      <div
        className="relative mx-auto h-[220px] w-full touch-pan-y select-none sm:h-[340px] lg:h-[440px]"
        style={{ perspective: '1400px' }}
        onPointerDown={(e) => (drag.current = { x: e.clientX, moved: 0 })}
        onPointerMove={(e) => {
          if (drag.current) drag.current.moved = e.clientX - drag.current.x
        }}
        onPointerUp={() => {
          const m = drag.current?.moved ?? 0
          if (Math.abs(m) > 50) go(m < 0 ? 1 : -1)
        }}
      >
        {GALLERY.map((p, i) => {
          let d = i - current
          if (d > n / 2) d -= n
          if (d < -n / 2) d += n
          const ad = Math.abs(d)
          if (ad > 4) return null
          const isCenter = d === 0
          return (
            <button
              key={p.src}
              onClick={() => {
                if (Math.abs(drag.current?.moved ?? 0) > 6) return
                if (isCenter) onOpen(i)
                else go(d)
              }}
              className="group absolute left-1/2 top-1/2 aspect-[16/10] w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b2545] shadow-2xl shadow-black/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[480px] lg:w-[640px]"
              style={{
                transform: `translate(-50%, -50%) translateX(${d * spacing}px) translateZ(${-ad * 180}px) rotateY(${d === 0 ? 0 : d > 0 ? -38 : 38}deg)`,
                zIndex: 50 - ad,
                opacity: ad > 3 ? 0 : 1,
                pointerEvents: ad > 3 ? 'none' : 'auto',
              }}
              aria-label={isCenter ? `Open photo: ${p.caption}` : `Show photo: ${p.caption}`}
              tabIndex={ad > 1 ? -1 : 0}
            >
              <FullPhoto src={p.src} alt={p.alt} sizes="(min-width: 1024px) 640px, (min-width: 640px) 480px, 280px" />
              <div className="pointer-events-none absolute inset-0 bg-[#030b17] transition-opacity duration-700" style={{ opacity: isCenter ? 0 : Math.min(0.25 + ad * 0.15, 0.7) }} />
            </button>
          )
        })}

        <button onClick={() => go(-1)} className="absolute left-2 top-1/2 z-[60] -translate-y-1/2 rounded-full border border-white/20 bg-[#071a33]/70 p-3 text-white backdrop-blur transition hover:bg-amber-400 hover:text-[#071a33] sm:left-6" aria-label="Previous photo">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => go(1)} className="absolute right-2 top-1/2 z-[60] -translate-y-1/2 rounded-full border border-white/20 bg-[#071a33]/70 p-3 text-white backdrop-blur transition hover:bg-amber-400 hover:text-[#071a33] sm:right-6" aria-label="Next photo">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Caption of the centre photo — kept outside the photo so nothing is covered */}
      <div key={photo.src} className="mt-6 animate-fade-in px-4 text-center">
        <p className="font-display text-lg font-semibold text-white sm:text-2xl">{photo.caption}</p>
        <p className="text-sm text-blue-200/70">{photo.event}</p>
      </div>

      {/* Progress */}
      <div className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-1.5 px-4" aria-hidden="true">
        {GALLERY.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setCurrent(i)}
            tabIndex={-1}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-amber-400' : 'w-1.5 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
      </div>
          </div>
  )
}

// ─── Marquee rows ────────────────────────────────────────────────────────────

function MarqueeRow({ photos, reverse, onOpen }: { photos: { p: GalleryPhoto; i: number }[]; reverse?: boolean; onOpen: (i: number) => void }) {
  const loop = [...photos, ...photos]
  return (
    <div className="group/row relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover/row:[animation-play-state:paused] motion-reduce:animate-none`}>
        {loop.map(({ p, i }, k) => (
          <button
            key={k}
            onClick={() => onOpen(i)}
            aria-hidden={k >= photos.length}
            tabIndex={k >= photos.length ? -1 : 0}
            className="group relative shrink-0 overflow-hidden rounded-xl border border-white/10 transition-all duration-500 [--mh:150px] hover:z-10 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 sm:[--mh:200px]"
            style={{ height: 'var(--mh)', width: `calc(var(--mh) * ${(p.w / p.h).toFixed(4)})` }}
          >
            <Image src={p.src} alt={p.alt} fill sizes="400px" className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 text-left transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm font-semibold text-white">{p.caption}</p>
              <p className="text-[11px] text-white/70">{p.event}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function GallerySection() {
  const [open, setOpen] = useState<number | null>(null)
  const step = useCallback((d: number) => setOpen((v) => (v === null ? v : (v + d + GALLERY.length) % GALLERY.length)), [])
  const close = useCallback(() => setOpen(null), [])

  const indexed = GALLERY.map((p, i) => ({ p, i }))
  const rowA = indexed.filter((_, k) => k % 2 === 0)
  const rowB = indexed.filter((_, k) => k % 2 === 1)

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#071a33] py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Camera className="h-4 w-4" /> Moments
            </p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">In the Field</h2>
            <p className="mt-4 text-blue-100/70">
              Research awards, IEEE TENSYMP 2024 and the five-day FDP on NLP &amp; Generative AI at NSUT.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-blue-200/50">
              <Hand className="h-3.5 w-3.5" /> Swipe or use the arrows · tap the centre photo to view it full screen
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal from="scale">
        <Coverflow onOpen={setOpen} />
      </Reveal>

      <div className="relative mt-16 space-y-4">
        <MarqueeRow photos={rowA} onOpen={setOpen} />
        <MarqueeRow photos={rowB} reverse onOpen={setOpen} />
      </div>

      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </section>
  )
}
