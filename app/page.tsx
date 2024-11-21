import { allPosts } from '../.contentlayer/generated'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="grid grid-cols-1 gap-2">
      {sortedPosts.map((post, idx) => (
        <div className='px-2 py-2 text-xl' key={idx}>
          <div className='text-balance'>
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
    </div>
  )
}
