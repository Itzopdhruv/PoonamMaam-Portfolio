'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, GraduationCap, ChevronUp } from 'lucide-react'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ContactSection from '@/components/sections/contact'
import PublicationsSection from '@/components/sections/publications'
import TeachingSection from '@/components/sections/teaching'
import StudentsSection from '@/components/sections/students'
import AchievementsSection from '@/components/sections/achievements'
import Footer from '@/components/sections/footer'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Publications', href: '#publications' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Students', href: '#students' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.replace('#', ''))
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom > 150) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled
                ? 'bg-gradient-to-br from-primary to-accent'
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
            >
              <GraduationCap
                className={`w-5 h-5 transition-colors ${isScrolled ? 'text-white' : 'text-foreground'
                  }`}
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-display font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-foreground'
                  }`}
              >
                Dr. Poonam Rani
              </p>
              <p
                className={`text-xs transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-foreground/70'
                  }`}
              >
                Associate Professor
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href.replace('#', '')
                  ? 'text-primary bg-primary/10'
                  : isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-foreground/80 hover:text-foreground hover:bg-white/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled
              ? 'hover:bg-muted text-foreground'
              : 'hover:bg-white/10 text-foreground'
              }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-4 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === item.href.replace('#', '')
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* <p>hello</p> */}
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <TeachingSection />
        <StudentsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
