import BlogPostHeader from '@/components/header';
import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Metadata } from 'next'

import Image from "next/image"
import { Code } from "bright"

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.light",
}

const components = {
  Image,
  pre: Code,
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return {}

  return {
    title: `${post.title} | raw.sh`,
    description: post.description || `read ${post.title} on raw.sh`,
    openGraph: {
      title: post.title,
      description: post.description || `read ${post.title} on raw.sh`,
      url: `https://raw.sh/posts/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Robert Washbourne'],
      images: [
        {
          url: post.image || 'https://raw.sh/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || `Read ${post.title} on raw.sh`,
      images: [post.image || 'https://raw.sh/og-image.png'],
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="min-h-screen bg-white">
      <BlogPostHeader 
        title={post.title}
        date={post.date}
        author={{
          name: "robert washbourne",
          username: "rawsh0",
          avatar: "/author-image.png" // Update this with the correct path
        }}
      />
      <main className="px-4 py-8">
        <div className="mx-auto prose prose-xs lg:prose-lg xl:prose-xl prose-slate prose-headings:font-extralight prose-headings:text-slate-800 prose-img:rounded-xl font-light">
          <MDXContent components={components}/>
        </div>
      </main>
    </div>
  );
}