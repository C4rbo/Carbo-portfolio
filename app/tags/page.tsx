
import { getAllTags } from '../lib/blog';
import Link from 'next/link';

interface TagsPageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function TagsPage({ searchParams }: TagsPageProps) {
  try {
    const params = await searchParams;
    const tags = await getAllTags();

    const tagsList = tags.map(tag => ({
      name: tag,
      count: 1 
    }));

    return (
      <div className="max-w-[800px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Tags</h1>
        
        <div className="flex flex-wrap gap-4">
          {tagsList.map((tag) => (
            <Link
              key={tag.name}
              href={`/tags/${tag.name}`}
              className="px-4 py-2 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
            >
              <span className="text-zinc-400">#{tag.name}</span>
              <span className="ml-2 text-sm text-zinc-500">({tag.count})</span>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering tags page:', error);
    return (
      <div className="max-w-[800px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">No tags found</h1>
      </div>
    );
  }
}