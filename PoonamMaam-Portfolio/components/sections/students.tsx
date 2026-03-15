'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Users, BookMarked, ExternalLink, ArrowUpRight } from 'lucide-react'

const NAVY = '#0F4C81'
const TEAL = '#2CA6A4'

// ─── Data ────────────────────────────────────────────────────────────────────

type Scholar = {
  name: string;
  topic: string;
  year: string;
  status: string;
  current?: string;
};

const phdScholars: Scholar[] = [
  {
    name: 'Tushar Dahiya',
    topic: 'Blockchain-based Secure Data Sharing in IoT Healthcare Networks',
    year: '2021–Present',
    status: 'Ongoing'
  },
  {
    name: 'Monika Singh',
    topic: 'Deep Learning Approaches for Fake News Detection on Social Media',
    year: '2020–Present',
    status: 'Ongoing'
  },
  {
    name: 'Astha Tripathi',
    topic: 'Fuzzy Graph Models for Social Network Community Analysis',
    year: '2022–Present',
    status: 'Ongoing'
  },
  {
    name: 'Shrestha Tripathi',
    topic: 'Predictive Modeling in Healthcare utilizing IoT Sensor Networks',
    year: '2018–Present',
    status: 'Ongoing'
  },
  {
    name: 'Saurabhi Chowdhary',
    topic: 'Optimal Deep Learning Approaches in 5G Networks',
    year: '2017–Present',
    status: 'Ongoing'
  }
]
const mtechProjects = [
  {
    year: 2024,
    projects: [
      'Secure Blockchain Framework for IoT Healthcare',
      'Deep Learning Based Intrusion Detection System in Wireless Networks'
    ]
  },
  {
    year: 2023,
    projects: [
      'Social Network Rumor Detection Using Adaptive Fuzzy Systems',
      'Stock Price Prediction using Reinforcement Learning Algorithms'
    ]
  },
  {
    year: 2022,
    projects: [
      'IoT-based Health Monitoring System with Distributed Ledger Security',
      'Opportunistic IoT Routing Optimization with Blockchain'
    ]
  }
]

const btechProjects = [
  {
    category: 'Recent Final Year Projects',
    projects: [
      'AI-Based Network Intrusion Detection Dashboard',
      'Decentralized Voting System via Ethereum Smart Contracts',
      'Real-time Fake News Classification Extension',
      'IoT Health Monitoring Wearable Prototype'
    ]
  }
]

const profileLinks = [
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Poonam-Rani-10' },
  { name: 'NSUT Faculty Page', url: 'https://www.nsut.ac.in/en/node/255' },
  { name: 'ORCID', url: 'https://orcid.org/0000-0001-5866-238X' }
]

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function StudentsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="students" className="relative py-20 md:py-28 bg-white" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Mentorship</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}>
            Students & Supervision
          </h2>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: NAVY }} />
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Committed to nurturing the next generation of researchers and technology leaders through dedicated mentorship, rigorous academic projects, and frontier research.
          </p>
        </div>

        {/* ── Supervision Stats ──────────────────────────────── */}
        <div className={`mb-14 grid grid-cols-3 gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '5', label: 'PhD Students Supervised' },
            { value: '12', label: 'M.Tech Theses' },
            { value: '20', label: 'Undergraduate Projects' },
          ].map((s, i) => (
            <div key={i} className="text-center px-4 py-5 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-3xl font-bold mb-1" style={{ color: NAVY }}>{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── PhD Scholars ───────────────────────────────────── */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
              PhD Scholars
            </h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-4">
            {phdScholars.map((student, i) => (
              <div key={i} className="pl-4 py-1" style={{ borderLeft: `2px solid ${student.status === 'Ongoing' ? TEAL : '#d1d5db'}` }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-base font-bold text-gray-900 leading-tight">{student.name}</p>
                  <span
                    className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded flex-shrink-0"
                    style={
                      student.status === 'Ongoing'
                        ? { backgroundColor: '#ecfdf5', color: '#065f46' }
                        : { backgroundColor: '#f3f4f6', color: '#6b7280' }
                    }
                  >
                    {student.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-0.5">
                  <span className="font-semibold text-gray-700">{student.status === 'Ongoing' ? 'Research:' : 'Thesis:'}</span> {student.topic}
                </p>
                {student.status === 'Ongoing' ? (
                  <p className="text-xs text-gray-400">Since {student.year.split('–')[0]}</p>
                ) : (
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-medium">{student.year}</span>
                    {student.current && <span>Now at {student.current}</span>}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── M.Tech Theses ──────────────────────────────────── */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
              M.Tech Thesis Supervision
            </h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-6">
            {mtechProjects.map((group, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-gray-700 mb-2">{group.year}</p>
                <ul className="space-y-2">
                  {group.projects.map((proj, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── B.Tech Projects ────────────────────────────────── */}
        <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
              B.Tech Final Year Projects
            </h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-6">
            {btechProjects.map((group, i) => (
              <div key={i}>
                <ul className="space-y-2">
                  {group.projects.map((proj, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        {/* ── Professional Profiles ──────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-4">Professional Profiles</p>
          <div className="flex flex-wrap gap-3">
            {profileLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all"
              >
                {link.name}
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Research Opportunities CTA ──────────────────────── */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
            <h4 className="text-lg font-bold mb-2" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
              Interested in Research Opportunities?
            </h4>
            <p className="text-sm text-gray-600 mb-5 max-w-2xl leading-relaxed">
              Motivated students interested in AI, Blockchain, IoT, or Social Network Analysis are encouraged to contact me regarding research collaborations or thesis supervision.
            </p>
            <a
              href="mailto:poonam.rani@nsut.ac.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL }}
            >
              Contact for Research Opportunities
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
