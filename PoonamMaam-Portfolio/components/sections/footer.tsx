'use client'

import { ArrowUp } from 'lucide-react'
import { PROFILE, PROFILE_LINKS, RESEARCH_AREAS } from '@/lib/profile'
import { NAV_ITEMS } from '@/lib/nav'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030b17] text-blue-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-bold text-white">{PROFILE.name}</p>
            <p className="mt-1 text-sm">
              {PROFILE.title}, CSE
              <br />
              {PROFILE.university}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Explore</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Research</p>
            <ul className="space-y-2 text-sm">
              {RESEARCH_AREAS.map((a) => (
                <li key={a.key}>{a.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="break-all hover:text-white">
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a href={PROFILE.phoneHref} className="hover:text-white">
                  {PROFILE.phone}
                </a>
              </li>
              <li>{PROFILE.office.room}</li>
              <li>{PROFILE.campus}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              {PROFILE_LINKS.map((l) => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group inline-flex items-center gap-2 hover:text-white">
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
