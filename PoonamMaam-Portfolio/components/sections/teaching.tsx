'use client'

import { Brain, Lightbulb, Network, Blocks, Server, BookOpen, GraduationCap, Users, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/fx/reveal'

const COURSES: { name: string; icon: LucideIcon; topics: string[] }[] = [
  { name: 'Machine Learning', icon: Brain, topics: ['Supervised Learning', 'Neural Networks', 'Deep Learning'] },
  { name: 'Artificial Intelligence', icon: Lightbulb, topics: ['Search', 'Knowledge Representation', 'NLP Fundamentals'] },
  { name: 'Social Network Analysis', icon: Network, topics: ['Graph Theory', 'Community Detection', 'Link Prediction'] },
  { name: 'Blockchain Technology', icon: Blocks, topics: ['Smart Contracts', 'Cryptography', 'Consensus'] },
  { name: 'Distributed Systems', icon: Server, topics: ['Consensus Protocols', 'Fault Tolerance', 'CAP Theorem'] },
]

const LEVELS = [
  { icon: BookOpen, title: 'B.Tech.', text: 'Core and elective courses, and supervision of major projects.' },
  { icon: Users, title: 'M.Tech.', text: 'Advanced courses and supervision of M.Tech. major projects and theses.' },
  { icon: GraduationCap, title: 'Ph.D.', text: 'Doctoral coursework and supervision of Ph.D. scholars in CSE, NSUT.' },
]

export default function TeachingSection() {
  return (
    <section id="teaching" className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Teaching</p>
              <h2 className="font-display text-4xl font-bold text-[#0b2545] sm:text-5xl">Teaching &amp; Philosophy</h2>
            </Reveal>
            <Reveal delay={100}>
              <blockquote className="relative mt-8 rounded-3xl bg-white p-8 shadow-sm">
                <span className="absolute -top-6 left-6 font-display text-8xl leading-none text-amber-300">&ldquo;</span>
                <p className="relative font-display text-lg italic leading-relaxed text-slate-700">
                  Teaching is not only about delivering knowledge but about nurturing curiosity, critical thinking and
                  innovation, balancing strong theoretical foundations with hands-on, research-driven learning.
                </p>
              </blockquote>
            </Reveal>
            <div className="mt-8 space-y-3">
              {LEVELS.map((l, i) => (
                <Reveal key={l.title} delay={150 + i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:translate-x-1 hover:border-teal-300">
                    <div className="rounded-xl bg-teal-50 p-2.5 text-teal-700">
                      <l.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0b2545]">{l.title}</p>
                      <p className="text-sm text-slate-600">{l.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {COURSES.map((c, i) => (
              <Reveal key={c.name} delay={i * 80} className={i === 0 ? 'sm:col-span-2' : ''}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#0b2545] hover:bg-[#0b2545] hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700 transition-colors group-hover:bg-white/10 group-hover:text-amber-300">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0b2545] transition-colors group-hover:text-white">{c.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors group-hover:bg-white/10 group-hover:text-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
