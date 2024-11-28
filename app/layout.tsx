import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Rss } from 'lucide-react';

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://raw.sh'),
  title: 'Robert Washbourne | raw.sh',
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
        <div className="min-h-screen">
          <main>
            <div className="container max-w-3xl mx-auto pt-8 px-4 overflow-hidden">
              <h1 className="text-3xl font-black mb-8 m-2 text-slate-800">raw.sh</h1>
              {children}
            </div>
          </main>
        </div>

        <footer>
          <div className="container max-w-3xl mx-auto py-4 px-4">
            <div className="flex justify-between items-center text-gray-600 font-normal">
              <div className="flex-2 text-balance">© 2024 Robert Washbourne. All rights reserved.</div>
              <Link 
                href="https://raw.sh/feed.xml" 
                className="inline-flex gap-2 items-center hover:text-pink-400 transition-colors duration-100 font-medium"
              >
                <span className="">Subscribe with RSS</span>
                <Rss className="" size={18} />
              </Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
