import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

/* ─── Fonts ─────────────────────────────────────────────────────── */
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',          // avoids FOIT — text shows immediately
  preload: true,
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

/* ─── Canonical & shared constants ──────────────────────────────── */
const SITE_URL = 'https://muebleydecoracion.com.ec'
const SITE_TITLE = 'Feria Mueble y Decoración 2026 | Centro de Exposiciones Quito'
const SITE_DESC =
  'La feria de muebles y decoración más importante del Ecuador. Encuentra diseño de interiores, artesanos y marcas élite para tu hogar en el Centro de Exposiciones Quito, del 3 al 19 de abril de 2026. Entrada de cortesía disponible.'

/* ─── Structured data (Event schema & Website Organization schema) ────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Feria Mueble y Decoración Ecuador',
  alternateName: ['Feria del Mueble Quito', 'Expo Muebles y Decoración', 'Feria Mueble y Decoración — VI Edición'],
  url: SITE_URL,
  description: SITE_DESC,
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Feria Mueble y Decoración — VI Edición 2026',
  description: SITE_DESC,
  startDate: '2026-04-03T10:00:00-05:00',
  endDate: '2026-04-19T20:00:00-05:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Centro de Exposiciones Quito',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Amazonas N34-332 y Atahualpa',
      addressLocality: 'Quito',
      addressRegion: 'Pichincha',
      postalCode: '170135',
      addressCountry: 'EC',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Feria Mueble y Decoración',
    url: SITE_URL,
  },
  image: `${SITE_URL}/images/hero-feria.jpg`,
  url: SITE_URL,
}

/* ─── Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Feria Mueble y Decoración',
  },
  description: SITE_DESC,
  keywords: [
    'feria muebles Ecuador',
    'feria decoración Quito',
    'exposición muebles 2026',
    'Centro de Exposiciones Quito',
    'artesanos muebles Ecuador',
    'diseño de interiores Quito',
    'CAPEIPI feria',
    'VI Edición feria mueble',
    'comprar muebles Quito',
    'decoración del hogar Ecuador',
    'muebles de madera Quito',
    'expo muebles Ecuador',
    'tendencias en muebles 2026',
    'decoración de salas modernas',
    'juego de comedor Quito',
    'feria del mueble cuenca',
    'fábricas de muebles Quito'
  ],
  authors: [{ name: 'Growco 2026', url: 'https://growco2026.com' }],
  creator: 'Growco 2026',
  publisher: 'Feria Mueble y Decoración',

  /* ── Canonical ── */
  alternates: { canonical: SITE_URL },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: SITE_URL,
    siteName: 'Feria Mueble y Decoración',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: '/images/hero-feria.jpg',
        width: 1200,
        height: 630,
        alt: 'Feria Mueble y Decoración VI Edición — Quito 2026',
      },
    ],
  },

  /* ── Twitter / X card ── */
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ['/images/hero-feria.jpg'],
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: '/logo_MYD.jpg', type: 'image/jpeg' },
      { url: '/logo_MYD.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: '/logo_MYD.jpg',
    shortcut: '/logo_MYD.jpg',
  },
}

/* ─── Viewport / theme ──────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: '#8B1A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/* ─── Root Layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preload hero video for fastest LCP */}
        <link
          rel="preload"
          as="video"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MYD-NvYWYybCDBpX5GgKOwFYHW8Cz5wu1v.mp4"
          type="video/mp4"
        />
        {/* Preload hero background image */}
        <link rel="preload" as="image" href="/images/hero-feria.jpg" />
        {/* DNS prefetch for external media / analytics */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//va.vercel-scripts.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {/* JSON-LD Event structured data */}
        <Script
          id="event-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, eventSchema]) }}
        />
      </body>
    </html>
  )
}
