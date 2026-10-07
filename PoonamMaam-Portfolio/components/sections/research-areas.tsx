'use client'

import { Atom, Brain, Blocks, Wifi, Share2, Waves, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import { RESEARCH_AREAS } from '@/lib/profile'

const STYLE: Record<string, { icon: LucideIcon; from: string; to: string; span: string }> = {
  quantum: { icon: Atom, from: '#7c3aed', to: '#2563eb', span: 'md:col-span-2 md:row-span-2' },
  ai: { icon: Brain, from: '#db2777', to: '#f59e0b', span: '' },
  blockchain: { icon: Blocks, from: '#0d9488', to: '#2563eb', span: '' },
  iot: { icon: Wifi, from: '#ea580c', to: '#eab308', span: '' },
  sna: { icon: Share2, from: '#2563eb', to: '#06b6d4', span: '' },
  soft: { icon: Waves, from: '#16a34a', to: '#0d9488', span: 'md:col-span-4' },
}

function SpotlightCard({ area, big }: { area: (typeof RESEARCH_AREAS)[number]; big: boolean }) {
  const s = STYLE[area.key]
  const Icon = s.icon

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      onPointerMove={onMove}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-transform duration-500 hover:-translate-y-1"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--x) var(--y), ${s.from}40, transparent 60%)` }}
      />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl transition-transform duration-700 group-hover:scale-150" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }} />

      <div className="relative flex h-full flex-col">
        <div
          className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]"
          style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-200/60">{area.subtitle}</p>
        <h3 className={`mt-1 font-display font-bold text-white ${big ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{area.title}</h3>
        <p className={`mt-3 leading-relaxed text-blue-100/70 ${big ? 'text-base' : 'text-sm'}`}>{area.description}</p>

        {big && 'work' in area && (
          <ul className="mt-6 space-y-2.5">
            {(area.work as string[]).map((w) => (
              <li key={w} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-blue-100/80 transition-colors hover:border-violet-400/40 hover:bg-white/10">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                {w}
              </li>
            ))}
          </ul>
        )}

        {big && (
          <div className="relative mt-auto flex justify-center pt-8" aria-hidden="true">
            {/* Orbiting "qubits" */}
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 rounded-full border border-violet-400/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-blue-400/30 animate-spin-reverse" />
              <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_40px_rgba(124,58,237,0.7)] animate-pulse" />
              <div className="absolute inset-0 animate-spin-slow">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_#fcd34d]" />
              </div>
              <div className="absolute inset-4 animate-spin-reverse">
                <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-teal-300 shadow-[0_0_12px_#5eead4]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ResearchAreasSection() {
  return (
    <section id="research" className="relative overflow-hidden bg-[#0b2545] py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Research</p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Areas of Research</h2>
            <p className="mt-4 text-blue-100/70">
              From quantum machine learning to blockchain-secured IoT, her work spans foundational methods and real-world
              applications in healthcare, security and social networks.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-4">
          {RESEARCH_AREAS.map((a, i) => (
            <Reveal key={a.key} delay={i * 80} className={STYLE[a.key].span}>
              <SpotlightCard area={a} big={a.key === 'quantum'} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
