'use client';

import React from 'react';
import styled from 'styled-components';
import Article from '@/components/article';
import { formatDate } from '@/utils/formatDate';
import { Article as ArticleType } from '@/lib/api/articles';
import NewsAlt from '@/components/newsAlt';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 100px;

  @media only screen and (max-width: 576px) { 
    padding-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    padding-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 32px;
  column-fill: balance;
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: #e7e7e7;
  }

  &:before { left: 33.33%; transform: translateX(-0.75px); }
  &:after { left: 66.66%; transform: translateX(-0.75px); }

  @media only screen and (max-width: 1024px) {
    column-count: 2;
    &:before { left: 50%; }
    &:after { display: none; }
  }

  @media only screen and (max-width: 768px) {
    column-count: 1;
    column-gap: 0;
    &:before, &:after { display: none; }
  }

  & > * { break-inside: avoid; margin-bottom: 24px; }
`;

const InsideAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 12px 12px;

  @media (max-width: 768px) { padding: 12px 8px; }
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

interface Props {
  articles: ArticleType[];
}

export default function ArticlePageClient({ articles }: Props) {
  if (!articles || articles.length === 0) {
    return (
      <PageWrapper>
        <div style={{ padding: '40px', textAlign: 'center', width: '100%' }}>
          <p style={{ fontFamily: 'franklin-normal', color: '#666' }}>
            No articles found in Sports category
          </p>
        </div>
      </PageWrapper>
    );
  }

  const first = articles[0];
  const rest = articles.slice(1);

  const getTagType = (article: ArticleType) => {
    if (article.isBreaking) return 'breaking';
    if (article.isLive) return 'live';
    return undefined;
  };

  return (
    <PageWrapper>
      <ContentWrapper>

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
            <NewsAlt
              tag={getTagType(item)}
              title={item.title}
              description={item.description}
              time={formatDate(item.published_at)}
              subcategory={item.subcategory?.[0] || item.category || ' '}
              image={item.image_url || ''}
              width={800}
              height={450}
              slug={item.slug}
              sourceText={item.source_name}
            />
            {(idx + 1) % 4 === 0 && (
              <InsideAdWrapper>
                <AdLabel>Advertisement</AdLabel>
                <AdWrapper />
              </InsideAdWrapper>
            )}
          </React.Fragment>
        ))}

      </ContentWrapper>
    </PageWrapper>
  );
}