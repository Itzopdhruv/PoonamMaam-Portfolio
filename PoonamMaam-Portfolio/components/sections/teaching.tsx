'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  BookOpen, Users, Award, GraduationCap, Lightbulb,
  Target, Code, Database, Brain, Network, FileText, ExternalLink
} from 'lucide-react'

const NAVY = '#0F4C81'
const TEAL = '#2CA6A4'

// ─── Data ────────────────────────────────────────────────────────────────────

const ugCourses = [
  {
    code: 'CSE201',
    name: 'Data Structures & Algorithms',
    semester: 'Even Semester',
    students: '~120 per year',
    icon: Code,
    topics: ['Arrays & Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting Algorithms'],
  },
  {
    code: 'CSE301',
    name: 'Database Management Systems',
    semester: 'Odd Semester',
    students: '~100 per year',
    icon: Database,
    topics: ['SQL & Query Optimization', 'Normalization', 'Transaction Management', 'NoSQL Databases'],
  },
  {
    code: 'CSE210',
    name: 'Object Oriented Programming',
    semester: 'Odd Semester',
    students: '~110 per year',
    icon: Code,
    topics: ['OOP Principles', 'Design Patterns', 'Java & C++', 'Software Design'],
  },
]

const pgCourses = [
  {
    code: 'CSE504',
    name: 'Machine Learning',
    semester: 'Even Semester',
    students: '~40 per year',
    icon: Brain,
    topics: ['Supervised Learning', 'Neural Networks', 'Deep Learning', 'Reinforcement Learning'],
  },
  {
    code: 'CSE502',
    name: 'Artificial Intelligence',
    semester: 'Odd Semester',
    students: '~45 per year',
    icon: Lightbulb,
    topics: ['Search Algorithms', 'Knowledge Representation', 'Expert Systems', 'NLP Fundamentals'],
  },
  {
    code: 'CSE510',
    name: 'Social Network Analysis',
    semester: 'Even Semester',
    students: '~35 per year',
    icon: Network,
    topics: ['Graph Theory', 'Community Detection', 'Centrality Measures', 'Link Prediction'],
  },
  {
    code: 'CSE515',
    name: 'Distributed Systems',
    semester: 'Odd Semester',
    students: '~38 per year',
    icon: Target,
    topics: ['Consensus Protocols', 'CAP Theorem', 'Fault Tolerance', 'Blockchain Applications'],
  },
  {
    code: 'CSE612',
    name: 'Blockchain Technology',
    semester: 'Even Semester',
    students: '~45 per year',
    icon: Code,
    topics: ['Smart Contracts', 'Cryptography', 'Consensus Algorithms', 'Ethereum & Web3'],
  },
]



// ─── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({ course }: { course: typeof pgCourses[0] }) {
  const Icon = course.icon
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      style={{ borderLeft: `3px solid ${NAVY}` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#eef3f9' }}
        >
          <Icon className="w-5 h-5" style={{ color: NAVY }} />
        </div>
        <span className="text-xs font-bold tracking-wider" style={{ color: TEAL }}>{course.code}</span>
      </div>

      <h4 className="text-sm font-bold mb-1 leading-snug" style={{ color: '#1a1a1a' }}>{course.name}</h4>

      <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500 mb-3">
        <span>{course.semester}</span>
        <span className="text-gray-300">·</span>
        <span>{course.students}</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {course.topics.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: '#f0f4f8', color: '#4b5e7a' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function TeachingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="teaching" className="relative py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}>
            Teaching & Mentorship
          </h2>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: NAVY }} />
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Dedicated to advancing computer science education through rigorous teaching, research mentorship, and collaborative student development across undergraduate and postgraduate programmes.
          </p>
        </div>

        {/* ── Teaching Stats ─────────────────────────────────── */}
        <div className={`mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: BookOpen, value: '10+', label: 'Years Teaching' },
            { icon: Users, value: '500+', label: 'Students Mentored' },
            { icon: GraduationCap, value: '7', label: 'Courses Developed' },
            { icon: Award, value: '10+', label: 'Theses Supervised' },
          ].map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: '#eef3f9' }}>
                  <Icon className="w-4 h-4" style={{ color: NAVY }} />
                </div>
                <p className="text-2xl font-bold" style={{ color: NAVY }}>{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            )
          })}
        </div>

        {/* ── Teaching Philosophy ────────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote
            className="pl-5 py-1 text-gray-700 leading-relaxed text-base italic"
            style={{ borderLeft: `3px solid ${TEAL}` }}
          >
            <p className="mb-2">
              "My teaching philosophy focuses on bridging theoretical foundations with practical applications.
              I encourage students to develop strong analytical thinking and problem-solving skills through
              project-based learning, collaborative exploration, and exposure to current research problems."
            </p>
            <footer className="text-sm not-italic font-semibold text-gray-500">— Teaching Philosophy</footer>
          </blockquote>
        </div>

        <div className="border-t border-gray-200 mb-10" />

        {/* ── Courses ──────────────────────────── */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-base font-bold uppercase tracking-wider" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
              Courses
            </h3>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">{pgCourses.length} courses</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pgCourses.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
        </div>



      </div>
    </section>
  )
}
