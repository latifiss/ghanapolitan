'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BreakingBanner from './breakingBanner';
import { getBreakingNews } from '@/lib/api/articles';

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  margin-left: 100px;
  margin-right: 100px;

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

const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 2px;
  padding: 0 12px;
`;

const AdLabel = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-family: 'cheltenham-normal';
  color: ${({ theme }) => theme.colors.grayText};
`;

const InsideAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 12px 12px;

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;

const AdWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.adBg};
  margin-bottom: 12px;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  padding: 8px 0 0 0;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0 16px;
  }
`;

const TopRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  padding: 20px 30px;

  @media (max-width: 576px) {
    padding: 0px 16px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0px 16px;
  }
`;

const Logo = styled(Image)`
  height: 55px;
  width: auto;
  object-fit: contain;

  @media (max-width: 576px) {
    height: 35px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 45px;
  }
`;

const OtherSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1.5px solid #000000
`;

const TabRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  @media only screen and (max-width: 576px) {
    justify-content: flex-start;
    padding: 8px 8px 0px 8px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: flex-start;
    padding: 8px 16px 0px 16px;
  }
`;

const Alink = styled(Link)`
  text-decoration: none;
`;

const TabText = styled.p<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.text : theme.colors.text};
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
`;

const TabComponent = styled.div<{ $isActive: boolean; $tabType: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 16px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `4px solid ${theme.colors.text}` : '4px solid transparent'};
`

interface TabProps {
  label: string;
  isActive: boolean;
  href: string;
}

const Tab = ({ label, isActive, href }: TabProps) => (
  <Alink href={href} passHref>
    <TabComponent $isActive={isActive} $tabType={label}>
      <TabText $isActive={isActive}>{label}</TabText>
    </TabComponent>
  </Alink>
);

const Header = () => {
  const pathname = usePathname();
  const [breakingNews, setBreakingNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const tabs = [
    { label: 'Ghana', href: '/ghana-local' },
    { label: 'Business', href: '/business' },
    { label: 'Politics', href: '/politics' },
    { label: 'Arts & Entertainment', href: '/entertainment' },
    { label: 'World', href: '/world' },
    { label: 'Africa', href: '/africa' },
    { label: 'Sports', href: '/sports' },
  ];

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        setIsLoading(true);
        const response = await getBreakingNews();
        
        if (response?.data?.articles && response.data.articles.length > 0) {
          setBreakingNews(response.data.articles);
        } else {
          setBreakingNews([]);
        }
      } catch (error) {
        console.error('Failed to fetch breaking news:', error);
        setBreakingNews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBreakingNews();

    const intervalId = setInterval(fetchBreakingNews, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ComponentWrapper>
      <AdContainer>
        <LabelContainer>
          <AdLabel>Advertisement</AdLabel>
        </LabelContainer>
        <InsideAdWrapper>
          <AdWrapper />
        </InsideAdWrapper>
      </AdContainer>
      <Component>
        <TopRow href="/">
          <div />
          <Logo src="/assets/logos/logo-black.svg" alt="logo" width={322} height={65} />
        </TopRow>

        <OtherSide>
          <TabRow>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                isActive={pathname === tab.href}
                href={tab.href}
              />
            ))}
          </TabRow>
        </OtherSide>
        
        {!isLoading && breakingNews.length > 0 && (
          <BreakingBanner 
            articles={breakingNews.map(article => ({
              title: article.title,
              slug: article.slug
            }))}
          />
        )}
      </Component>
    </ComponentWrapper>
  )
}

export default Header