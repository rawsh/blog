import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
import React from 'react'
import { Metadata } from 'next'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://raw.sh'),
  title: 'raw.sh',
  description: 'robert washbourne\'s ✨ website ✨',
  openGraph: {
    title: 'raw.sh',
    description: 'robert washbourne\'s ✨ website ✨',
    url: 'https://raw.sh',
    siteName: 'raw.sh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'raw.sh',
    description: 'robert washbourne\'s ✨ website ✨',
    creator: '@rawsh0',
  },
}

export const viewport = {
  themeColor: "#FFFFFF",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${work.className}`}>
        <Providers>
          <div className="min-h-screen">
            <main className="">
              <div className="container max-w-3xl mx-auto pt-8 px-4 overflow-hidden">
                <h1 className="text-3xl font-black mb-8 m-2 text-slate-800">raw.sh</h1>
                {children}
              </div>
            </main>
          </div>

          <footer>
            <div className="container max-w-3xl mx-auto py-4 px-4 text-left text-gray-600 font-normal px-8">
              © 2024 Robert Washbourne. All rights reserved.
            </div>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
