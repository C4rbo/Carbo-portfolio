import { getPostsByTag } from '../../lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;

  if (!tag) {
    notFound();
  }

  try {
    const posts = await getPostsByTag(tag);

    if (!posts.length) {
      notFound();
    }

    return (
      <div className="max-w-[800px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Posts tagged with #{tag}</h1>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-zinc-800 pb-6">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="flex gap-4 text-sm text-zinc-400 mt-2">
                <time>{post.date}</time>
                <div className="flex gap-2">
                  {post.tags?.map((t: string) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-zinc-400 mt-2">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering tag page:', error);
    notFound();
  }
}