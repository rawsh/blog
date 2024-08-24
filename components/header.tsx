import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BlogPostHeader = ({ title, date, author }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
      <div className="mb-4 text-gray-500 text-sm">
        Published on {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-gray-900">{author.name}</div>
          <div className="text-gray-500">@{author.username}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;