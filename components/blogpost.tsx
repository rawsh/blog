import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';

const BlogPost = ({ title, date, readingTime, content, author }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <CalendarIcon className="w-5 h-5 mr-2" />
        <time className="mr-6">{date}</time>
        <ClockIcon className="w-5 h-5 mr-2" />
        <span>{readingTime} min read</span>
      </div>
      <div className="prose prose-lg max-w-none">
        {content}
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center">
          <img 
            src={author.avatar || "/placeholder-avatar.png"} 
            alt={author.name} 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-gray-600">{author.role}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{author.bio}</p>
      </div>
    </div>
  );
};

export default BlogPost;