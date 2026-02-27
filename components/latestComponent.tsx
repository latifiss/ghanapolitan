'use client'

import React from 'react'
import styled from 'styled-components'
import SeeFullButton from './seefullButton'
import Link from 'next/link'
import LiveTag from './liveTag'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
`

const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: cheltenham-normal, serif;
  color: var(--primary-main);
`

const ALink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`

const Block = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 4px 12px;
  gap: 10px;
  cursor: pointer;
`

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-main);
  margin-top: 4px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3px;
`

const ContentTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  font-family: 'cheltenham-normal';
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (max-width: 992px) {
    font-size: 17px;
  }
`

const ContentBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`

const Source = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-family: 'cheltenham-normal';
  color: ${({ theme }) => theme.colors.grayText};
`

const SourceAuth = styled.p<{ category: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ category }) =>
    category === 'News'
      ? '#FF0000'
      : category === 'Business'
      ? '#00AA00'
      : category === 'Sports'
      ? '#07b0fb'
      : category === 'Technology'
      ? '#FFA500'
      : category === 'Entertainment'
      ? 'rgb(251, 119, 1)'
      : category === 'Africa'
      ? 'rgb(76, 0, 255)'
      : category === 'World'
      ? 'rgb(49, 104, 182)'
      : '#866D50'};
`

const Published = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayText};
`

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`

interface LatestItemProps {
  title: string
  source?: string
  auth?: string
  publishedAt: string
  category?: string[]
  link: string
  isLive: boolean
}

export const LatestItem = ({
  title,
  source,
  publishedAt,
  auth,
  category,
  link,
  isLive,
}: LatestItemProps) => {
  return (
    <ALink href={link}>
      <Block>
        <Content>
          {(isLive || (auth && auth !== 'Ghanaian web')) && (
            <ContentTop>
              <div>{isLive && <LiveTag label="LIVE" category={category?.[0] || ''} />}</div>
              <div>
                {auth && auth !== 'Ghanaian web' && (
                  <SourceAuth category={category?.[0] || ''}>
                    From {auth}
                  </SourceAuth>
                )}
              </div>
            </ContentTop>
          )}

          <ContentTitle>{title}</ContentTitle>

          <ContentBase>
            <Source>{source}</Source>
            <Published>{publishedAt}</Published>
          </ContentBase>
        </Content>
      </Block>
    </ALink>
  )
}

interface LatestComponentProps {
  data?: LatestItemProps[]
  isLoading?: boolean
  error?: Error | null
}

export const LatestComponent = ({
  data = [],
  isLoading = false,
  error = null,
}: LatestComponentProps) => {
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Component>
      <Header>
        <HeaderText>Latest News</HeaderText>
        <SeeFullButton label="see all" />
      </Header>

      <NewsContent>
        {data.length === 0 ? (
          <p>No news available.</p>
        ) : (
          data.map((newsItem, index) => (
            <LatestItem key={index} {...newsItem} />
          ))
        )}
      </NewsContent>
    </Component>
  )
}
