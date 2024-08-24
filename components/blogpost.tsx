import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent } from "../components/ui/card"
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from 'lucide-react'

export default function BlogPost({ title, date, content }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="sr-only">Back to blog</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors">About</Link>
              <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:space-x-8">
          <article className="lg:flex-grow">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Blog post cover"
                width={1200}
                height={600}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-8">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <div className="flex items-center space-x-4 mb-8 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5" />
                    <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5" />
                    <span>{"readingTime"} min read</span>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {content}
                </div>
              </CardContent>
            </Card>
          </article>
          
          <aside className="mt-8 lg:mt-0 lg:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={"author.avatar"} alt={"author.name"} />
                    <AvatarFallback>{"author.name.charAt(0)"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{"author.name"}</h3>
                    <p className="text-sm text-muted-foreground">{"author.role"}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{"author.bio"}</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}