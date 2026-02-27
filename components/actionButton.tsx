'use client';

import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.1s ease;
  height: 44px;

  &:active {
    transform: scale(0.98);
  }
`;

const Label = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

interface ActionButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const ActionButton = ({ label, onClick, className }: ActionButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className={className}
      role="button" 
      tabIndex={0} 
    >
      <Label>{label}</Label>
    </Button>
  );
};

export default ActionButton;