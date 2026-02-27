'use client'

import ExtendedActions from '@/components/extendedActions';
import NewsCard from '@/components/newscard';
import NewsTimeline from '@/components/newsTimeline';
import Snippet from '@/components/snippet';
import { newsItems, snippetsData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { generateRandomText } from '../article-detail/pp';

const PageWrapper = styled.div`
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    margin-left: 250px;
    margin-right: 250px;
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

const LayoutGrid = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--border);

  @media only screen and (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-right: 1px solid var(--border);
  padding: 0;

  @media only screen and (max-width: 768px) { 
    padding-top: 8px; 
    border-right: none; 
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  @media only screen and (max-width: 768px) { display: none; }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 24px;
  gap: 4px;
`;

const Title = styled.p`
  font-size: 46px;
  line-height: 46px;
  font-weight: 800;
  font-style: italic;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'cheltenham-normal';
  margin-bottom: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const ArticleLabel = styled.p`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  font-family: 'cheltenham-normal';
  color: var(--red);
`;

const LiveTag = styled.p`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: red;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    display: inline-block;
    animation: blink 1s infinite ease-in-out;
  }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
`;

const TimeLabel = styled.p`
  font-size: 17px;
  line-height: 21px;
  font-weight: 500;
  color: var(--gray-text);
  margin: 0;
  font-family: 'cheltenham-normal';
`;

const SirenTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--border);
`;

const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0 16px 0;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
`;

const ArticleThumbnail = styled(Image)`
  width: 100%;
  height: 448px;
  object-fit: cover;

  @media only screen and (max-width: 768px) { height: 252px; }
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding-bottom: 40px;
`;

const TimelineContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  margin: -30px 0 -16px 0;

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const OtherSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0 100px 0;
  gap: 12px;
`;

const OtHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;

const OtText = styled.p`
  font-size: 22px;
  line-height: 28px;
  font-weight: 800;
  font-family: 'cheltenham-normal';
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3px;
`;

const Page = () => {
  const randomTitle = generateRandomText(8, true); 
  const randomDescription = generateRandomText(40); 

  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <Head>
            <Title>{randomTitle}</Title>
            <Description>{randomDescription}</Description>
            <ActionsRow>
              <ExtendedActions/>
            </ActionsRow>
          </Head>

          <ArticleContentContainer>
            <TimelineContainer>
              <NewsTimeline items={newsItems} />
            </TimelineContainer>

            <ThumbnailContainer>
              <ArticleThumbnail
                src="https://img.global.news.samsung.com/global/wp-content/uploads/2025/07/Samsung-TVs-and-Displays-Tizen-OS-Licensing-Program-2025-New-Global-Partners-and-Enhanced-Offerings_thumb728.jpg"
                alt="article"
                width={648}
                height={478}
              />
            </ThumbnailContainer>

            <ArticleContent>
              {snippetsData?.snippets?.map((snippet, index: number) => (
                <Snippet key={index} {...snippet} />
              ))}
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>

        <RightColumn></RightColumn>
      </LayoutGrid>

      <OtherSection>
        <OtHead>
          <OtText>More News</OtText>
        </OtHead>

        <NewsCard
          tag="opinion"
          title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
          description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
          time="19 MIN AGO"
          image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        />
      </OtherSection>
    </PageWrapper>
  );
};

export default Page;
