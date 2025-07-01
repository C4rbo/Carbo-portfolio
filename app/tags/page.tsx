import Link from 'next/link';
import { getAllTags, getPostsByTag } from '../lib/blog';
import { PostCard } from '../components/blog/PostCard';

export default async function TagsPage({
  searchParams,
}: {
  searchParams: { tag?: string }
}) {
  const allTags = await getAllTags();
  const selectedTag = searchParams.tag;
  const posts = selectedTag ? await getPostsByTag(selectedTag) : [];

  return (
    <div className="max-w-[900px] mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Tags</h1>
        <p className="text-zinc-400 mb-8">
          {selectedTag ? `Showing posts tagged with "${selectedTag}"` : 'Select a tag to filter posts'}
        </p>
        
        <div className="flex gap-4 flex-wrap mb-12">
          {allTags.map(async tag => (
            <Link
              key={tag}
              href={`/tags?tag=${tag}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTag === tag 
                  ? 'bg-zinc-700 text-white' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {tag}
              <span className="ml-2 text-zinc-500">
                ({(await getPostsByTag(tag)).length})
              </span>
            </Link>
          ))}
        </div>
      </header>

      {selectedTag && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}

      {selectedTag && posts.length === 0 && (
        <div className="text-center text-zinc-400">
          <p>No posts found with tag "{selectedTag}"</p>
        </div>
      )}
    </div>
  );
}