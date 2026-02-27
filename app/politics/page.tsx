import ArticlePageClient from './client';
import { getArticlesByCategory } from '@/lib/api/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politics | GhanaPolitan',
  description: 'Latest political news, analysis, and coverage from Ghana and around the world.',
  openGraph: {
    title: 'Politics | GhanaPolitan',
    description: 'Latest political news, analysis, and coverage from Ghana and around the world.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Politics | GhanaPolitan',
    description: 'Latest political news, analysis, and coverage from Ghana and around the world.',
  },
  keywords: ['Politics', 'Ghana politics', 'political news', 'government', 'elections'],
};

export default async function Page() {
  const res = await getArticlesByCategory('Politics', 1, 30);
  const articles = res?.data?.articles || [];

  return <ArticlePageClient articles={articles} />;
}