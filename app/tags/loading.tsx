export default function Loading() {
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="mb-12">
        <div className="h-10 w-32 bg-zinc-800 rounded-lg mb-4 animate-pulse" />
        <div className="h-6 w-64 bg-zinc-800 rounded-lg animate-pulse" />
      </div>

      <div className="flex gap-4 flex-wrap mb-12">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-24 bg-zinc-800 rounded-lg animate-pulse"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-[1.5] bg-zinc-800 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}