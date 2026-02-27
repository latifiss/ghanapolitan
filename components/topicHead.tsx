'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
`

const TopicIcon = styled(Image)`
    width: auto;
    height: 16px;
`

const TopicsText = styled.p`
    font-size: 15px;
    font-weight: 600;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
`;

interface TopicProps {
    image?: string;
    label: string;
}

const TopicHead = ({image, label}: TopicProps) => {
  return (
      <ComponentWrapper>
          {image && <TopicIcon src={image} alt={label} width={16} height={16} />}
          <TopicsText>{label}</TopicsText>
    </ComponentWrapper>
  )
}

export default TopicHead