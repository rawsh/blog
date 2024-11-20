import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Callback = () => {
    return (
        <Link href="/" className="inline-flex items-center text-md text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            See all posts
        </Link>
    )
}

export default Callback;