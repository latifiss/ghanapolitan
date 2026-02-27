'use client';

import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 2px;
    padding: 12px 12px;
`

const ComponentTitle = styled.p`
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.grayText};
    text-align: left;
`;

const ComponentBody = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
`;

const ComponentTag = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    margin: 0;
    font-family: 'franklin-normal';
    color: #2a5599;
    text-align: left;
    margin-top: -8px;
`;

const Event = () => {
  return (
      <Component>
          <ComponentTitle>Next Earnings date</ComponentTitle>
          <ComponentBody>Feb 28, 2024</ComponentBody>
          <ComponentTag>In 2 days</ComponentTag>
    </Component>
  )
}

export default Event