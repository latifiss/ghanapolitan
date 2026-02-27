'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Article from '@/components/article';
import News from '@/components/news';
import { formatDate } from '@/utils/formatDate';
import TickerRow from '@/components/tickerRow';
import Topic from '@/components/topic';
import ChartSection from '@/components/chartSection';
import { chartsData } from '@/data/chart';
import { 
  getTopStories,
  getArticlesByCategory, 
  getArticlesBySubcategory,
  Article as ArticleType,
  ApiResponse 
} from '@/lib/api/articles';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 100px;
  max-width: 100vw;
  overflow-x: hidden;

  @media only screen and (max-width: 576px) {
    padding-top: 12px;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding-top: 12px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 315px;
  gap: 14px;
  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 100%;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

   @media (max-width: 576px) {
    margin-left: 16px;
    margin-right: 16px;
    padding-right: 0px;
    padding-left: 0px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-left: 16px;
    margin-right: 16px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  column-count: 3;
  column-gap: 12px;
  column-fill: balance;
  position: relative;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: #e7e7e7;
    pointer-events: none;
  }

  &:before {
    left: calc(35.033% - 16px);
  }

  &:after {
    left: calc(68.666% - 16px);
  }

  @media only screen and (max-width: 1024px) {
    column-count: 2;

    &:before {
      left: calc(50% - 16px);
    }

    &:after {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    &:before,
    &:after {
      display: none;
    }
  }

  & > * {
    break-inside: avoid;
    margin-bottom: 24px;
  }
`;

const InsideAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 12px 12px;

  @media (max-width: 768px) { padding: 12px 8px; }
`;

const Divider = styled.div`
  width: calc(100% - 32px);
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 14px 16px;

  @media (max-width: 576px) {
    width: calc(100% - 32px);
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: calc(100% - 32px);
  }
`

const TopicsRow = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 16px;
  padding: 0 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 576px) {
    padding: 0 16px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 16px;
`;

const HeaderText = styled.p`
    position: relative;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1.5px;
        background: ${({ theme }) => theme.colors.text};
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.text};
    }

    @media only screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 22px;
    }
`;

const AdLabel = styled.div`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'cheltenham-normal';
  white-space: nowrap;
  margin-top: 3px;
`;

const AdWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.adBg};
  margin-bottom: 12px;
`;

const MobileInsertWrapper = styled.div`
  display: none;
  width: 100%;

  @media only screen and (max-width: 768px) { display: block; width: 100%; }
`;

const MobileChartSection = styled.div`
  display: none;
  width: 100%;
  
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin-top: 16px;
  }
`;

const DesktopChartSection = styled.div`
  display: block;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  font-family: 'franklin-normal';
  font-size: 14px;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  font-family: 'franklin-normal';
  font-size: 14px;
  color: #ff6b6b;
  text-align: center;
  padding: 20px;
`;

interface TopStoriesSectionProps {
  limit?: number;
}

const TopStoriesSection: React.FC<TopStoriesSectionProps> = ({ 
  limit = 7 
}) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopStories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTopStories();
        
        if (response.status === 'success' && response.data) {
          let articlesData: ArticleType[] = [];
          
          if (Array.isArray(response.data)) {
            articlesData = response.data;
          } else if (response.data.articles && Array.isArray(response.data.articles)) {
            articlesData = response.data.articles;
          }
          
          setArticles(articlesData.slice(0, limit));
        } else {
          setError('No top stories found');
        }
      } catch (err) {
        console.error('Failed to fetch top stories:', err);
        setError('Failed to load top stories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTopStories();
  }, [limit]);

  const getTagType = (article: ArticleType) => {
    if (article.isBreaking) return 'breaking';
    if (article.isLive) return 'live';
    return undefined;
  };

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>;
  }

  if (!articles || articles.length === 0) {
    return null;
  }

  const first = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {first && (
        <>
          <Article
            tag={getTagType(first)}
            title={first.title}
            description={first.description}
            time={formatDate(first.published_at)}
            image={first.image_url || '/images/default-news.jpg'}
            subcategory={first.subcategory?.[0] || first.category || ' '}
            slug={first.slug}
            width={800}
            height={450}
          />
          <MobileInsertWrapper>
            <InsideAdWrapper>
              <AdLabel>Advertisement</AdLabel>
              <AdWrapper />
            </InsideAdWrapper>
          </MobileInsertWrapper>
        </>
      )}

      {rest.map((item, idx) => (
        <React.Fragment key={`${item._id}-${idx}`}>
          <News
            tag={getTagType(item)}
            title={item.title}
            description={item.description}
            time={formatDate(item.published_at)}
            image={item.image_url || '/images/default-news.jpg'}
            subcategory={item.subcategory?.[0] || item.category || ' '}
            slug={item.slug}
            width={800}
            height={450}
            sourceText={item.source_name}
            tags={item.tags}
          />
          {(idx + 1) % 4 === 0 && (
            <InsideAdWrapper>
              <AdLabel>Advertisement</AdLabel>
              <AdWrapper />
            </InsideAdWrapper>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

interface NewsSectionProps {
  category?: string;
  subcategory?: string;
  limit?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ 
  category, 
  subcategory, 
  limit = 7 
}) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        let response: ApiResponse<{ articles: ArticleType[] }>;
        
        if (subcategory) {
          response = await getArticlesBySubcategory(subcategory, 1, limit);
        } else if (category) {
          response = await getArticlesByCategory(category, 1, limit);
        } else {
          return;
        }
        
        if (response.status === 'success' && response.data?.articles) {
          setArticles(response.data.articles);
        } else {
          setError('No articles found');
        }
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, subcategory, limit]);

  const getTagType = (article: ArticleType) => {
    if (article.isBreaking) return 'breaking';
    if (article.isLive) return 'live';
    return undefined;
  };

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>;
  }

  if (!articles || articles.length === 0) {
    return null;
  }

  const first = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {first && (
        <>
          <Article
            tag={getTagType(first)}
            title={first.title}
            description={first.description}
            time={formatDate(first.published_at)}
            image={first.image_url || '/images/default-news.jpg'}
            subcategory={first.subcategory?.[0] || first.category || ' '}
            slug={first.slug}
            width={800}
            height={450}
          />
          <MobileInsertWrapper>
            <InsideAdWrapper>
              <AdLabel>Advertisement</AdLabel>
              <AdWrapper />
            </InsideAdWrapper>
          </MobileInsertWrapper>
        </>
      )}

      {rest.map((item, idx) => (
        <React.Fragment key={`${item._id}-${idx}`}>
          <News
            tag={getTagType(item)}
            title={item.title}
            description={item.description}
            time={formatDate(item.published_at)}
            image={item.image_url || '/images/default-news.jpg'}
            subcategory={item.subcategory?.[0] || item.category || ' '}
            slug={item.slug}
            sourceText={item.source_name}
            width={800}
            height={450}
            tags={item.tags}
          />
          {(idx + 1) % 4 === 0 && (
            <InsideAdWrapper>
              <AdLabel>Advertisement</AdLabel>
              <AdWrapper />
            </InsideAdWrapper>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default function ArticlePageClient() {
  return (
    <PageWrapper>
      <PageGrid>
        <LeftWrapper>
          <TopicsRow>
              <Topic 
                  image='/topics/ndc.png'
                  label='NDC Delegate Confress'
              />
              <Topic 
                  image='/topics/coat-of-arms.svg'
                  label='State of the Nation Address'
              />
          </TopicsRow>
          <ContentWrapper>
            <TopStoriesSection limit={7} />
          </ContentWrapper>
          
          <Divider />
          
          <Header>
              <HeaderText>Business</HeaderText>
          </Header>
          <ContentWrapper>
              <TickerRow />
              <NewsSection category="Business" limit={7} />
          </ContentWrapper>
          
          <MobileChartSection>
            <ChartSection charts={chartsData} />
          </MobileChartSection>
          
          <Divider />
          
          <Header>
              <HeaderText>Sports</HeaderText>
          </Header>
          <ContentWrapper>
            <NewsSection category="Sports" limit={7} />
          </ContentWrapper>
          
          <Divider />
          
          <Header>
              <HeaderText>Africa</HeaderText>
          </Header>
          <ContentWrapper>
            <NewsSection category="Africa" limit={7} />
          </ContentWrapper>
          
          <Divider />
          
          <Header>
              <HeaderText>World</HeaderText>
          </Header>
          <ContentWrapper>
            <NewsSection category="World" limit={7} />
          </ContentWrapper>
        </LeftWrapper>
        
        <DesktopChartSection>
          <ChartSection charts={chartsData} />
        </DesktopChartSection>
      </PageGrid>
    </PageWrapper>
  );
}