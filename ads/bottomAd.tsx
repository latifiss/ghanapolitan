'use client'

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation'; 

const AdLabel = styled.div`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  white-space: nowrap;
  margin-top: 3px;
`;

const AdWrapper = styled.div`
  width: 100%;
  max-width: 728px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.adBg};
  margin-bottom: 12px;
`;

const MobileInsertWrapper = styled.div`
  display: none;
  width: 100%;

  @media only screen and (max-width: 768px) { 
    display: block; 
    width: 100%;
  }
`;

const InsideAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 12px 12px;

  @media (max-width: 768px) { padding: 12px 8px; }
`;

const BottomAdWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.adBg};
  display: none;
  justify-content: center;
  z-index: 1000;
`;

const BottomAd = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log('Page changed:', pathname);
  }, [pathname]);

  return (
    <BottomAdWrapper>
      <InsideAdWrapper>
        <AdLabel>Advertisement</AdLabel>
        <AdWrapper />
      </InsideAdWrapper>
    </BottomAdWrapper>
  );
};

export default BottomAd;
