"use client";

import { useRouter } from 'next/navigation';

type TagButtonProps = {
  tag: string;
};

export function TagButton({ tag }: TagButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/tags/${tag}`)}
      className="px-3 py-1 bg-zinc-800 rounded-full text-sm hover:bg-zinc-700"
    >
      {tag}
    </button>
  );
}