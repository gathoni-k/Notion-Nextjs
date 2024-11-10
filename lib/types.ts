// lib/types.ts
export interface PostMetadata {
    title: string;
    date: string;
    tags: string[];
  }
  
  export interface BlogPost {
    metadata: PostMetadata;
    markdown: string;
    slug: string;
  }