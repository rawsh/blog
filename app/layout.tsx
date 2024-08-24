import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';
import React from 'react'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'raw.sh',
  description: 'robert washbourne',
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
            {/* Main content */}
            <main className="">
              <div className="container max-w-3xl mx-auto py-8 px-4 overflow-hidden">
                {/* Mobile header */}
                <h1 className="text-3xl font-black mb-8 m-4 text-slate-800">raw.sh</h1>
                {children}
              </div>
            </main>
          </div>

          <footer className="bg-white shadow-sm mt-8">
            <div className="container max-w-3xl mx-auto py-4 px-4 text-left text-gray-600 font-normal">
              © 2024 rawsh. All rights reserved.
            </div>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}