import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

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
          <main className="min-h-screen">
            <div className="container mx-auto py-8 px-4">
              <h1 className="text-3xl font-thin mb-8 mt-4 max-w-3xl mx-auto px-4">raw.sh</h1>
              {children}
            </div>
          </main>
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