import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  coverImage: string;
  content: MDXRemoteSerializeResult; 
}

interface RawPost extends Omit<Post, 'content'> {
  content: string;
}