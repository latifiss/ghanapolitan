'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.red};
  position: sticky;
  width: 100%;
  z-index: 5;
  box-sizing: border-box;
`;

const BannerLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'franklin-normal';
  text-decoration: none;
  margin: 0;
  line-height: 1.1;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BreakingText = styled.span`
  font-size: 17px;
  font-weight: 700;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'cheltenham-normal';
  white-space: nowrap;
  margin-right: 6px; 
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed || '#cc0000'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface BreakingBannerProps {
    articles: Array<{
        title: string;
        slug: string;
    }>;
}

const BreakingBanner = ({ articles }: BreakingBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (articles.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [articles.length]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % articles.length
    );
  };
  
  if (articles.length === 0) return null;
  
  const currentArticle = articles[currentIndex];
  
  return (
    <ComponentWrapper>
      {articles.length > 1 && (
        <NavButton onClick={handlePrev} disabled={articles.length <= 1}>
          <ChevronLeft size={20} />
        </NavButton>
      )}
      
      <BannerLink href={`/article-detail/${currentArticle.slug}`}>
        <Text>
          <BreakingText>Breaking:</BreakingText>
          {currentArticle.title}
        </Text>
      </BannerLink>
      
      {articles.length > 1 && (
        <NavButton onClick={handleNext} disabled={articles.length <= 1}>
          <ChevronRight size={20} />
        </NavButton>
      )}
    </ComponentWrapper>
  )
}

export default BreakingBanner