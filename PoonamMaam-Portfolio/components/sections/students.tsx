'use client'

import { ArrowUpRight, FileText, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'
import { PHD_SCHOLARS, PROFILE } from '@/lib/profile'

const ACCENTS = ['#2563eb', '#db2777', '#7c3aed', '#0d9488', '#ea580c', '#4f46e5']

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

export default function StudentsSection() {
  return (
    <section id="students" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Mentorship</p>
              <h2 className="font-display text-4xl font-bold text-[#0b2545] sm:text-5xl">Ph.D. Scholars</h2>
              <p className="mt-4 text-slate-600">
                Doctoral researchers currently working under her supervision in the Department of CSE, NSUT.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-[#0b2545] px-6 py-4 text-white">
              <GraduationCap className="h-8 w-8 text-amber-300" />
              <div>
                <p className="font-display text-3xl font-bold">{PHD_SCHOLARS.length}</p>
                <p className="text-xs text-blue-100/70">Ph.D. scholars</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PHD_SCHOLARS.map((s, i) => {
            const c = ACCENTS[i % ACCENTS.length]
            return (
              <Reveal key={s.name} delay={i * 90}>
                <article
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ ['--c' as string]: c }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: c }} />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-[2.5]" style={{ background: c }} />

                  <div className="relative">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-bold text-white shadow-lg transition-transform duration-500 group-hover:rotate-6" style={{ background: c }}>
                          {initials(s.name)}
                        </div>
                        <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0b2545] text-[10px] font-bold text-amber-300">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#0b2545]">{s.name}</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: c }}>
                          {s.area}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">Research: </span>
                      {s.topic}
                    </p>

                    {s.work.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                        {s.work.map((w) => (
                          <li key={w} className="flex gap-2 text-xs leading-relaxed text-slate-500">
                            <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: c }} />
                            {w}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Student projects + CTA */}
        <Reveal delay={200}>
          <div className="mt-16 grid gap-6 rounded-3xl bg-gradient-to-br from-[#0b2545] via-[#13315c] to-[#0b2545] p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h3 className="font-display text-2xl font-bold">B.Tech. &amp; M.Tech. Projects</h3>
              <p className="mt-3 leading-relaxed text-blue-100/80">
                She has guided several B.Tech. and M.Tech. students in their major projects, many of which have been
                published with her: deep learning for skin cancer and Alzheimer&apos;s detection, drug–target interaction
                prediction, image compression, blockchain-based fraud detection, stock prediction with reinforcement learning,
                and speech emotion recognition.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold">Interested in research with Dr. Rani?</p>
              <p className="mt-1 text-sm text-blue-100/70">Students interested in Quantum Computing, AI, Blockchain, IoT or SNA can get in touch.</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-5 py-2.5 text-sm font-semibold text-[#0b2545] transition-transform hover:-translate-y-0.5"
              >
                {PROFILE.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
