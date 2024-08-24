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
      <body className={`${inter.className} bg-gray-100`}>
        <Providers>
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-white shadow-sm mt-8">
            <div className="container mx-auto py-4 px-4 text-center text-gray-600">
              © 2024 My Blog. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}