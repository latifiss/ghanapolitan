import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World | GhanaPolitan',
  description: 'Global news, international affairs, and world events coverage from around the globe.',
  openGraph: {
    title: 'World | GhanaPolitan',
    description: 'Global news, international affairs, and world events coverage from around the globe.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'World | GhanaPolitan',
    description: 'Global news, international affairs, and world events coverage from around the globe.',
  },
  keywords: ['World', 'International news', 'global affairs', 'world events', 'international relations', 'foreign news'],
};

export default async function Page() {
  const res = await getArticlesByCategory('World', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}