'use client'

import { LatestItem } from '@/components/latestComponent';
import TabButton from '@/components/tabButton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getArticles, getArticlesByCategory } from '@/lib/api/articles';
import { formatDate } from '@/utils/formatDate';
import ActionButton from '@/components/actionButton';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 16px 30px 60px 30px;
  max-width: 100%;

  @media only screen and (max-width: 576px) { 
    flex-direction: column;
    align-items: center;
    padding: 14px 8px 40px 8px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
    padding: 16px 20px 50px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 16px 24px 50px 24px;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 0px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media only screen and (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  @media only screen and (max-width: 768px) { 
    padding: 8px 0px 0px 0px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderText = styled.p`
  text-align: left;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 800;
  font-family: 'cheltenham-normal';
  text-decoration: none;

  [data-theme='dark'] & {
    color: ${({ theme }) => theme.colors.text};
  }

  [data-theme='light'] & {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: 12px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  padding: 12px 0px;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 12px 0px; 
  }
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-top: 12px;
  width: 100%;
`

const tabs = [
  'All',
  'Business',
  'Sports',
  'Local',
  'Entertainment',
  'Africa',
  'World',
  'Tech',
];

const Page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState({
    initial: true,    
    more: false       
  });
  const [page, setPage] = useState(1);
  const limit = 50;

  const fetchNews = async (category: string, pageNumber: number, append = false) => {
    if (append) {
      setLoading(prev => ({...prev, more: true}));
    } else {
      setLoading({initial: true, more: false});
    }
    
    try {
      const data = category === 'All'
        ? await getArticles(pageNumber, limit)
        : await getArticlesByCategory(category, pageNumber, limit);

      if (append) {
        setNews(prev => [...prev, ...(data.data?.articles || [])]);
      } else {
        setNews(data.data?.articles || []);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      if (!append) setNews([]);
    } finally {
      if (append) {
        setLoading(prev => ({...prev, more: false}));
      } else {
        setLoading({initial: false, more: false});
      }
    }
  };

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(activeTab, nextPage, true);
  };

  useEffect(() => {
    setPage(1);
    fetchNews(activeTab, 1);
  }, [activeTab]);

  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <Header>
            <HeaderText>Latest News</HeaderText>
          </Header>
          <TabsHeader>
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </TabsHeader>
          <LeftContent>
            {loading.initial ? (
              <div></div> 
            ) : news.length === 0 ? (
              <p>No news found.</p>
            ) : (
              news.map((newsItem, index) => (
                <LatestItem
                  key={index}
                  title={newsItem.title}
                  source={newsItem.label}
                  auth={newsItem.source_name}
                  category={newsItem.category} 
                  publishedAt={formatDate(newsItem.published_at)}
                  link={
                    newsItem.isLive || newsItem.wasLive
                      ? `/live-article-detail/${newsItem._id}`
                      : `/article-detail/${newsItem._id}`
                  }                  
                  isLive={newsItem.isLive}
                />

              ))
            )}
            <LeftFooter>
              {news.length > 0 && (
                <ActionButton
                  onClick={fetchMoreData}
                  label={
                    loading.more ? (
                      <ClipLoader size={16} color="#fff" />
                    ) : (
                      'Load more'
                    )
                  }
                />
              )}
            </LeftFooter>
          </LeftContent>
        </LeftColumn>
        <RightColumn></RightColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default Page;