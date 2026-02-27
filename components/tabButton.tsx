'use client'

import React from 'react';
import styled, { css } from 'styled-components';

const Component = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e7e7e7;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid transparent;
    `}
`;

const Text = styled.p<{ $active?: boolean }>`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0;
  font-family: inherit;
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ $active }) =>
    $active &&
    css`
      color: var(--white);
    `}
`;

interface TabButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void; 
}

const TabButton = ({ label, active, onClick }: TabButtonProps) => {
  return (
    <Component $active={active} onClick={onClick}>
      <Text $active={active}>{label}</Text>
    </Component>
  );
};

export default TabButton;
