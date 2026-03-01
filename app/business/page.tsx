import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business | Ghanapolitan',
  description: 'Latest business news, market updates, economy, finance, and entrepreneurship in Ghana and Africa.',
  openGraph: {
    title: 'Business | Ghanapolitan',
    description: 'Latest business news, market updates, economy, finance, and entrepreneurship in Ghana and Africa.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Business | Ghanapolitan',
    description: 'Latest business news, market updates, economy, finance, and entrepreneurship in Ghana and Africa.',
  },
  keywords: ['Business', 'Ghana business', 'economy', 'finance', 'markets', 'entrepreneurship', 'investment'],
};

export default async function Page() {
  const res = await getArticlesByCategory('Business', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}