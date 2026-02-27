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
  padding: 8px 0 8px 0;
  border-top: 1px solid rgba(231, 231, 231, 0.5);
`;

const TickerImage = styled(Image)`
    object-fit: cover;
    border-radius: 999px;
`

const Stock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const StockContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StockCombo = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const StockSymbol = styled.p`
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

export const StockItem: React.FC<DataItemProps> = ({ label, code, image }) => {

  return (
    <Block>
          <Stock>
          <TickerImage
          src={image}
          alt="ticker"
          width={30}
          height={30}
        />
              <StockContent>
              <StockCombo>{label}</StockCombo>
              <StockSymbol>{code}</StockSymbol>
        </StockContent>
      </Stock>
      <Info>
        <DataChangeContainer/>
        <DataChangeContainer/>
      </Info>
    </Block>
  );
};

