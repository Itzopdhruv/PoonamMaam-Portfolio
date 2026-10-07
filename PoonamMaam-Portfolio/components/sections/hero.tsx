'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown, Mail, Sparkles, Award, Quote } from 'lucide-react'
import NetworkCanvas from '@/components/fx/network-canvas'
import TiltCard from '@/components/fx/tilt-card'
import { CountUp } from '@/components/fx/count-up'
import { PROFILE, PROFILE_LINKS, RESEARCH_AREAS, STATS } from '@/lib/profile'

const ROTATING = RESEARCH_AREAS.map((a) => a.title)

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-grid overflow-hidden align-bottom h-[1.25em]">
      {ROTATING.map((w, idx) => (
        <span
          key={w}
          className={`col-start-1 row-start-1 whitespace-nowrap bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            idx === i ? 'translate-y-0 opacity-100' : idx === (i - 1 + ROTATING.length) % ROTATING.length ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const enter = `transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` })

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#071a33] text-white">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/30 blur-[120px] animate-drift" />
        <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-amber-500/20 blur-[120px] animate-drift [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-teal-500/20 blur-[110px] animate-drift [animation-delay:-12s]" />
        <NetworkCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#071a33_95%)]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 pb-44 pt-28 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-40">
        {/* Text */}
        <div>
          <div className={enter} style={delay(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              {PROFILE.title} · CSE · {PROFILE.universityShort} New Delhi
            </span>
          </div>

          <h1 className={`mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl ${enter}`} style={delay(100)}>
            Dr. Poonam{' '}
            <span className="relative inline-block">
              Rani
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                <path d="M2 9C50 3 150 1 198 7" stroke="url(#u)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                <defs>
                  <linearGradient id="u" x1="0" x2="200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className={`mt-8 text-xl font-light text-blue-100/90 sm:text-2xl ${enter}`} style={delay(200)}>
            Researching <RotatingWord />
          </p>

          <p className={`mt-6 max-w-xl text-base leading-relaxed text-blue-100/70 ${enter}`} style={delay(300)}>
            {PROFILE.title}, {PROFILE.department}, {PROFILE.university}. Ph.D. in Computer Engineering from the
            University of Delhi, with more than 18 years of teaching and research experience.
          </p>

          <div className={`mt-9 flex flex-wrap gap-3 ${enter}`} style={delay(400)}>
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-6 py-3 text-sm font-semibold text-[#071a33] shadow-lg shadow-amber-500/25 transition-transform hover:-translate-y-0.5"
            >
              Explore Research
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {PROFILE.email}
            </a>
          </div>

          <div className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm ${enter}`} style={delay(500)}>
            {PROFILE_LINKS.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-200/70 underline-offset-4 transition-colors hover:text-amber-300 hover:underline">
                {l.name}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className={`relative mx-auto w-full max-w-xl lg:max-w-[600px] ${enter}`} style={delay(250)}>
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#fbbf24,#2ca6a4,#3b82f6,#fb923c,#fbbf24)] opacity-60 blur-2xl animate-spin-slow" />
          <TiltCard className="aspect-[1600/1072]" max={10}>
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-black/50">
              <Image
                src="/gallery/hero-podium.webp"
                alt="Dr. Poonam Rani, Associate Professor at NSUT, speaking at the podium"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </TiltCard>

          {/* Floating badges */}
          <div className="absolute -left-8 -top-6 hidden animate-float rounded-2xl border border-white/15 bg-[#071a33]/80 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-300" />
              <div>
                <p className="text-sm font-semibold">Senior Member</p>
                <p className="text-xs text-blue-100/70">IEEE</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-8 hidden animate-float rounded-2xl border border-white/15 bg-[#071a33]/80 px-4 py-3 shadow-xl backdrop-blur-md [animation-delay:-2s] sm:block">
            <p className="text-2xl font-bold text-amber-300">800+</p>
            <p className="text-xs text-blue-100/70">Citations · Google Scholar</p>
          </div>
          <div className="absolute -bottom-8 left-8 hidden animate-float rounded-2xl border border-white/15 bg-[#071a33]/80 px-4 py-3 shadow-xl backdrop-blur-md [animation-delay:-4s] sm:block">
            <div className="flex items-center gap-2 text-sm">
              <Quote className="h-4 w-4 text-teal-300" />
              Quantum · AI · Blockchain · IoT
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-white/[0.03] backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 px-2 sm:px-6 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="py-4 text-center sm:py-5">
              <p className="font-display text-2xl font-bold text-white sm:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-blue-200/60 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
