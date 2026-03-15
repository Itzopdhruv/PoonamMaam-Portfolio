'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Brain, Blocks, Wifi, Network, Sparkles, BookOpen, ArrowRight } from 'lucide-react'

const ACCENT = '#0F4C81'
const TEAL = '#2CA6A4'

export default function ResearchAreasSection() {
  const { ref, isVisible } = useScrollAnimation()

  const areas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      subtitle: 'Machine Learning & Intelligent Systems',
      description:
        'Research focused on machine learning algorithms, deep neural networks, and AI-driven systems for healthcare diagnostics, security analytics, and intelligent automation.',
      technologies: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing'],
      publications: 12,
    },
    {
      icon: Blocks,
      title: 'Blockchain Technology',
      subtitle: 'Distributed Ledger & Security',
      description:
        'Developing blockchain-based solutions for secure healthcare systems, supply chain management, rumor detection, and cognitive radio networks.',
      technologies: ['Smart Contracts', 'Distributed Ledger Technology', 'Cryptography', 'Consensus Mechanisms'],
      publications: 8,
    },
    {
      icon: Wifi,
      title: 'Internet of Things',
      subtitle: 'Connected Systems & Edge Computing',
      description:
        'Designing IoT architectures for health monitoring, industrial applications, and smart city infrastructure with focus on security and operational efficiency.',
      technologies: ['Sensor Networks', 'Edge Computing', '5G Networks', 'Industrial IoT'],
      publications: 10,
    },
    {
      icon: Network,
      title: 'Social Network Analysis',
      subtitle: 'Graph Theory & Community Detection',
      description:
        'Analyzing social network structures using fuzzy graphs, community detection algorithms, and relationship prediction models for intelligent recommendation systems.',
      technologies: ['Graph Analysis', 'Fuzzy Logic', 'Link Prediction', 'Community Detection'],
      publications: 9,
    },
    {
      icon: Sparkles,
      title: 'Soft Computing',
      subtitle: 'Fuzzy Systems & Optimization',
      description:
        'Applying fuzzy logic, neural networks, and evolutionary algorithms to address complex optimization problems and develop intelligent decision-support systems.',
      technologies: ['Fuzzy Logic', 'Genetic Algorithms', 'Neuro-Fuzzy Systems', 'Evolutionary Optimization'],
      publications: 6,
    },
  ]

  return (
    <section
      id="research"
      className="relative py-20 md:py-28 bg-white"
      ref={ref}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>
            Academic Focus
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}
          >
            Research Interests
          </h2>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: ACCENT }} />
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Interdisciplinary research spanning artificial intelligence, secure distributed systems, connected
            technologies, and computational network analysis — with applications in healthcare, security, and
            intelligent infrastructure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${index === 4 ? 'lg:col-start-2' : ''}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div
                  className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col"
                  style={{ borderLeft: `3px solid ${ACCENT}` }}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <div
                        className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                        style={{ backgroundColor: '#eef3f9' }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300 group-hover:text-teal-600"
                          style={{ color: ACCENT }}
                        />
                      </div>
                      {/* Publication count */}
                      <div className="text-right">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Selected Publications</p>
                        <p className="text-xl font-bold" style={{ color: ACCENT }}>
                          {area.publications}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-blue-800"
                      style={{ color: '#1a1a1a', fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {area.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-medium mb-4 uppercase tracking-wider" style={{ color: TEAL }}>
                      {area.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="px-6 pb-4 mt-auto">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {area.technologies.join(' • ')}
                    </p>
                  </div>

                  {/* View Publications link */}
                  <div className="px-6 pb-5">
                    <a
                      href="#publications"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 group/link"
                      style={{ color: ACCENT }}
                    >
                      <span className="group-hover/link:underline">View Publications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Statistics */}
        <div
          className={`mt-14 pt-10 border-t border-gray-200 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '35+', label: 'Peer-Reviewed Publications' },
              { value: '5', label: 'Major Research Areas' },
              { value: '10+', label: 'Years of Academic Experience' },
              { value: '15+', label: 'International Collaborations' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold mb-1" style={{ color: ACCENT }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
