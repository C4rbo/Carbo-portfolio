import { getPostsByTag } from '../../lib/blog';
import { PostCard } from '../../components/blog/PostCard';

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Posts tagged "{params.tag}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(await posts).map(post => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}