import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Africa | Ghanapolitan',
  description: 'Latest news from across Africa. Politics, business, culture, and developments from all African regions.',
  openGraph: {
    title: 'Africa | Ghanapolitan',
    description: 'Latest news from across Africa. Politics, business, culture, and developments from all African regions.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Africa | Ghanapolitan',
    description: 'Latest news from across Africa. Politics, business, culture, and developments from all African regions.',
  },
  keywords: ['Africa', 'African news', 'West Africa', 'East Africa', 'Southern Africa', 'North Africa', 'Central Africa', 'African politics'],
};

export default async function Page() {
  const res = await getArticlesByCategory('Africa', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}