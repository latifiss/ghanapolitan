'use client'

import NewsCard from '@/components/newscard';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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

const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    padding-bottom: 12px;
    gap: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media only screen and (max-width: 576px) { 
        margin-bottom: 16px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         margin-bottom: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    gap: 12px;
`;

const ComponentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    padding: 0px 12px;
`;

const TopicIcon = styled(Image)`
    width: 24px;
    height: 24px;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 4px;
`

const TopicsText = styled.p`
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-bottom: 3px;
`;

const HeaderText = styled.p`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.grayText};
`;

interface TopicProps {
    image?: string;
    label: string;
}

export const Topic = ({image, label}: TopicProps) => {
  return (
      <ComponentWrapper>
          {image && (
            <TopicIcon 
              src={image} 
              alt={label} 
              width={24} 
              height={24} 
            />
          )}
          <TextBlock>
          <TopicsText>{label}</TopicsText>
              <HeaderText>News Updates</HeaderText>
</TextBlock>
      </ComponentWrapper>
  )
}

const page = () => {
  return (
      <PageWrapper>
          <Head>
              <Topic 
                  image='/topics/ndc.png'
                  label='NDC Delegate Confress'
              />
          </Head>
          <Content>
              <NewsCard
                  tag="live"
                  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
                  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
                  time="19 MIN AGO"
                  image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              />
              <NewsCard
                  tag=""
                  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
                  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
                  time="19 MIN AGO"
                  image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              />
          </Content>
      </PageWrapper>
  )
}

export default page;
