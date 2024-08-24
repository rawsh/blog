import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Providers } from './providers'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const inter = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog using Next.js, Contentlayer, and MDX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="min-h-screen flex">
            {/* Main content */}
            <main className="flex-grow">
              <div className="container max-w-3xl mx-auto py-8 px-4">
                {/* Mobile header */}
                <h1 className="text-3xl font-black mb-8 m-4 text-slate-800">raw.sh</h1>
                {children}
              </div>
            </main>
          </div>

          <footer className="bg-white shadow-sm mt-8">
            <div className="container max-w-3xl mx-auto py-4 px-4 text-left text-gray-600 font-normal">
              © 2024 My Blog. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}