import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: {children: any}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-white border-b border-gray-200 py-4">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">My Blog</Link>
            <div className="space-x-6 text-sm">
              <Link href="/features" className="hover:underline">Features</Link>
              <Link href="/pricing" className="hover:underline">Pricing</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/documentation" className="hover:underline">Documentation</Link>
              <Link href="/login" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Login</Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © 2024 My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}