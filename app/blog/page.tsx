
import { getAllPosts } from '../lib/blog';
import { PostCard } from '../components/blog/PostCard';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-[900px] mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-400">
A collection of writeups and tutorials on hacking and cybersecurity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}