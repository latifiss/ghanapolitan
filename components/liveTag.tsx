'use client'

import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Wrapper = styled.div<{ category: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 4px;
  background-color: ${({ theme }) => theme.colors.red};
`;

const Label = styled.p`
  text-align: left;
  color: var(--white);
  font-size: 13px;
  line-height: 16.8px;
  font-weight: 700;
  font-family: cheltenham-normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const Torcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.5px;
  height: 10.5px;
  background-color: var(--white);
  border-radius: 50%;
  margin-right: 4px;
  animation: ${blinkAnimation} 1s ease-in-out infinite;
`;

interface LiveTagProps {
  label: string;
  category: string;
}

const LiveTag = ({ label, category }: LiveTagProps) => {
  return (
    <Wrapper category={category}>
      <Torcher />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default LiveTag;
