import BlogPostHeader from '@/components/header';
import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

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
          avatar: "/image.png" // Update this with the correct path
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