import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'coLaunch IT - Modern IT Solutions & Digital Transformation',
  description: 'coLaunch IT provides cutting-edge IT solutions, digital transformation services, and technology consulting to help businesses thrive in the digital age.',
  keywords: 'IT solutions, digital transformation, technology consulting, software development, cloud services',
  authors: [{ name: 'coLaunch IT' }],
  openGraph: {
    title: 'coLaunch IT - Modern IT Solutions & Digital Transformation',
    description: 'Transform your business with our cutting-edge IT solutions and digital transformation services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'coLaunch IT - Modern IT Solutions & Digital Transformation',
    description: 'Transform your business with our cutting-edge IT solutions and digital transformation services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
