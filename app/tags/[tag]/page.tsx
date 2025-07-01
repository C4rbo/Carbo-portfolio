'use server'

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
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

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<RawPost[]> {
  if (!fs.existsSync(POSTS_PATH)) {
    console.warn('La cartella blog non esiste ancora');
    return [];
  }

  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        description: data.description,
        coverImage: data.coverImage || '/images/default-cover.jpg',
        content
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getRecentPosts(count: number = 6): Promise<RawPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

export async function getPostsByTag(tag: string): Promise<RawPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = matter(fileContent);
    
    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      description: data.description,
      content: mdxSource,
      coverImage: data.coverImage || '/images/default-cover.jpg'
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}