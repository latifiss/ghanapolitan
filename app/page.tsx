import ArticlePageClient from './client';
import { getFeedByCategory } from '@/lib/api/feed';

export default async function Page() {
  const res = await getFeedByCategory('business', 1, 10);
  const articles = Array.isArray(res.data?.articles)
    ? res.data.articles
    : Array.isArray(res.data)
    ? res.data
    : [];

  return <ArticlePageClient articles={articles} />;
}
