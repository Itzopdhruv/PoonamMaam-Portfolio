'use client'

import Image from 'next/image'
import { GraduationCap, Briefcase, BadgeCheck, MapPin, Landmark, Users, HeartHandshake, Mic2 } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import TiltCard from '@/components/fx/tilt-card'
import { ACADEMIC_SERVICE, MEMBERSHIPS, PROFILE, ROLES } from '@/lib/profile'

const FACTS = [
  { icon: GraduationCap, label: 'Ph.D.', value: 'Computer Engineering, University of Delhi' },
  { icon: Briefcase, label: 'Experience', value: '18+ years of teaching & research' },
  { icon: BadgeCheck, label: 'Membership', value: 'Senior Member IEEE · IETE · ISTE' },
  { icon: MapPin, label: 'Office', value: `${PROFILE.office.room}, CSE, NSUT` },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Portrait */}
          <Reveal from="left">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 opacity-70" />
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border-2 border-dashed border-[#0b2545]/30" />
              <TiltCard className="aspect-[1044/1600]" max={8}>
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-2xl">
                  <Image src="/gallery/portrait.webp" alt="Portrait of Dr. Poonam Rani" fill quality={90} sizes="(min-width: 1024px) 30vw, 80vw" className="object-cover object-top" />
                </div>
              </TiltCard>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#0b2545] px-5 py-4 text-white shadow-xl animate-float">
                <p className="font-display text-3xl font-bold text-amber-300">18+</p>
                <p className="text-xs text-blue-100/80">Years in academia</p>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">About</p>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#0b2545] sm:text-5xl">
                Educator, researcher <span className="text-amber-500">&amp;</span> mentor
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  <strong className="text-slate-900">{PROFILE.name}</strong> is an Associate Professor in the Department of Computer
                  Science and Engineering at Netaji Subhas University of Technology (NSUT), Main Campus, Dwarka, New Delhi. She
                  received her Ph.D. in Computer Engineering from the University of Delhi and has more than 18 years of teaching
                  and research experience.
                </p>
                <p>
                  Her research interests include Quantum Computing, Blockchain, the Internet of Things, Social Network Analysis,
                  Soft Computing and Machine Learning. She has published more than 60 papers in reputed international journals,
                  including SCIE-indexed journals, and in international Scopus-indexed conferences and book chapters. Several of
                  her papers have received commendable research awards.
                </p>
                <p>
                  She is regularly invited as a Faculty Resource Person, Session Chair, Reviewer and TPC member for FDPs,
                  conferences and journals. She has guided several B.Tech. and M.Tech. major projects and currently teaches and
                  supervises Ph.D. scholars in the CSE department of NSUT.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={150 + i * 80}>
                  <div className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
                    <div className="rounded-xl bg-[#0b2545] p-2.5 text-amber-300 transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{f.label}</p>
                      <p className="text-sm font-medium text-slate-800">{f.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Service */}
        <div id="service" className="mt-28 scroll-mt-24">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Leadership &amp; Service</p>
              <h3 className="font-display text-3xl font-bold text-[#0b2545] sm:text-4xl">Beyond the classroom</h3>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal delay={0} className="lg:row-span-2">
              <div className="h-full rounded-3xl bg-gradient-to-br from-[#0b2545] to-[#13315c] p-7 text-white shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <Landmark className="h-6 w-6 text-amber-300" />
                  <h4 className="font-display text-xl font-semibold">Institutional Roles at NSUT</h4>
                </div>
                <ul className="space-y-3">
                  {ROLES.map((r) => (
                    <li key={r} className="flex gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm transition-colors hover:bg-white/10">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <Users className="h-6 w-6 text-teal-600" />
                  <h4 className="font-display text-xl font-semibold text-[#0b2545]">Professional Memberships</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {MEMBERSHIPS.map((m) => (
                    <span key={m} className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800 transition-transform hover:scale-105">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Mic2 className="h-6 w-6 text-blue-600" />
                  <h4 className="font-display text-xl font-semibold text-[#0b2545]">Academic Service</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {ACADEMIC_SERVICE.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-blue-500">▹</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-full rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-amber-50 p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <HeartHandshake className="h-6 w-6 text-rose-500 animate-heartbeat" />
                  <h4 className="font-display text-xl font-semibold text-[#0b2545]">Social Commitment</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  A regular blood donor, she has donated blood several times for social welfare.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
