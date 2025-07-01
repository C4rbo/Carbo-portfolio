
import { getPostBySlug } from '../../lib/blog';
import { MdxContent } from '@/app/components/mdx/MdxContent';
import { notFound } from 'next/navigation';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Suspense } from 'react';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    return (
      <div className="max-w-[800px] mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-zinc-400">
            <time>{post.date}</time>
            <div className="flex gap-2">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="text-sm">#{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <MdxContent source={post.content} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('Error rendering post:', error);
    notFound();
  }
}