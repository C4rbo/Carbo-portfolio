"use client";

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  coverImage: string;
};

export function PostCard({ slug, title, date, tags, description, coverImage }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold group-hover:text-zinc-200 transition-colors line-clamp-1">
            {title}
          </h2>
          <time className="text-sm text-zinc-400">
            {format(new Date(date), 'dd MMM yyyy')}
          </time>
        </div>
        <p className="text-zinc-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}