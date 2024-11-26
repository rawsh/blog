import { allPosts } from '../.contentlayer/generated'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Home() {
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="max-w-3xl mx-auto py-6">
      <header className="mb-8 px-2">
        <div className="flex items-center pb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src="/author-image.png" alt="robert washbourne" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-gray-900">robert washbourne</div>
            <div className="text-gray-500">@rawsh0</div>
          </div>
        </div>
        <div className="text-slate-600 mb-6">
          <div className="text-xl mb-1">
            software engineer and researcher focused on applied AI<br/>
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            <div className="inline-block">interests:</div>
            <div className="inline-block"><div className="inline-block">•</div><div className="inline-block ml-1">small model reasoning</div></div>
            <div className="inline-block"><div className="inline-block">•</div><div className="inline-block ml-1">retrieval systems</div></div>
            <div className="inline-block"><div className="inline-block">•</div><div className="inline-block ml-1">evaluations</div></div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="https://x.com/rawsh0" className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"><Twitter className="inline" size={18} /></Link>
            <Link href="https://www.linkedin.com/in/robertwashbourne/" className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"><Linkedin className="inline" size={18} /></Link>
            <Link href="https://github.com/rawsh" className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"><Github className="inline" size={18} /></Link>
            <Link href="mailto:rawashbourne@gmail.com" className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"><Mail className="inline" size={18} /></Link>
          </div>
        </div>
        <div className="h-px bg-slate-200 w-full"></div>
      </header>

      <main className="grid grid-cols-1 gap-2">
        {sortedPosts.map((post, idx) => (
          <div className="px-2 py-2 text-xl" key={idx}>
            <div className="text-balance">
              <Link 
                href={post.url} 
                className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"
              >
                {post.title}
              </Link>
              <span className="text-gray-600 font-extralight whitespace-nowrap"> - {new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
