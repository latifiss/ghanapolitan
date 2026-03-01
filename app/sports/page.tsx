import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports | Ghanapolitan',
  description: 'Latest sports news, scores, fixtures, and analysis from Ghana and around the world. Football, basketball, athletics and more.',
  openGraph: {
    title: 'Sports | Ghanapolitan',
    description: 'Latest sports news, scores, fixtures, and analysis from Ghana and around the world.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sports | Ghanapolitan',
    description: 'Latest sports news, scores, fixtures, and analysis from Ghana and around the world.',
  },
  keywords: ['Sports', 'Ghana sports', 'football', 'basketball', 'athletics', 'premier league', 'scores', 'fixtures'],
};

export default async function Page() {
  const res = await getArticlesByCategory('Sports', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}