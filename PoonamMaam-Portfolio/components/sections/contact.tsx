'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Phone, Mail, MapPin, ExternalLink, Linkedin, Globe, BookOpen } from 'lucide-react'

const NAVY = '#0F4C81'
const TEAL = '#2CA6A4'

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-poonam-rani-98998423b/' },
    { icon: BookOpen, label: 'ORCID', href: 'https://orcid.org/0000-0001-5866-238X' },
    { icon: Globe, label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Poonam-Rani-10' },
    { icon: ExternalLink, label: 'NSUT Profile', href: 'https://www.nsut.ac.in/en/node/255' }
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* ── Left Column: Contact Text & Direct ──────────────── */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}>
              Contact Information
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ backgroundColor: NAVY }} />

            <p className="text-base text-gray-600 leading-relaxed mb-10">
              I welcome inquiries regarding research collaborations, academic speaking engagements,
              M.Tech/PhD supervision, and professional consulting in the areas of AI,
              Blockhain, IoT, and Social Network Analysis.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  <Mail className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Primary Email</p>
                  <a href="mailto:poonam.rani@nsut.ac.in" className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors">
                    poonam.rani@nsut.ac.in
                  </a>
                  <p className="text-sm text-gray-500 mt-1">For all academic and official inquiries</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  <Phone className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Office Phone</p>
                  <a href="tel:+911125000051" className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors">
                    011 - 25000051
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Office Hours: Mon-Fri, 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Location & Networks ────────────────── */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Location Card */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6" style={{ color: TEAL }} />
                <h3 className="text-xl font-bold" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
                  Office Location
                </h3>
              </div>
              <div className="pl-9 space-y-1 text-gray-700">
                <p className="font-bold text-gray-900">Department of Computer Science & Engineering</p>
                <p>Netaji Subhas University of Technology (NSUT)</p>
                <p>Sector 3, Dwarka</p>
                <p>New Delhi 110078, India</p>

                <a
                  href="https://maps.google.com/?q=NSUT+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold transition-opacity hover:opacity-80"
                  style={{ color: TEAL }}
                >
                  View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Professional Networks */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Professional Networks</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
                    >
                      <div className="p-1.5 bg-gray-50 rounded text-gray-500 group-hover:text-gray-900 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                        {link.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
