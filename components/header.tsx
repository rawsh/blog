import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Callback from './callback';

const BlogPostHeader = ({ title, date, author }: {title: any, date: any, author: any}) => {
  return (
    <div className="max-w-3xl mx-auto px-2 pb-4">
      <div className="mb-16">
        <Callback />
      </div>
      <h1 className="text-4xl font-extralight text-slate-600 mb-4 text-balance">{title}</h1>
      <div className="mb-8 text-slate-600 text-md font-light">
        Published on {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
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