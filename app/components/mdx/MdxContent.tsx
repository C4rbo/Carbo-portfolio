"use client";

import { useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IoMdCheckmark, IoMdCopy } from 'react-icons/io';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-2 right-2 p-2 rounded-lg bg-zinc-700/50 hover:bg-zinc-600/50 transition-colors"
      aria-label={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <IoMdCheckmark className="w-5 h-5 text-green-500" />
      ) : (
        <IoMdCopy className="w-5 h-5 text-zinc-400" />
      )}
    </button>
  );
};

const components = {
  pre: ({ children }: { children: React.ReactNode }) => (
    <div className="relative group my-8">
      {children}
    </div>
  ),
  code: ({ className, children }: { className?: string; children: string }) => {
    const language = className?.replace('language-', '') || 'text';
    const code = children.trim();

    return (
      <div className="relative mt-4 first:mt-0">
        <div className="absolute top-0 right-0 left-0 h-12 bg-zinc-800/50 rounded-t-lg border-b border-zinc-700" />
        <div className="absolute top-3 left-4 text-sm text-zinc-400">
          {language}
        </div>
        <CopyButton code={code} />
        <SyntaxHighlighter
          language={language}
          style={okaidia}
          customStyle={{
            margin: 0,
            borderRadius: '8px',
            padding: '4rem 1rem 1rem 1rem',
            backgroundColor: 'rgb(24 24 27)',
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  },
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-zinc-300 my-4" {...props} />
};

export function MdxContent({ source }: MdxContentProps) {
  if (!source) {
    return null;
  }

  return (
    <article className="prose prose-invert prose-zinc max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  );
}