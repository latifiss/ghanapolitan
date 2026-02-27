'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface DataItemProps {
  label: string;
  code: string;
  image?: string;
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-top: 1px solid rgba(231, 231, 231, 0.5);
`;

const TickerImage = styled(Image)`
  height: 100%;
  object-fit: contain;
`;

const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const CurrencyContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrencyCombo = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CurrencySymbol = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayText};;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

const DataChangeContainer = styled(Skeleton)`
  height: 16px;
  border-radius: 0px;
  width: 40px;
`;

export const CurrencyItem: React.FC<DataItemProps> = ({ label, code, image }) => {

  return (
    <Block>
      <Currency>
        {image && (
          <TickerImage src={image} alt="ticker" width={44} height={24} />
        )}
        <CurrencyContent>
          <CurrencyCombo>{label}</CurrencyCombo>
          <CurrencySymbol>{code}</CurrencySymbol>
        </CurrencyContent>
      </Currency>
      <Info>
      <DataChangeContainer/>
      <DataChangeContainer/>
      </Info>
    </Block>
  );
};
