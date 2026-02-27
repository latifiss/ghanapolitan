'use client';

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  gap: 8px;
  border: 1px solid var(--border);
  background-color: var(--white);
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.1s ease;
  height: 36px;

  &:active {
    transform: scale(0.98);
  }
`;

const ComponentLabel = styled.p`
  text-align: left;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 500;
  text-decoration: none;
  font-family: inherit;
`;

const Icon = styled(FaArrowRightLong)`
  color: var(--text);
`;

interface SeeFullButtonProps {
  label: string;
}

const SeeFullButton = ({label}: SeeFullButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/latest');
  };

  return (
    <Component onClick={handleClick}>
      <ComponentLabel>{label}</ComponentLabel>
      <Image src='/arrow-black.svg' alt='icon' width={30} height={30}/>
    </Component>
  );
};

export const SeeDetail = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/latest');
  };

  return (
    <Component onClick={handleClick}>
      <Image src='/arrow-black.svg' alt='icon' width={30} height={30}/>
    </Component>
  );
};

export default SeeFullButton;
