'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import LogoStack from '@/components/logoStack'

const ComponentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: none;
  }
`

export const Thumbnail = styled(Image)`
  width: 45%;
  height: auto;
  display: block;
  object-fit: cover;
  margin: 8px 0px;
`

const ComponentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const Tag = styled.p<{ $type?: string }>`
  font-size: 13px;
  font-weight: 600;
  font-family: 'cheltenham-normal';
  text-transform: uppercase;
  white-space: nowrap;

  ${({ $type, theme }) =>
    $type === 'analysis' &&
    css`
      color: ${theme.colors.text};
    `}

  ${({ $type }) =>
    $type === 'breaking' &&
    css`
      color: red;
    `}

  ${({ $type, theme }) =>
    $type === 'opinion' &&
    css`
      color: ${theme.colors.tuatara};
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
      }
    `}
`

const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  font-family: 'cheltenham-normal';
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Description = styled.p`
  font-size: 15px;
  line-height: 1.4;
  font-weight: 500;
  font-family: 'franklin-normal';
  color: ${({ theme }) => theme.colors.grayText};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

const Time = styled.p`
  font-size: 11px;
  font-weight: 500;
  font-family: 'franklin-normal';
  color: ${({ theme }) => theme.colors.grayText};
  text-transform: uppercase;
  white-space: nowrap;
`

interface CardProps {
  tag?: 'analysis' | 'breaking' | 'opinion' | 'live'
  title: string
  description: string
  time: string
  image?: string
  width?: number
  height?: number
  tags?: string[]
  slug?: string
}

const LogosCard = ({
  tag,
  title,
  description,
  time,
  image,
  width = 800,
  height = 450,
  tags,
  slug,
}: CardProps) => {
  const hasTags = tags && tags.length > 0
  const displayTags = hasTags ? tags.slice(0, 3) : []

  const content = (
    <ComponentWrapper>
      <ComponentContent>
        <Tag $type={tag}>
          {tag === 'analysis' && 'Analysis'}
          {tag === 'breaking' && 'Breaking Card'}
          {tag === 'opinion' && 'Opinion'}
          {tag === 'live' && 'Live Updates'}
        </Tag>

        <Title>{title}</Title>
        <Description>{description}</Description>

        <LogosTimeBlock>
          <LogoStack companyNames={displayTags} />
          {hasTags && <Dot />}
          <Time>{time}</Time>
        </LogosTimeBlock>
      </ComponentContent>

      {image && (
        <Thumbnail src={image} alt={title} width={width} height={height} />
      )}
    </ComponentWrapper>
  )

  if (slug) {
    return <StyledLink href={`/article-detail/${slug}`}>{content}</StyledLink>
  }

  return content
}

export default LogosCard