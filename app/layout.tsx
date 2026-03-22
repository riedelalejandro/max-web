import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { siteConfig } from '@/lib/content'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [
    'alojamiento El Chaltén',
    'hospedaje El Chaltén',
    'hotel El Chaltén barato',
    'hostel El Chaltén',
    'donde dormir El Chaltén',
    'alojamiento trekking Fitz Roy',
    'alojamiento Cerro Torre El Chaltén',
    'hospedaje Patagonia Argentina',
    'El Chaltén capital del trekking',
    'alojamiento Parque Nacional Los Glaciares',
    'Max alojamiento El Chaltén',
    'Riquelme El Chaltén alojamiento',
  ],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
