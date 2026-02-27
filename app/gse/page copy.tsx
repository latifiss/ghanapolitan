'use client';

import React from 'react';
import styled from 'styled-components';
import IndexChart, { ChartDataPoint } from '@/components/indexChart';
import { curr } from '@/data';
import { CurrencyItem } from '@/components/currencyItems';
import Image from 'next/image';
import { StockItem } from '@/components/stockItem';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 16px 30px 60px 30px;
    max-width: 100%;

    @media only screen and (max-width: 576px) { 
        flex-direction: column;
        align-items: center;
        padding: 12px 16px 60px 16px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        flex-direction: column;
        align-items: center;
        padding: 12px 20px 60px 20px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        padding: 16px 24px 60px 24px;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 30px;
    width: 100%;

    @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 16px;
  }
`

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 12px;
  background: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.1px solid var(--border);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 8px;
  width: 100%;
`;

const HeaderText = styled.p`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin: 0;
  font-family: 'cheltenham-normal';
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 22px;
  }
`;

const SubHeader = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0;
  font-family: 'cheltenham-normal';
  color: ${({ theme }) => theme.colors.text};
`;

const ChartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--gray-text);
  width: 100%;
  margin-top: 16px;
`;

const DataSource = styled.span`
  display: none;
`;

const LastUpdated = styled.span`
  font-size: 12px;
  line-height: 1.2;
  color: var(--gray-text);
`;

const OtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
`;

export default function HomePage() {
  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit'
    });
  };

  const chartData: (ChartDataPoint & { originalDate: string })[] = curr.data.map((point) => ({
    date: formatDate(point.timestamp),
    value: point.price,
    originalDate: point.timestamp
  }));

  const xAxisTickFormatter = (value: string): string => {
    const isMidnight = value.includes('00:00');
    return isMidnight ? value.split(',')[0] : '';
  };

  const formatTooltip = (data: any): string => {
    if (!data.payload?.[0]) return '';
    const payload = data.payload[0].payload;
    const volume = curr.data.find(d => d.timestamp === payload.originalDate)?.volume ?? 0;
    return `${new Date(payload.originalDate).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })} : ${payload.value.toFixed(2)} GHS/USD\nVolume: ${volume.toLocaleString()}`;
  };

  return (
      <PageWrapper>
          <Wrapper>
      <ChartItem>
        <Header>
          <HeaderText>Currencies</HeaderText>
          <Currency>
            <CurrencyItem
              image="/assets/forex/usd-ghs.png"
              label="Dollar to Cedi"
              code="USDGHS"
              value="11.20"
              change={-0.35}
            />
          </Currency>
        </Header>

        <IndexChart
          data={chartData}
          color="#27ae60"
          height={400}
          showGrid
          xAxisOptions={{
            tickFormatter: xAxisTickFormatter,
            tickRotation: -45,
            interval: Math.ceil(chartData.length / 10)
          }}
          yAxisOptions={{
            tickFormat: (value: number) => value.toFixed(2),
            domain: ['dataMin - 0.5', 'dataMax + 0.5'],
            label: {
              value: 'GHS/USD',
              angle: -90,
              position: 'insideLeft'
            }
          }}
          lineOptions={{
            strokeWidth: 2,
            curveType: 'monotone',
            showDot: false
          }}
          margin={{ left: 50, right: 20, top: 20, bottom: 12 }}
          tooltipFormatter={formatTooltip}
        />

        <OtherContainer>
          <Header>
            <SubHeader>Other Currencies</SubHeader>
          </Header>
          <CurrencyItem image="/assets/forex/eur-ghs.png" label="Euro to Cedi" code="EURGHS" value="12.85" change={0.42} />
          <CurrencyItem image="/assets/forex/gbp-ghs.png" label="Pounds to Cedi" code="GBPGHS" value="14.10" change={0.05} />
          <CurrencyItem image="/assets/forex/cny-ghs.png" label="Yuan to Cedi" code="CNYGHS" value="14.10" change={0.05} />
          <CurrencyItem image="/assets/forex/ghs-ngn.png" label="Cedi to Naira" code="GHSNGN" value="14.10" change={0.05} />
          <CurrencyItem image="/assets/forex/ghs-xof.png" label="Cedi to Cfa" code="GHSXOF" value="14.10" change={-1.05} />
          <CurrencyItem image="/assets/forex/cad-ghs.png" label="Canadian dollar to Cedi" code="CADGHS" value="14.10" change={0.05} />
          <CurrencyItem image="/assets/forex/ghs-zar.png" label="Cedi to Rand" code="GHSZAR" value="14.10" change={-0.05} />
          <CurrencyItem image="/assets/forex/jpy-ghs.png" label="Yen to Cedi" code="JPYGHS" value="14.10" change={-0.05} />
        </OtherContainer>

        <ChartFooter>
          <DataSource>Source: Central Bank of Ghana</DataSource>
          <LastUpdated>
            Last updated: {new Date(curr.data[curr.data.length - 1].timestamp).toLocaleString()}
          </LastUpdated>
        </ChartFooter>
          </ChartItem>
          
          <ChartItem>
        <Header>
          <HeaderText>Commodities</HeaderText>
          <Currency>
            <CurrencyItem
              label="Gold"
              code="USDGHS"
              value="11.20"
              change={-0.35}
            />
          </Currency>
        </Header>

        <IndexChart
          data={chartData}
          color="#27ae60"
          height={400}
          showGrid
          xAxisOptions={{
            tickFormatter: xAxisTickFormatter,
            tickRotation: -45,
            interval: Math.ceil(chartData.length / 10)
          }}
          yAxisOptions={{
            tickFormat: (value: number) => value.toFixed(2),
            domain: ['dataMin - 0.5', 'dataMax + 0.5'],
            label: {
              value: 'GHS/USD',
              angle: -90,
              position: 'insideLeft'
            }
          }}
          lineOptions={{
            strokeWidth: 2,
            curveType: 'monotone',
            showDot: false
          }}
          margin={{ left: 50, right: 20, top: 20, bottom: 12 }}
          tooltipFormatter={formatTooltip}
        />

        <OtherContainer>
          <Header>
            <SubHeader>Other Currencies</SubHeader>
          </Header>
          <CurrencyItem label="Cocoa" code="USD/T" value="12.85" change={0.42} />
          <CurrencyItem label="Brent" code="USD/Bbl" value="14.10" change={0.05} />
          <CurrencyItem label="Crude oil" code="USD/Bbl" value="14.10" change={0.05} />
          <CurrencyItem label="Coffee" code="USD/lbs" value="14.10" change={0.05} />
          <CurrencyItem label="Copper" code="USD/lbs" value="14.10" change={-1.05} />
          <CurrencyItem label="Steel" code="CNY/T" value="14.10" change={0.05} />
          <CurrencyItem label="Lithium" code="CNY/T" value="14.10" change={-0.05} />
          <CurrencyItem label="Rubber" code="USD Cents / Kg" value="14.10" change={-0.05} />
        </OtherContainer>

        <ChartFooter>
          <DataSource>Source: Central Bank of Ghana</DataSource>
          <LastUpdated>
            Last updated: {new Date(curr.data[curr.data.length - 1].timestamp).toLocaleString()}
          </LastUpdated>
        </ChartFooter>
      </ChartItem>

      <ChartItem>
        <Header>
          <HeaderText>Stock Indexes</HeaderText>
          <Currency>
            <StockItem
              image="/assets/indices/Ghana.png"
              label="GSE Composite"
              code="Ghana Stock Exchange"
              value="11.20"
              change={-0.35}
            />
          </Currency>
        </Header>

        <IndexChart
          data={chartData}
          color="#27ae60"
          height={400}
          showGrid
          xAxisOptions={{
            tickFormatter: xAxisTickFormatter,
            tickRotation: -45,
            interval: Math.ceil(chartData.length / 10)
          }}
          yAxisOptions={{
            tickFormat: (value: number) => value.toFixed(2),
            domain: ['dataMin - 0.5', 'dataMax + 0.5'],
            label: {
              value: 'GHS/USD',
              angle: -90,
              position: 'insideLeft'
            }
          }}
          lineOptions={{
            strokeWidth: 2,
            curveType: 'monotone',
            showDot: false
          }}
          margin={{ left: 50, right: 20, top: 20, bottom: 12 }}
          tooltipFormatter={formatTooltip}
        />

        <OtherContainer>
          <Header>
            <SubHeader>Other Stock Indexes</SubHeader>
          </Header>
          <StockItem image="/assets/indices/Ghana.png" label="GSE Financial Index" code="Ghana Stock Exchange" value="12.85" change={0.42} />
          <StockItem image="/assets/indices/United States.png" label="NASDAQ" code="Nasdaq Stock Exchange" value="14.10" change={0.05} />
          <StockItem image="/assets/indices/United Kingdom.png" label="FTSE 100" code="London Stock Exchange" value="14.10" change={0.05} />
          <StockItem image="/assets/indices/Nigeria.png" label="NGX All Share Index" code="Nigerian Stock Exchange" value="14.10" change={0.05} />
          <StockItem image="/assets/indices/France.png" label="CAC 40" code="Paris stock exchange" value="292.0" change={-1.05} />
          <StockItem image="/assets/indices/South Africa.png" label="JSE All Share Index" code="Johannesburg Stock Exchange" value="14.10" change={0.05} />
                      <StockItem image="/assets/indices/China.png" label="SHANGHAI" code="Shanghai Composite Index" value="14.10" change={-0.05} />
                      <StockItem image="/assets/indices/United States.png" label="S&P 500" code="NYSE & NASDAQ" value="14.10" change={0.05} />
          <StockItem image="/assets/indices/Germany.png"label="DE-40" code="DAX Performance Index" value="14.10" change={-0.05} />
        </OtherContainer>

        <ChartFooter>
          <DataSource>Source: Central Bank of Ghana</DataSource>
          <LastUpdated>
            Last updated: {new Date(curr.data[curr.data.length - 1].timestamp).toLocaleString()}
          </LastUpdated>
        </ChartFooter>
          </ChartItem>

          <ChartItem>
        <Header>
          <HeaderText>Crypocurrencies</HeaderText>
          <Currency>
            <StockItem
              image="/assets/crypto/bitcoin.svg"
              label="Bitcoin"
              code="Bitcoin"
              value="11.20"
              change={-0.35}
            />
          </Currency>
        </Header>

        <IndexChart
          data={chartData}
          color="#27ae60"
          height={400}
          showGrid
          xAxisOptions={{
            tickFormatter: xAxisTickFormatter,
            tickRotation: -45,
            interval: Math.ceil(chartData.length / 10)
          }}
          yAxisOptions={{
            tickFormat: (value: number) => value.toFixed(2),
            domain: ['dataMin - 0.5', 'dataMax + 0.5'],
            label: {
              value: 'GHS/USD',
              angle: -90,
              position: 'insideLeft'
            }
          }}
          lineOptions={{
            strokeWidth: 2,
            curveType: 'monotone',
            showDot: false
          }}
          margin={{ left: 50, right: 20, top: 20, bottom: 12 }}
          tooltipFormatter={formatTooltip}
        />

        <OtherContainer>
          <Header>
            <SubHeader>Other Crypocurrencies</SubHeader>
          </Header>
          <StockItem image="/assets/crypto/ethereum.svg" label="Ethereum" code="EURGHS" value="12.85" change={0.42} />
          <StockItem image="/assets/crypto/tether.svg" label="Tether" code="GBPGHS" value="14.10" change={0.05} />
          <StockItem image="/assets/crypto/xrp.svg" label="XRP" code="CNYGHS" value="14.10" change={0.05} />
          <StockItem image="/assets/crypto/binance.svg" label="Binance" code="GHSNGN" value="14.10" change={0.05} />
          <StockItem image="/assets/crypto/chainlink.svg" label="Chainlink" code="CADGHS" value="14.10" change={0.05} />
          <StockItem image="/assets/crypto/cardano.svg" label="Cardano" code="GHSZAR" value="14.10" change={-0.05} />
          <StockItem image="/assets/crypto/dogecoin.svg" label="Dogecoin" code="JPYGHS" value="14.10" change={-0.05} />
        </OtherContainer>

        <ChartFooter>
          <DataSource>Source: Central Bank of Ghana</DataSource>
          <LastUpdated>
            Last updated: {new Date(curr.data[curr.data.length - 1].timestamp).toLocaleString()}
          </LastUpdated>
        </ChartFooter>
              </ChartItem>
              </Wrapper>
    </PageWrapper>
  );
}
