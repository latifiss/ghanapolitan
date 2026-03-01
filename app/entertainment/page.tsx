import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entertainment | Ghanapolitan',
  description: 'Latest entertainment news, movies, music, celebrities, TV shows, and arts & culture from Ghana and beyond.',
  openGraph: {
    title: 'Entertainment | Ghanapolitan',
    description: 'Latest entertainment news, movies, music, celebrities, TV shows, and arts & culture from Ghana and beyond.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Entertainment | Ghanapolitan',
    description: 'Latest entertainment news, movies, music, celebrities, TV shows, and arts & culture from Ghana and beyond.',
  },
  keywords: ['Entertainment', 'movies', 'music', 'celebrities', 'TV shows', 'arts', 'culture', 'Ghana entertainment'],
};

export default async function Page() {
  const res = await getArticlesByCategory('Entertainment', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}