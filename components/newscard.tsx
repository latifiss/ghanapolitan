'use client'

import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import Actions from './actions'
import { getSourceImage } from '@/utils/getSourceImage'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #e7e7e7;

  @media (max-width: 576px) {
    border-bottom: 0.5px solid #e7e7e7;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    border-bottom: 0.5px solid #e7e7e7;
  }
`

const ComponentWrapper = styled.div`
  width: 100%;
  margin-top: 0px; 
`

export const Thumbnail = styled(Image)`
  float: right; 
  margin-left: 20px; 
  width: 35%; 
  min-height: 103px;
  max-width: 250px; 
  max-height: 162px;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 576px) { 
    width: 45%; 
    min-height: 106px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    width: 45%; 
    min-height: 106px;
  }
`

const ComponentContent = styled.div`
  display: block; 
  width: 100%; 
  overflow: hidden; 
`

const Tag = styled.p<{ $type?: string }>`
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  font-family: 'cheltenham-normal';
  white-space: nowrap;
  text-transform: uppercase;
  margin-bottom: 2px;

  ${({ $type, theme }) =>
    $type === 'analysis' &&
    css`
      color: #333;
    `}

  ${({ $type }) =>
    $type === 'breaking' &&
    css`
      color: red;
    `}

  ${({ $type, theme }) =>
    $type === 'opinion' &&
    css`
      color: #008080;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    `}

  ${({ $type }) =>
    $type === 'live' &&
    css`
      color: red;
      display: flex;
      align-items: center;
      gap: 4px;

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 50%;
        display: inline-block;
      }
    `}
`

const Title = styled.p`
  font-size: 22px; 
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  color: #000;
  font-family: 'cheltenham-normal';
  text-decoration: none;
  margin-bottom: 8px; 
  display: block; 
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  text-decoration: none;
  display: block; 
  overflow: visible;
  word-wrap: break-word; 
  overflow-wrap: break-word;
`

const Time = styled.p`
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 3px; 
  clear: both; 
`

const SourceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
`

const SourceText = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'franklin-normal';
  white-space: nowrap;
  margin-top: 3px; 
  clear: both; 
`

const SourceImage = styled(Image)`
  width: 14px;  
  height: 14px;
  object-fit: contain;
`

const Label = styled.p<{ $subcategory: string }>`
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  font-family: franklin-normal;
  color: ${({ $subcategory }) => getSubcategoryColor($subcategory)};
  text-transform: uppercase;
`;

const TagAreaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  margin-bottom: 2px;
`

const getSubcategoryColor = (subcategory: string): string => {
  const distinctColors: Record<string, string> = {
    'Government': '#D32F2F',
    'Elections': '#FF6B00',
    'Policy': '#2196F3',
    'International Relations': '#4CAF50',
    'Local Politics': '#9C27B0',
    'Community': '#FF4081',
    'Crime & Safety': '#303F9F',
    'Infrastructure': '#00BCD4',
    'Transport': '#8BC34A',
    'Environment': '#795548',
    'Weather': '#FF9800',
    'Public Services': '#673AB7',
    'Social Issues': '#F44336',
    'Regional': '#009688',
    'Economy': '#FF5722',
    'Markets': '#3F51B5',
    'Companies & Investments': '#E91E63',
    'Entrepreneurship': '#00BCD4',
    'Finance': '#4CAF50',
    'Football': '#FF9800',
    'Basketball': '#F44336',
    'Athletics': '#2196F3',
    'Boxing': '#9C27B0',
    'Other sports': '#4CAF50',
    'Ghana Football': '#FF6B00',
    'Premier League': '#303F9F',
    'WNBA': '#E91E63',
    'North Africa': '#FF5722',
    'West Africa': '#3F51B5',
    'East Africa': '#4CAF50',
    'Central Africa': '#9C27B0',
    'Southern Africa': '#00BCD4',
    'Movies': '#E91E63',
    'Music': '#FF9800',
    'Celebrities': '#9C27B0',
    'Radio & TV Shows': '#2196F3',
    'Events & Festivals': '#FF5722',
    'Arts & Culture': '#4CAF50',
    'Comedy': '#FF4081',
    'Kumawood': '#FF6B00',
    'TV Series': '#1DB954',
    'Romance': '#E91E63',
    'Drama': '#3F51B0',
    'Action & Sci-Fi': '#FF5722',
    'AI & Infrastructure': '#00BCD4',
    'Software': '#2196F3',
    'Hardware': '#FF9800',
    'Startups': '#4CAF50',
    'Gadgets': '#9C27B0',
    'Social Media': '#E91E63',
    'Other Tech': '#795548',
    'Europe': '#303F9F',
    'Asia': '#F44336',
    'Americas': '#4CAF50',
    'Middle East': '#FF9800',
    'Medical': '#F44336',
    'Nutrition': '#4CAF50',
    'Healthcare': '#2196F3',
    'Schools': '#FF6B00',
    'Universities': '#303F9F',
    'Research': '#009688',
    'Fashion': '#E91E63',
    'Food': '#FF9800',
    'Travel': '#2196F3',
    'Culture': '#795548',
    'Relationships': '#FF4081',
  };

  if (distinctColors[subcategory]) {
    return distinctColors[subcategory];
  }

  const stringToDistinctColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 7) - hash);
    }
    
    const hue = (hash * 137) % 360;
    const saturation = 70 + (hash % 30);
    const lightness = 40 + (hash % 20);
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return stringToDistinctColor(subcategory);
};

interface NewsProps {
  tag?: 'analysis' | 'breaking' | 'opinion' | 'live'
  title: string
  description: string
  time: string
  image: string
  width?: number
  height?: number
  subcategory: string
  sourceText?: string
}

const getTagText = (tag: NewsProps['tag']) => {
  switch (tag) {
    case 'analysis':
      return 'Analysis'
    case 'breaking':
      return 'Breaking News'
    case 'opinion':
      return 'Opinion'
    case 'live':
      return 'Live Updates'
    default:
      return null
  }
}

const NewsCard = ({ 
  tag, 
  title, 
  description, 
  time, 
  image, 
  subcategory,
  sourceText,
  width = 800, 
  height = 450 
}: NewsProps) => {
  const tagText = getTagText(tag)
  const shouldShowSource = sourceText && sourceText.toLowerCase() !== 'Ghanapolitan'
  const sourceImage = sourceText ? getSourceImage(sourceText) : '/assets/sources/default.png'

  return (
    <Wrapper>
      <ComponentContent>
        <TagAreaRow>
          <Label $subcategory={subcategory}>
            {subcategory}
          </Label>
          {tagText && <Tag $type={tag}>{tagText}</Tag>}
        </TagAreaRow>
        <Title>{title}</Title>
        <Time>{time}</Time>
        {shouldShowSource && (
          <SourceRow>
            <SourceImage src={sourceImage} alt={sourceText} width={14} height={14} />
            <SourceText>{sourceText}</SourceText>
          </SourceRow>
        )}
      </ComponentContent>
      <Thumbnail src={image} alt={title} width={width} height={height} />
    </Wrapper>
  )
}

export default NewsCard