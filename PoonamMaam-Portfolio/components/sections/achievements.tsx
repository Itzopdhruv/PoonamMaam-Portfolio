'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Trophy, MapPin, Calendar, ExternalLink } from 'lucide-react'

const NAVY = '#0F4C81'
const TEAL = '#2CA6A4'

// ─── Data ────────────────────────────────────────────────────────────────────

const achievements = [
  {
    year: '2023',
    title: 'Distinguished Speaker - Global Summit on Earth Science and Climate Change',
    description: 'Invited as Distinguished Speaker at the 2nd Global Summit on Advances in Earth Science and Climate Change (Adv. ESCC 2023) in London, UK. Presented research on "Blockchain-based IoT enabled health-monitoring system". Organized by Peers Alley Media, Canada.',
    category: 'International Recognition',
    highlight: true,
    location: 'London, UK',
    date: 'September 14-15, 2023'
  },
  {
    year: '2022',
    title: 'SCIE Publication Excellence',
    description: 'Published multiple high-impact papers in SCIE indexed journals including Soft Computing (IF: 3.732), Journal of Ambient Intelligence (IF: 3.662), and The Journal of Supercomputing (IF: 2.557)',
    category: 'Research Publications',
    highlight: false
  },
  {
    year: '2021',
    title: 'High-Impact Research Contributions',
    description: 'Published groundbreaking research in Computers & Electrical Engineering (IF: 4.152), Cognitive Systems Research (IF: 4.541), and multiple Wireless and Telecommunication journals',
    category: 'Research Excellence',
    highlight: false
  },
  {
    year: '2019–2022',
    title: 'International Conference Contributions',
    description: 'Presented research at prestigious conferences including Springer ICICC, IEEE COMITCon, and International Conference on Data Analytics and Management',
    category: 'Conference Presentations',
    highlight: false
  }
]

const stats = [
  { value: '4+', label: 'Major Awards' },
  { value: '33+', label: 'Publications' },
  { value: '12+', label: 'SCIE Indexed' },
  { value: '10+', label: 'Years Research' },
]

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="achievements" className="relative py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}>
            Achievements & Awards
          </h2>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: NAVY }} />
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Recognition for excellence in research, teaching, and contributions to the global academic community.
          </p>
        </div>

        {/* ── Stats Bar ──────────────────────────────────────── */}
        <div className={`mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 py-5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <p className="text-3xl font-bold mb-1" style={{ color: NAVY }}>{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Achievements List ──────────────────────────────── */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="pl-5 py-2 relative"
                style={{ borderLeft: `2px solid ${item.highlight ? TEAL : '#d1d5db'}` }}
              >
                {/* Header: Category & Year */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">
                    {item.year}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {item.category}
                  </span>
                  {item.highlight && (
                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider" style={{ color: TEAL }}>
                      <Trophy className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Location / Date (If any) */}
                {item.location && item.date && (
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
