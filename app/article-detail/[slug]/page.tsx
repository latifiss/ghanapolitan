import ArticleDetail from './article-detail';
import { getArticleBySlug, getSimilarArticles } from '@/lib/api/articles';

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { slug } = await params;
  
  if (!slug || slug === 'undefined') return { title: 'Article | Ghanapolitan' };

  try {
    const response = await getArticleBySlug(slug);
    const article = response?.data;
    
    if (article) {
      return {
        title: `${article.title} | Ghanapolitan`,
        description: article.description || 'Read this article on Ghanapolitan',
        openGraph: {
          title: article.title,
          description: article.description,
          type: 'article',
          publishedTime: article.published_at,
          authors: [article.creator],
          tags: article.tags,
        },
      };
    }
  } catch (error) {
    console.error('Metadata error:', error);
  }
  
  return { title: 'Article | Ghanapolitan' };
}

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params;
  
  if (!slug || slug === 'undefined') {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'franklin-normal' }}>
        Article not found
      </div>
    );
  }

  try {
    const [articleRes, similarRes] = await Promise.all([
      getArticleBySlug(slug),
      getSimilarArticles(slug)
    ]);

    console.log('Server-side data fetch:', {
      hasArticle: !!articleRes?.data,
      articleTitle: articleRes?.data?.title,
      similarData: similarRes?.data, 
      similarHasArticles: !!similarRes?.data?.articles,
      similarArticlesCount: similarRes?.data?.articles?.length
    });

    if (!articleRes?.data) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'franklin-normal' }}>
          Article not found
        </div>
      );
    }

    const similarArticles = similarRes?.data?.articles || [];

    return (
      <ArticleDetail 
        article={articleRes.data}
        similarArticles={similarArticles}
      />
    );
  } catch (error) {
    console.error("Page Data Fetch Error:", error);
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'franklin-normal' }}>
        Failed to load article. Please try again later.
      </div>
    );
  }
}