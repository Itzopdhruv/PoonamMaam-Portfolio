import React from "react"
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LINKS, MEMBERSHIPS, PROFILE, RESEARCH_AREAS } from '@/lib/profile'
import { SITE_URL } from '@/lib/site'

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700']
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const description =
  'Dr. Poonam Rani is an Associate Professor in Computer Science & Engineering at Netaji Subhas University of Technology (NSUT), New Delhi, researching Quantum Computing, Machine Learning, Blockchain, IoT and Social Network Analysis.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Dr. Poonam Rani — Associate Professor, CSE, NSUT Delhi',
  description,
  keywords: [
    'Poonam Rani',
    'Dr. Poonam Rani',
    'Poonam Rani NSUT',
    'Associate Professor NSUT',
    'NSUT CSE faculty',
    'Quantum Computing',
    'Blockchain',
    'Internet of Things',
    'Social Network Analysis',
    'Machine Learning',
  ],
  authors: [{ name: PROFILE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    title: 'Dr. Poonam Rani — Associate Professor, NSUT Delhi',
    description,
    url: '/',
    siteName: 'Dr. Poonam Rani',
    locale: 'en_IN',
    images: [{ url: '/gallery/hero-podium.webp', width: 1600, height: 1072, alt: 'Dr. Poonam Rani' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Poonam Rani — Associate Professor, NSUT Delhi',
    description,
    images: ['/gallery/hero-podium.webp'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  alternateName: 'Poonam Rani',
  jobTitle: PROFILE.title,
  email: `mailto:${PROFILE.email}`,
  telephone: PROFILE.phone,
  url: SITE_URL,
  image: `${SITE_URL}/gallery/hero-podium.webp`,
  worksFor: {
    '@type': 'CollegeOrUniversity',
    name: 'Netaji Subhas University of Technology',
    department: { '@type': 'Organization', name: 'Department of Computer Science and Engineering' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 3, Dwarka',
      addressLocality: 'New Delhi',
      postalCode: '110078',
      addressCountry: 'IN',
    },
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Delhi' },
  knowsAbout: RESEARCH_AREAS.map((a) => a.title),
  memberOf: MEMBERSHIPS.map((m) => ({ '@type': 'Organization', name: m.replace(/^.*?,\s*/, '') })),
  sameAs: Object.values(LINKS),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${playfair.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
