'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, DoorOpen } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import { PROFILE, PROFILE_LINKS } from '@/lib/profile'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#071a33] py-24 text-white md:py-32">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Get in touch</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Contact</h2>
            <p className="mt-4 text-blue-100/70">
              For research collaborations, Ph.D. supervision, invited talks and academic enquiries in Quantum Computing, AI,
              Blockchain, IoT and Social Network Analysis.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal delay={0}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-amber-300/50">
              <Mail className="h-7 w-7 text-amber-300" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-200/60">Email</p>
              <a href={`mailto:${PROFILE.email}`} className="mt-1 block break-all font-display text-xl font-semibold hover:text-amber-300">
                {PROFILE.email}
              </a>
              <button onClick={copyEmail} className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-blue-100/80 transition-colors hover:bg-white/10">
                {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-amber-300/50">
              <Phone className="h-7 w-7 text-amber-300" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-200/60">Office phone</p>
              <a href={PROFILE.phoneHref} className="mt-1 block font-display text-xl font-semibold hover:text-amber-300">
                {PROFILE.phone}
              </a>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200/60">
                <DoorOpen className="h-4 w-4" /> Office
              </p>
              <p className="mt-1 font-semibold">{PROFILE.office.room}</p>
              <p className="text-sm text-blue-100/70">Department of CSE</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-amber-300/50">
              <MapPin className="h-7 w-7 text-amber-300" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-200/60">Address</p>
              <div className="mt-1 space-y-0.5 text-sm text-blue-100/90">
                <p className="font-semibold text-white">{PROFILE.office.room}</p>
                {PROFILE.office.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              <a href={PROFILE.office.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:underline">
                Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-wrap gap-3">
            {PROFILE_LINKS.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-300"
              >
                {l.name}
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
