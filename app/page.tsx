import { allPosts } from '../.contentlayer/generated'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
      <div className="grid grid-cols-1 gap-2">
        {allPosts.map((post, idx) => (
          <div className='px-4 py-2 text-xl' key={idx}>
            <div>
              <Link 
                href={post.url} 
                className="text-slate-600 hover:text-pink-400 transition-colors duration-100 font-medium"
              >
                {post.title}
              </Link>
              <span className="text-gray-600 font-extralight"> - {new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
  )
}