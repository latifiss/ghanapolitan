'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface SnippetProps {
  time?: string;
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  } | null;
  borderColor?: string;
  maxLines?: number;
  variant?: 'default' | 'compact';
}

const SnippetContainer = styled.div<{ $borderColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 12px;
  background: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 2px solid ${({ theme }) => theme.colors.red};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const TimeText = styled.p`
  text-align: left;
  font-size: 13px;
  line-height: 1.7;
  font-weight: 500;
  margin: 0;
  font-family: 'cheltenham-normal';
  color: var(--gray-text);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1px;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
  aspect-ratio: 16/9; 
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 28px;
    line-height: 32px;
    font-weight: 800;
    font-style: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'cheltenham-normal';
    text-decoration: none;
    margin-bottom: 3px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media only screen and (max-width: 576px) { 
        font-size: 24px;
    line-height: 28px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         font-size: 24px;
    line-height: 28px;
    }
`;

const Text = styled.p`
  font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'franklin-normal';
    text-decoration: none;
    overflow: hidden;
`;

const Snippet: React.FC<SnippetProps> = ({
  time,
  title,
  text,
  image = null, 
  borderColor = 'var(--red)',
  maxLines = 15,
  variant = 'default'
}) => {
  return (
    <SnippetContainer $borderColor={borderColor}>
      {time && (
        <Header>
          <TimeText>{time}</TimeText>
        </Header>
      )}
      <ContentContainer>
        <Title $maxLines={maxLines} $variant={variant}>{title}</Title>
        {image && (
          <ThumbnailWrapper>
            <ThumbnailImage 
              src={image.src}
              alt={image.alt}
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </ThumbnailWrapper>
        )}
        <Text $variant={variant} dangerouslySetInnerHTML={{ __html: text }} />
      </ContentContainer>
    </SnippetContainer>
  );
};

export default Snippet;