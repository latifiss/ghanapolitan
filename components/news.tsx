'use client'

import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import LogoStack from './logoStack'
import { getSourceImage } from '@/utils/getSourceImage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 8px;
  border-bottom: 1.5px solid #e7e7e7;

  @media (max-width: 576px) {
    border-bottom: 0.5px solid #e7e7e7;
     padding-right: 0px;
    padding-left: 0px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    border-bottom: 0.5px solid #e7e7e7;
     padding-right: 0px;
    padding-left: 0px;
  }
`

const ComponentWrapper = styled.div`
  width: 100%;
  margin-top: 0px; 
`

export const Thumbnail = styled(Image)`
  float: right; 
  margin-left: 10px; 
  width: 60%; 
  min-height: 83px;
  max-width: 250px; 
  height: auto;
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
  font-size: 24px; 
  line-height: 28px;
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
  margin-top: 3px;
`

const SourceText = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'franklin-normal';
  white-space: nowrap;
  clear: both; 
`

const SourceImage = styled(Image)`
  width: 14px;  
  height: 14px;
  object-fit: contain;
`

const LogosTimeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.grayText};
  border-radius: 50%;
`

interface NewsProps {
  tag?: 'analysis' | 'breaking' | 'opinion' | 'live'
  title: string
  description: string
  time: string
  image: string
  width?: number
  height?: number
  subcategory?: string
  tags?: string[]
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

const News = ({ 
  tag, 
  title, 
  description, 
  time, 
  image, 
  width = 800, 
  height = 450,
  subcategory = '',
  tags,
  sourceText
}: NewsProps) => {
  const tagText = getTagText(tag)
  const hasTags = tags && tags.length > 0
  const displayTags = hasTags ? tags.slice(0, 3) : []
  const isMarketsCategory = subcategory.toLowerCase() === 'markets'
  const shouldShowLogos = isMarketsCategory && hasTags
  const shouldShowSource = sourceText && sourceText.toLowerCase() !== 'ghanapolitan'
  const sourceImage = sourceText ? getSourceImage(sourceText) : '/assets/sources/default.png'

  return (
    <Wrapper>
      {tagText && <Tag $type={tag}>{tagText}</Tag>}
      <Title>{title}</Title>
      <ComponentWrapper>
        <ComponentContent>
          <Thumbnail src={image} alt={title} width={width} height={height} />
          <Description>{description}</Description>
        </ComponentContent>
      </ComponentWrapper>
      {shouldShowLogos ? (
        <LogosTimeBlock>
          <LogoStack companyNames={displayTags} />
          <Dot />
          <Time>{time}</Time>
        </LogosTimeBlock>
      ) : (
        <Time>{time}</Time>
      )}
      {shouldShowSource && (
        <SourceRow>
          <SourceImage src={sourceImage} alt={sourceText} width={14} height={14} />
          <SourceText>{sourceText}</SourceText>
        </SourceRow>
      )}
    </Wrapper>
  )
}

export default News