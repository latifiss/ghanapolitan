'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
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
    height: 30px;
    transition: transform 0.1s ease;

    &:active {
        transform: scale(0.98);
    }
`

const ComponentLabel = styled.p`
    text-align: left;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    font-family: inherit;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const ForwardButton = () => {
  return (
    <StyledLink href="/markets">
      <Component>
        <ComponentLabel>See full markets data</ComponentLabel>
        <Image src='/icons/arrow-black.svg' alt='icon' width={30} height={30}/>
      </Component>
    </StyledLink>
  )
}

export default ForwardButton