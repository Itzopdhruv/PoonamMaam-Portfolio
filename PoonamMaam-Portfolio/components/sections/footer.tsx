'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, GraduationCap, Heart, ArrowUp, Linkedin, BookOpen, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Publications', href: '#publications' },
    { name: 'Research', href: '#research' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const researchAreas = [
    'Artificial Intelligence',
    'Blockchain Technology',
    'Internet of Things',
    'Social Network Analysis',
    'Soft Computing',
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dr-poonam-rani-98998423b/', label: 'LinkedIn' },
    { icon: BookOpen, href: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en', label: 'Google Scholar' },
    { icon: Globe, href: 'https://www.researchgate.net/profile/Poonam-Rani-10', label: 'ResearchGate' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Dr. Poonam Rani
                  </h3>
                  <p className="text-sm text-muted-foreground">Associate Professor</p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Dedicated to excellence in research, teaching, and mentorship in Computer Science & Engineering at NSUT, New Delhi.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Areas */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-accent to-secondary rounded-full"></div>
                Research Areas
              </h4>
              <ul className="space-y-3">
                {researchAreas.map((area, index) => (
                  <li key={index}>
                    <span className="text-foreground/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                Contact
              </h4>
              <div className="space-y-4">
                <a href="tel:+911125000051" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-foreground/80 text-sm group-hover:text-primary transition-colors">011 - 25000051</p>
                  </div>
                </a>
                <a href="mailto:poonam.rani@nsut.ac.in" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground/80 text-sm group-hover:text-accent transition-colors break-all">poonam.rani@nsut.ac.in</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-foreground/80 text-sm">NSUT, Dwarka, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Dr. Poonam Rani. Made with
              <Heart className="w-4 h-4 text-red-500 inline animate-pulse" />
              for academic excellence.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Back to top
              <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
