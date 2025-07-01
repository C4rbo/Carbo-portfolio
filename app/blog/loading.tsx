export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 animate-pulse"
          >
            <div className="h-7 bg-zinc-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-zinc-800 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-zinc-800 rounded w-full mb-4"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-zinc-800 rounded-full w-20"></div>
              <div className="h-6 bg-zinc-800 rounded-full w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}