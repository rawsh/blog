import BlogPostHeader from '@/components/header';
import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

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
          name: "rawsh",
          username: "rawsh0",
          avatar: "/image.png" // Update this with the correct path
        }}
      />
      <main className="px-4 py-8">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-slate prose-headings:font-thin prose-headings:text-slate-800 prose-img:rounded-xl font-light">
          <MDXContent />
        </div>
      </main>
    </div>
  );
}