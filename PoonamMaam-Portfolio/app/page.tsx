'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ChevronUp } from 'lucide-react'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ResearchAreasSection from '@/components/sections/research-areas'
import AchievementsSection from '@/components/sections/achievements'
import GallerySection from '@/components/sections/gallery'
import PublicationsSection from '@/components/sections/publications'
import StudentsSection from '@/components/sections/students'
import TeachingSection from '@/components/sections/teaching'
import ContactSection from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import { NAV_ITEMS } from '@/lib/nav'

function useScroll() {
  const [y, setY] = useState(0)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      setY(window.scrollY)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return { y, progress }
}

function Navbar() {
  const { y, progress } = useScroll()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const scrolled = y > 40
  const current = y < 300 ? '' : active

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#071a33]/85 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-amber-400 via-orange-400 to-teal-400" style={{ transform: `scaleX(${progress})` }} />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <a href="#home" className="group flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 font-display text-lg font-bold text-[#071a33] transition-transform group-hover:rotate-6">
            PR
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-bold">Dr. Poonam Rani</span>
            <span className="block text-xs text-blue-100/70">Associate Professor · NSUT</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                current === n.href.slice(1) ? 'bg-white/10 text-amber-300' : 'text-blue-100/80 hover:text-white'
              }`}
            >
              {n.name}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-1 border-t border-white/10 bg-[#071a33]/95 px-4 py-4 backdrop-blur-xl">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm font-medium ${current === n.href.slice(1) ? 'bg-white/10 text-amber-300' : 'text-blue-100/80'}`}
            >
              {n.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function ScrollToTop() {
  const { y } = useScroll()
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[#071a33] shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-110 ${
        y > 600 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchAreasSection />
        <AchievementsSection />
        <GallerySection />
        <PublicationsSection />
        <StudentsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
