'use client'

import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

const ComponentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
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
  text-align: left;
  font-family: 'cheltenham-normal';
  white-space: nowrap;
  text-transform: uppercase;

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
        display: inline-block;
      }
    `}
`

const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'cheltenham-normal';
  text-decoration: none;
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
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
`

interface CardProps {
  tag?: 'analysis' | 'breaking' | 'opinion' | 'live'
  title: string
  description: string
  time: string
  image?: string
  width?: number
  height?: number
}

const Card = ({ tag, title, description, time, image, width = 800, height = 450 }: CardProps) => {
  return (
      <ComponentWrapper>
          <ComponentContent>
      <Tag $type={tag}>{tag === 'analysis' && 'Analysis'}
      {tag === 'breaking' && 'Breaking Card'}
      {tag === 'opinion' && 'Opinion'}
      {tag === 'live' && 'Live Updates'}</Tag>

      <Title>{title}</Title>


      <Description>{description}</Description>

              <Time>{time}</Time>
              </ComponentContent>
      {image && <Thumbnail src={image} alt={title} width={width} height={height} />}
    </ComponentWrapper>
  )
}

export default Card
