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
          name: "shadcn",
          username: "shadcn",
          avatar: "/path/to/avatar.jpg" // Update this with the correct path
        }}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-pink prose-headings:font-extralight prose-img:rounded-xl font-light">
          <MDXContent />
        </div>
      </main>
    </div>
  );
}