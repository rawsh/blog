import { allPosts } from '../.contentlayer/generated'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <Card key={post._id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Published on {new Date(post.date).toLocaleDateString()}</p>
              <Link 
                href={post.url} 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}