'use client'

import { useState, useMemo } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  FileText, ExternalLink, BookOpen, Users,
  Search, ChevronDown, ChevronUp, Copy, Check,
  BookMarked, Mic2, Star, ArrowUpDown
} from 'lucide-react'
import { publications as allPubs, type Pub } from '@/lib/publications'
import { LINKS, SCHOLAR_METRICS } from '@/lib/profile'

const NAVY = '#0b2545'
const TEAL = '#2CA6A4'

// ─── BibTeX ───────────────────────────────────────────────────────────────

function makeBibtex(pub: Pub) {
  const key = pub.authors.split(',')[0].replace(/\s/g, '') + pub.year
  return `@${pub.type === 'journal' ? 'article' : 'inproceedings'}{${key},
  title = {${pub.title}},
  author = {${pub.authors}},
  ${pub.type === 'journal' ? 'journal' : 'booktitle'} = {${pub.venue}},
  year = {${pub.year}},
  doi = {${pub.doi || 'N/A'}}
}`
}

// ─── Publication Card ─────────────────────────────────────────────────────

function PubCard({ pub, index }: { pub: Pub; index: number }) {
  const [copied, setCopied] = useState(false)
  const [bibtexOpen, setBibtexOpen] = useState(false)
  const TypeIcon = pub.type === 'journal' ? BookMarked : Mic2

  const handleCopy = () => {
    navigator.clipboard.writeText(makeBibtex(pub))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      style={{ borderLeft: `3px solid ${pub.featured ? TEAL : NAVY}` }}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Index badge */}
          <div
            className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold mt-0.5"
            style={{ backgroundColor: '#eef3f9', color: NAVY }}
          >
            {index + 1}
          </div>

          <div className="flex-1 min-w-0">
            {/* Type + Featured */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider" style={{ color: TEAL }}>
                <TypeIcon className="w-3 h-3" />
                {pub.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
              </span>
              {pub.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: '#fff7e6', color: '#b45309' }}>
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold mb-1 leading-snug" style={{ color: '#1a1a1a' }}>
              {pub.title}
            </h3>

            {/* Authors */}
            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
              <Users className="w-3 h-3 flex-shrink-0" />
              {pub.authors}
            </p>

            {/* Venue row */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs mb-2">
              <span className="flex items-center gap-1 font-medium" style={{ color: NAVY }}>
                <BookOpen className="w-3 h-3" />
                {pub.venue}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500">{pub.year}</span>
              {pub.impact && (
                <>
                  <span className="text-gray-300">·</span>
                  <span className="px-1.5 py-0.5 rounded text-xs font-semibold" style={{ backgroundColor: '#eef3f9', color: NAVY }}>
                    {pub.impact}
                  </span>
                </>
              )}
              {pub.citations !== undefined && (
                <>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500">Cited by <span className="font-semibold text-gray-700">{pub.citations}</span></span>
                </>
              )}
            </div>

            {/* Tags */}
            <p className="text-xs text-gray-400 mb-3">{pub.tags.join(' • ')}</p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {pub.doi && (
                <a
                  href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border transition-colors hover:bg-blue-50"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  <ExternalLink className="w-3 h-3" />
                  DOI
                </a>
              )}
              <a
                href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border transition-colors hover:bg-teal-50"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                <Search className="w-3 h-3" />
                Scholar
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied!' : 'BibTeX'}
              </button>
              <button
                onClick={() => setBibtexOpen(!bibtexOpen)}
                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                {bibtexOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                Preview
              </button>
            </div>

            {/* BibTeX preview */}
            {bibtexOpen && (
              <pre className="mt-3 p-3 rounded text-xs font-mono overflow-x-auto leading-relaxed" style={{ backgroundColor: '#f8f9fa', color: '#374151', border: '1px solid #e5e7eb' }}>
                {makeBibtex(pub)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────

export default function PublicationsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [typeFilter, setTypeFilter] = useState<'all' | 'journal' | 'conference'>('all')
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year')
  const [searchQuery, setSearchQuery] = useState('')
  const [olderExpanded, setOlderExpanded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(6)
  const [yearLimits, setYearLimits] = useState<Record<number, number>>({})
  const RECENT_YEARS = 2
  const DEFAULT_PER_YEAR = 3

  const getYearLimit = (year: number) => yearLimits[year] ?? DEFAULT_PER_YEAR
  const loadMoreYear = (year: number, total: number) =>
    setYearLimits(prev => ({ ...prev, [year]: Math.min((prev[year] ?? DEFAULT_PER_YEAR) + 3, total) }))

  const featuredPubs = useMemo(() => allPubs.filter(p => p.featured), [])
  const featuredTitles = useMemo(() => new Set(featuredPubs.map(p => p.title)), [featuredPubs])

  const isFiltering = searchQuery.trim() !== '' || typeFilter !== 'all'

  const timelinePubs = useMemo(() => {
    let list = [...allPubs]
    if (!isFiltering) list = list.filter(p => !featuredTitles.has(p.title))
    if (typeFilter !== 'all') list = list.filter(p => p.type === typeFilter)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      )
    }
    list.sort((a, b) =>
      sortBy === 'citations'
        ? (b.citations ?? 0) - (a.citations ?? 0)
        : b.year - a.year || (b.citations ?? 0) - (a.citations ?? 0)
    )
    return list
  }, [typeFilter, sortBy, searchQuery, isFiltering, featuredTitles])

  const byYear = useMemo(() => {
    const groups: Record<number, Pub[]> = {}
    timelinePubs.forEach(p => {
      if (!groups[p.year]) groups[p.year] = []
      groups[p.year].push(p)
    })
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, pubs]) => ({ year: Number(year), pubs }))
  }, [timelinePubs])

  const recentYears = byYear.slice(0, RECENT_YEARS).map(g => g.year)
  const olderGroups = byYear.filter(g => !recentYears.includes(g.year))

  const totalJournals = allPubs.filter(p => p.type === 'journal').length
  const totalConf = allPubs.filter(p => p.type === 'conference').length
  const totalScie = allPubs.filter(p => p.impact.includes('SCIE')).length

  return (
    <section id="publications" className="relative py-24 md:py-32 bg-white" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Research Output</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#0b2545' }}>
            Publications
          </h2>
          <div className="w-12 h-0.5 mb-5" style={{ backgroundColor: NAVY }} />
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            60+ peer-reviewed papers in SCIE-indexed journals, international Scopus-indexed conferences and book chapters with IEEE, Springer Nature, Elsevier, ACS and Taylor & Francis — from 2017 to 2026.
          </p>
        </div>

        {/* Google Scholar Metrics */}
        <div className={`mb-12 bg-white border border-gray-200 rounded-lg p-8 shadow-sm transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] font-bold mb-1.5" style={{ color: TEAL }}>Google Scholar Profile</p>
              <h3 className="text-lg font-bold" style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
                Dr. Poonam Rani <span className="text-gray-400 font-normal mx-1">|</span> <span className="text-base text-gray-500 font-normal">Associate Professor, NSUT Delhi</span>
              </h3>
            </div>
            <a href={LINKS.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm font-bold transition-all hover:bg-white hover:border-gray-300 hover:shadow-sm" style={{ color: NAVY }}>
              View Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SCHOLAR_METRICS.map((m, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl font-bold mb-1.5 transition-colors group-hover:text-teal-600" style={{ color: NAVY }}>{m.value}</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 grid grid-cols-3 gap-6 text-center" style={{ borderTop: '1px solid #e5e5e5' }}>
            {[
              { v: totalJournals, l: 'Journal Articles' },
              { v: totalConf, l: 'Conference Papers' },
              { v: totalScie, l: 'SCIE Indexed' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-gray-900 mb-0.5">{s.v}</p>
                <p className="text-xs font-semibold text-gray-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Publications — hidden when filtering */}
        {!isFiltering && (
          <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a1a1a' }}>
              <Star className="w-5 h-5" style={{ color: '#b45309' }} />
              Featured Publications
            </h3>
            <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: TEAL }} />
            <div className="space-y-3">
              {featuredPubs.map((pub, i) => <PubCard key={i} pub={pub} index={i} />)}
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 mb-8" />

        {/* Search + Filter + Sort */}
        <div className={`mb-6 space-y-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, author, keyword..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setLoadedCount(6) }}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none bg-white"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
              {(['all', 'journal', 'conference'] as const).map(id => (
                <button
                  key={id}
                  onClick={() => { setTypeFilter(id); setLoadedCount(6) }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md transition-all"
                  style={typeFilter === id ? { backgroundColor: NAVY, color: '#fff' } : { color: '#6b7280' }}
                >
                  {id === 'all' ? 'All' : id === 'journal' ? 'Journals' : 'Conferences'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'year' | 'citations')}
                className="text-xs border border-gray-200 rounded-md px-2 py-1.5 bg-white outline-none"
              >
                <option value="year">Year ↓</option>
                <option value="citations">Citations ↓</option>
              </select>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            {isFiltering
              ? `${timelinePubs.length} of ${allPubs.length} publications match`
              : `${allPubs.length - featuredPubs.length} additional publications · ${featuredPubs.length} featured above`}
          </p>
        </div>

        {/* Publications List */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {timelinePubs.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">No publications match your search.</p>
            </div>
          ) : isFiltering ? (
            <>
              <div className="space-y-3">
                {timelinePubs.slice(0, loadedCount).map((pub, i) => <PubCard key={i} pub={pub} index={i} />)}
              </div>
              {loadedCount < timelinePubs.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setLoadedCount(c => c + 6)}
                    className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold border rounded-lg transition-colors hover:bg-gray-50"
                    style={{ borderColor: NAVY, color: NAVY }}
                  >
                    <ChevronDown className="w-4 h-4" />
                    Load More ({timelinePubs.length - loadedCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-10">
              {/* Recent years: show 3 then load more per year */}
              {byYear.filter(g => recentYears.includes(g.year)).map(({ year, pubs }) => {
                const limit = getYearLimit(year)
                const visible = pubs.slice(0, limit)
                const remaining = pubs.length - limit
                return (
                  <div key={year}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-base font-bold" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>{year}</span>
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-xs text-gray-400">{pubs.length} paper{pubs.length > 1 ? 's' : ''}</span>
                    </div>
                    <div className="space-y-3">
                      {visible.map((pub, i) => <PubCard key={i} pub={pub} index={i} />)}
                    </div>
                    {remaining > 0 && (
                      <button
                        onClick={() => loadMoreYear(year, pubs.length)}
                        className="mt-3 text-xs font-semibold flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: NAVY }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                        {remaining} more paper{remaining > 1 ? 's' : ''} from {year}
                      </button>
                    )}
                  </div>
                )
              })}

              {/* Older years: collapsible */}
              {olderGroups.length > 0 && (
                <div>
                  <button
                    onClick={() => setOlderExpanded(!olderExpanded)}
                    className="flex items-center gap-2 w-full text-left group mb-2"
                  >
                    <span className="text-sm font-semibold transition-colors group-hover:underline" style={{ color: NAVY }}>
                      {olderExpanded ? '▾' : '▸'} Older Publications ({olderGroups[olderGroups.length - 1].year}–{olderGroups[0].year})
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400">
                      {olderGroups.reduce((s, g) => s + g.pubs.length, 0)} papers
                    </span>
                  </button>

                  {olderExpanded && (
                    <div className="space-y-8 mt-6">
                      {olderGroups.map(({ year, pubs }) => {
                        const limit = getYearLimit(year)
                        const visible = pubs.slice(0, limit)
                        const remaining = pubs.length - limit
                        return (
                          <div key={year}>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-sm font-bold text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>{year}</span>
                              <div className="flex-1 h-px bg-gray-100" />
                              <span className="text-xs text-gray-400">{pubs.length} paper{pubs.length > 1 ? 's' : ''}</span>
                            </div>
                            <div className="space-y-3">
                              {visible.map((pub, i) => <PubCard key={i} pub={pub} index={i} />)}
                            </div>
                            {remaining > 0 && (
                              <button
                                onClick={() => loadMoreYear(year, pubs.length)}
                                className="mt-3 text-xs font-semibold flex items-center gap-1 hover:underline transition-colors"
                                style={{ color: NAVY }}
                              >
                                <ChevronDown className="w-3.5 h-3.5" />
                                {remaining} more paper{remaining > 1 ? 's' : ''} from {year}
                              </button>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
