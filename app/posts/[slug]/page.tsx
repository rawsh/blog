import { allPosts } from '../../../.contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import Layout from '../../../components/layout'
import BlogPost from '../../../components/blogpost'

export const generateStaticParams = async () => 
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return { title: post.title }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)
  return (
    <Layout>
      <BlogPost
        title={post.title}
        date={new Date(post.date).toLocaleDateString()}
        content={<MDXContent />}
      />
    </Layout>
  )
}