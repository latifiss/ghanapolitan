'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    max-width: fit-content;
    padding: 8px 12px 8px 0px;
`

const TickerImageContainer = styled.div`
    width: auto;
    height: 44px;
`

const TickerImage = styled(Image)`
    height: 100%;
    object-fit: contain;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    width: 100%;
    padding: 8px 0px;
`

const Label = styled.p`
    text-align: left;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
    font-family: 'cheltenham-normal';
    text-decoration: none;
    font-family: inherit;

    [data-theme='dark'] & {
    color: var(--text);
    }

    [data-theme='light'] & {
        color: var(--text);
    }
`

const DateNote = styled.p`
    text-align: left;
    font-size: 10px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    font-family: inherit;
    color: #7f7f7f;
    margin-bottom: 4px;

    [data-theme='dark'] & {
    color: var(--gray-text);
    }

    [data-theme='light'] & {
        color: var(--gray-text);
    }
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap:2px;
`

const DataItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
`

const DataLabel = styled.p`
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
    color: var(--text);
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const DataResult = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    gap: 4px;
    width: 100%;
`

const DataValue = styled.p`
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
    color: var(--text);
    font-family: 'cheltenham-normal';
`

const DataMetric = styled.span`
    font-size: 13px;
    line-height: 1.2;
    font-weight: 600;
    color: var(--text);
`

interface DataChangeProps {
  $isPositive: boolean;
}

const DataChangeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0px;
    width: 100%;
`

const DataChange = styled.p<{
  $isPositive: boolean;
  $isUnchanged: boolean;
}>`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: ${props => 
    props.$isUnchanged 
      ? '#888888' 
      : props.$isPositive 
        ? '#13D14C' 
        : '#FF0606'
  };
`;

const Icon = styled(Image)`
    width: 16px;
    height: 16px;
    object-fit: contain;
`

interface DataItemProps {
  label: string;
  value: number | string;
  change: number | string;
  metric?: string;
}

interface TickerItem {
  label: string;
  value: string;
  change: number;
  metric?: string;
}

interface TickerProps {
  title: string;
  date: string;
  items: TickerItem[];
  imageSrc: string;
  imageAlt: string;
}

const DataComponent: React.FC<DataItemProps> = ({
  label,
  value,
  change,
  metric
}) => {
  const isPositive = Number(change) > 0;
  const isNegative = Number(change) < 0;
  const isUnchanged = Number(change) === 0;

  const iconSrc = isPositive 
    ? '/assets/icons/up.svg' 
    : isNegative 
      ? '/assets/icons/down.svg' 
      : null;
  const iconAlt = isPositive ? 'increase' : 'decrease';

  return (
    <DataItem>
      <DataLabel>{label}</DataLabel>
      <DataResult>
        <DataValue>
          {value}
          {metric && <DataMetric>{metric}</DataMetric>}
        </DataValue>
        <DataChangeContainer>
          <DataChange 
            $isPositive={isPositive} 
            $isUnchanged={isUnchanged}
          >
            {Math.abs(Number(change))}%
          </DataChange>
          {!isUnchanged && iconSrc && (
            <Icon
              src={iconSrc}
              alt={iconAlt}
              width={16}
              height={16}
            />
          )}
        </DataChangeContainer>
      </DataResult>
    </DataItem>
  );
};

export const Ticker: React.FC<TickerProps> = ({
  title,
  date,
  items,
  imageSrc,
  imageAlt
}) => {
  return (
    <Component>
      <TickerImageContainer>
        <TickerImage
          src={imageSrc}
          alt={imageAlt}
          width={44}
          height={64}
        />
      </TickerImageContainer>
      <Content>
        <Label>{title}</Label>
        <DateNote>{date}</DateNote>
        <DataContainer>
          {items.map((item, index) => (
            <DataComponent
              key={index}
              label={item.label}
              value={item.value}
              change={
                typeof item.change === 'number'
                  ? item.change.toFixed(2)
                  : item.change
              }
              metric={item.metric}
            />
          ))}
        </DataContainer>
      </Content>
    </Component>
  );
};

export const BOGTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/core/bog.png"
    imageAlt="ticker"
  />
);

export const GSETicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/core/gse.png"
    imageAlt="ticker"
  />
);

export const USDTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/forex/usd-ghs.png"
    imageAlt="ticker"
  />
);

export const EURTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/forex/EUR-ghs.png"
    imageAlt="ticker"
  />
);

export const GoldTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/core/goldbod.png"
    imageAlt="ticker"
  />
);

export const BrentTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/core/comac.png"
    imageAlt="ticker"
  />
);

export const CocobodTicker = (props: Omit<TickerProps, 'imageSrc' | 'imageAlt'>) => (
  <Ticker
    {...props}
    imageSrc="/assets/core/cocobod.png"
    imageAlt="ticker"
  />
);