'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Trophy, BookOpen, Mic2, Presentation, GraduationCap, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import FullPhoto from '@/components/fx/full-photo'
import { HIGHLIGHTS } from '@/lib/profile'

const ICONS: Record<string, LucideIcon> = {
  Award: Trophy,
  Publication: BookOpen,
  'Invited Talk': Mic2,
  'International Conference': Presentation,
  'IEEE Symposium': Presentation,
  'Faculty Development': GraduationCap,
}

export default function AchievementsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      setProgress(Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="highlights" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Recognition &amp; Recent Work</p>
            <h2 className="font-display text-4xl font-bold text-[#0b2545] sm:text-5xl">Highlights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">Awards, invited talks, conferences and landmark publications, latest first.</p>
          </div>
        </Reveal>

        <div ref={trackRef} className="relative pl-12 sm:pl-16">
          {/* Rail */}
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-slate-200 sm:left-[21px]" />
          <div
            className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-teal-500 shadow-[0_0_12px_rgba(251,146,60,0.6)] sm:left-[21px]"
            style={{ height: `${progress * 100}%` }}
          />

          <div className="space-y-6">
            {HIGHLIGHTS.map((h) => {
              const Icon = ICONS[h.category] ?? Trophy
              return (
                <div key={h.title} className="relative">
                  <div className="absolute -left-12 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#0b2545] text-amber-300 shadow-lg sm:-left-16 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4" />
                  </div>

                  <Reveal from="right">
                    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:flex-row">
                      {h.image && (
                        <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:min-h-[240px] sm:w-80">
                          <FullPhoto src={h.image} alt={h.title} sizes="(min-width: 640px) 288px, 90vw" />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-800">{h.year}</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{h.category}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold leading-snug text-[#0b2545]">{h.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.description}</p>
                        {h.location && (
                          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <MapPin className="h-3.5 w-3.5" />
                            {h.location}
                          </p>
                        )}
                      </div>
                    </article>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
