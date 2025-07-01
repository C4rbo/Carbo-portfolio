import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: MDXRemoteSerializeResult;
  description?: string;
}