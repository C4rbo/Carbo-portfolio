"use client";

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">
      <div className="flex flex-col items-center gap-6">
        <img 
          src="https://krita-artists.org/uploads/default/original/2X/9/9cd8ea6f7cd0eb9373561616f8ee8562867aef02.gif"
          alt="Loading"
          className="w-64 h-64 rounded-lg object-cover"
        />
      </div>
    </div>
  );
}