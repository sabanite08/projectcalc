import type { ComponentType } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: 'home' | 'construction' | 'finance';
  relatedCalcs: string[];
  Body: ComponentType;
}
