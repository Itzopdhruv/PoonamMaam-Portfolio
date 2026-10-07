'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-8 py-20">
        {/* Elite Academic Layout */}
        <div className={`${mounted ? 'animate-fade-in' : 'opacity-0'}`}>

          {/* Header with Photo and Name Aligned */}
          <div className="flex items-start gap-8 mb-8 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            {/* Professional Photo - Aligned with name baseline */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-sm overflow-hidden border border-gray-300 shadow-sm">
                <Image
                  src="/poonam_rani.jpeg"
                  alt="Dr. Poonam Rani"
                  width={144}
                  height={144}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Name and Core Identity */}
            <div className="flex-1 pt-1">
              <h1 className="text-[2.75rem] font-serif font-bold leading-tight mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1c1c1c' }}>
                Dr. Poonam Rani
              </h1>
              <p className="text-lg font-medium mb-1" style={{ color: '#1c1c1c' }}>
                Associate Professor, Ph.D.
              </p>
              <p className="text-base mb-4" style={{ color: '#555' }}>
                Department of Computer Science & Engineering
              </p>
              <p className="text-base" style={{ color: '#555' }}>
                Netaji Subhas University of Technology, Delhi
              </p>
            </div>
          </div>

          {/* Professional Bio */}
          <div className="mb-8 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#1c1c1c' }}>
              Dr. Poonam Rani is an Associate Professor in the Department of Computer Science and Engineering at Netaji Subhas University of Technology (NSUT), New Delhi. Her research focuses on Artificial Intelligence, Blockchain Technology, Internet of Things (IoT), and Social Network Analysis.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#555' }}>
              With more than a decade of academic and research experience, she has authored over 50 peer-reviewed publications in reputed international journals and conferences. She has supervised doctoral scholars and led funded research initiatives in emerging technologies.
            </p>
          </div>

          {/* Academic Metrics - Numbers on top, labels below */}
          <div className="mb-8 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#1c1c1c' }}>14</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#555', letterSpacing: '0.05em' }}>h-index</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#1c1c1c' }}>50+</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#555', letterSpacing: '0.05em' }}>Publications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#1c1c1c' }}>500+</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#555', letterSpacing: '0.05em' }}>Citations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#1c1c1c' }}>20</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#555', letterSpacing: '0.05em' }}>Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: '#1c1c1c' }}>5</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#555', letterSpacing: '0.05em' }}>PhD Students</div>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="mb-8 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Research Interests</h2>
            <ul className="space-y-2 text-base" style={{ color: '#1c1c1c' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#555' }}>•</span>
                <span>Artificial Intelligence & Machine Learning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#555' }}>•</span>
                <span>Blockchain & Distributed Systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#555' }}>•</span>
                <span>Internet of Things</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#555' }}>•</span>
                <span>Social Network Analysis</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Contact</h2>
            <div className="space-y-2 text-base">
              <div>
                <span className="font-semibold" style={{ color: '#1c1c1c' }}>Email:</span>
                <span className="ml-2">
                  <a href="mailto:poonam@nsut.ac.in" className="hover:underline" style={{ color: '#1e3a5f' }}>
                    poonam@nsut.ac.in
                  </a>
                </span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#1c1c1c' }}>Office:</span>
                <span className="ml-2" style={{ color: '#555' }}>Department of CSE, NSUT Delhi</span>
              </div>
            </div>
          </div>

          {/* Academic Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en' },
              { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Poonam-Rani-10' },
              { name: 'ORCID', url: 'https://orcid.org/0000-0001-5866-238X' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-poonam-rani-98998423b/' },
              { name: 'DBLP', url: '#' }
            ].map((link, i, arr) => (
              <Fragment key={link.name}>
                <a href={link.url} className="hover:underline" style={{ color: '#1e3a5f' }}>
                  {link.name}
                </a>
                {i < arr.length - 1 && <span style={{ color: '#ccc' }}>•</span>}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${mounted ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
        <Link href="#about" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors">
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
