'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { BookOpen, FlaskConical, Users } from 'lucide-react'

const ACCENT = '#0F4C81'
const TEAL = '#2CA6A4'

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  const highlights = [
    {
      icon: FlaskConical,
      title: 'Research Areas',
      description:
        'Artificial Intelligence, Blockchain Systems, Internet of Things (IoT), Social Network Analysis, and Soft Computing — with applications across healthcare, security, and distributed systems.',
    },
    {
      icon: BookOpen,
      title: 'Publications & Conferences',
      description:
        'Author of 50+ peer-reviewed papers published in reputed international journals and conferences including IEEE, Springer, and Elsevier.',
    },
    {
      icon: Users,
      title: 'Academic Service',
      description:
        'Serves as reviewer for international journals, mentors postgraduate and doctoral research students, and actively contributes to academic collaborations and institutional initiatives.',
    },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28 bg-gray-50" ref={ref}>
      {/* Top / Bottom dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>
            Faculty Profile
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}
          >
            Academic Profile &amp; Research Contributions
          </h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: ACCENT }} />
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-14 items-start mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Biography */}
          <div className="space-y-5">
            <p className="text-base text-gray-700 leading-relaxed">
              Dr. Poonam Rani is an Associate Professor in the{' '}
              <span className="font-semibold text-gray-900">
                Department of Computer Science and Engineering
              </span>{' '}
              at{' '}
              <span className="font-semibold text-gray-900">
                Netaji Subhas University of Technology (NSUT), New Delhi
              </span>
              . Her research focuses on Artificial Intelligence, Blockchain Technology, Internet of Things (IoT),
              and Social Network Analysis.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              With more than a decade of academic and research experience, she has authored over{' '}
              <span className="font-semibold text-gray-900">50+ peer-reviewed publications</span> in reputed
              international journals and conferences including IEEE, Springer, and Elsevier. She has supervised
              doctoral scholars and led funded research initiatives in emerging technologies.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Her work aims to bridge the gap between theoretical foundations and practical applications,
              contributing solutions that address real-world challenges in healthcare, cybersecurity, and
              network intelligence.
            </p>

            {/* Clean stats row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200">
              {[
                { value: '50+', label: 'Publications' },
                { value: '500+', label: 'Citations' },
                { value: '14', label: 'h-index' },
                { value: '10+', label: 'Yrs. Experience' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div>
            <blockquote
              className="border-l-4 pl-6 py-2"
              style={{ borderLeftColor: TEAL }}
            >
              <p
                className="text-lg italic text-gray-700 leading-relaxed mb-5"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                &ldquo;Research is the systematic pursuit of knowledge, driven by curiosity and the desire to solve
                real-world challenges through innovation.&rdquo;
              </p>
              <footer className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">Dr. Poonam Rani</span>
                <br />
                Associate Professor, Department of CSE, NSUT Delhi
              </footer>
            </blockquote>

            {/* Academic links in quote block */}
            <div className="mt-6 pl-6 flex flex-wrap gap-4 text-sm">
              {[
                { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en' },
                { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Poonam-Rani-10' },
                { name: 'ORCID', url: 'https://orcid.org/0000-0001-5866-238X' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-poonam-rani-98998423b/' },
                { name: 'DBLP', url: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="font-medium hover:underline transition-colors"
                  style={{ color: ACCENT }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Academic highlight cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ borderTop: `3px solid ${ACCENT}` }}
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#eef3f9' }}
                >
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#1a1a1a', fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Teaching Philosophy */}
        <div
          className={`mt-14 p-8 md:p-10 bg-white border border-gray-200 rounded-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: '#1a1a1a', fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Teaching Philosophy
          </h3>
          <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: TEAL }} />
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
            Teaching is not only about delivering knowledge but also about nurturing curiosity, critical thinking, and
            innovation. My teaching philosophy emphasizes a strong balance between theoretical foundations and practical
            applications. Through research-driven learning, collaborative projects, and hands-on experimentation, I aim
            to prepare students to address complex technological challenges and contribute meaningfully to society.
          </p>
        </div>
      </div>
    </section>
  )
}
