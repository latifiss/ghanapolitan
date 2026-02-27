'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IndexChart, { ChartDataPoint } from '@/components/indexChart';
import { CurrencyItem } from '@/components/currencyItems';
import { StockItem } from '@/components/stockItem';
import {
  getForexByCode,
  getCommodityByCode,
  getIndexByCode,
  getCryptoById
} from '@/lib/api/markets';
import LoadingComponent from './loading';
import Card from '@/components/card';
import { TreasuryTable } from '@/components/treasuryTable';
import Heatmap from '@/components/charts/heatmap';
import LogosCard from '@/components/logosCard';

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
`;

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

const NHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const SeeText = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  font-family: 'franklin-normal';
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.grayText};
`;

const SubHeader = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
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

const OtherContainerPerf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 550px;
  margin-top: 16px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 12px 0px;
  gap: 12px;
`;

const NewsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  margin: 0;
  gap: 12px;

  @media only screen and (max-width: 576px) { 
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  gap: 12px;
  }
`;

export default function HomePage() {
  const [usdData, setUsdData] = useState<any>(null);
  const [eurData, setEurData] = useState<any>(null);
  const [gbpData, setGbpData] = useState<any>(null);
  const [cnyData, setCnyData] = useState<any>(null);
  const [ghsNgnData, setGhsNgnData] = useState<any>(null);
  const [ghsXofData, setGhsXofData] = useState<any>(null);
  const [cadData, setCadData] = useState<any>(null);
  const [ghsZarData, setGhsZarData] = useState<any>(null);
  const [jpyData, setJpyData] = useState<any>(null);
  const [goldData, setGoldData] = useState<any>(null);
  const [cocoaData, setCocoaData] = useState<any>(null);
  const [brentData, setBrentData] = useState<any>(null);
  const [crudeData, setCrudeData] = useState<any>(null);
  const [coffeeData, setCoffeeData] = useState<any>(null);
  const [copperData, setCopperData] = useState<any>(null);
  const [steelData, setSteelData] = useState<any>(null);
  const [lithiumData, setLithiumData] = useState<any>(null);
  const [rubberData, setRubberData] = useState<any>(null);
  const [gseData, setGseData] = useState<any>(null);
  const [gseFinancialData, setGseFinancialData] = useState<any>(null);
  const [nasdaqData, setNasdaqData] = useState<any>(null);
  const [ftseData, setFtseData] = useState<any>(null);
  const [ngxData, setNgxData] = useState<any>(null);
  const [cacData, setCacData] = useState<any>(null);
  const [jseData, setJseData] = useState<any>(null);
  const [shanghaiData, setShanghaiData] = useState<any>(null);
  const [sp500Data, setSp500Data] = useState<any>(null);
  const [daxData, setDaxData] = useState<any>(null);
  const [bitcoinData, setBitcoinData] = useState<any>(null);
  const [ethereumData, setEthereumData] = useState<any>(null);
  const [tetherData, setTetherData] = useState<any>(null);
  const [xrpData, setXrpData] = useState<any>(null);
  const [binanceData, setBinanceData] = useState<any>(null);
  const [chainlinkData, setChainlinkData] = useState<any>(null);
  const [cardanoData, setCardanoData] = useState<any>(null);
  const [dogecoinData, setDogecoinData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forexAndCommodities = await Promise.all([
          getForexByCode('usdghs'),
          getForexByCode('eurghs'),
          getForexByCode('gbpghs'),
          getForexByCode('cnyghs'),
          getForexByCode('ghsngn'),
          getForexByCode('ghsxof'),
          getForexByCode('cadghs'),
          getForexByCode('ghszar'),
          getForexByCode('jpyghs'),
          getCommodityByCode('gold'),
          getCommodityByCode('cocoa'),
          getCommodityByCode('brent'),
          getCommodityByCode('crudeoil'),
          getCommodityByCode('coffee'),
          getCommodityByCode('copper'),
          getCommodityByCode('steel'),
          getCommodityByCode('lithium'),
          getCommodityByCode('rubber'),
          getIndexByCode('GGSECI'),
          getIndexByCode('US100'),
          getIndexByCode('UKX'),
          getIndexByCode('NGSEINDX'),
          getIndexByCode('CAC'),
          getIndexByCode('JALSH'),
          getIndexByCode('SHCOMP'),
          getIndexByCode('SPX'),
          getIndexByCode('DAX'),
        ]);

        const cryptoData = await Promise.all([
          getCryptoById('bitcoin'),
          getCryptoById('ethereum'),
          getCryptoById('tether'),
          getCryptoById('ripple'),
          getCryptoById('binancecoin'),
          getCryptoById('chainlink'),
          getCryptoById('cardano'),
          getCryptoById('dogecoin'),
        ]);

        const [
          usdRes, eurRes, gbpRes, cnyRes, ghsNgnRes, ghsXofRes, cadRes, ghsZarRes, jpyRes,
          goldRes, cocoaRes, brentRes, crudeRes, coffeeRes, copperRes, steelRes, lithiumRes, rubberRes,
          gseRes, nasdaqRes, ftseRes, ngxRes, cacRes, jseRes, shanghaiRes, sp500Res, daxRes
        ] = forexAndCommodities;

        const [
          bitcoinRes, ethereumRes, tetherRes, xrpRes, binanceRes, chainlinkRes, cardanoRes, dogecoinRes
        ] = cryptoData;

        setUsdData(usdRes);
        setEurData(eurRes);
        setGbpData(gbpRes);
        setCnyData(cnyRes);
        setGhsNgnData(ghsNgnRes);
        setGhsXofData(ghsXofRes);
        setCadData(cadRes);
        setGhsZarData(ghsZarRes);
        setJpyData(jpyRes);
        setGoldData(goldRes);
        setCocoaData(cocoaRes);
        setBrentData(brentRes);
        setCrudeData(crudeRes);
        setCoffeeData(coffeeRes);
        setCopperData(copperRes);
        setSteelData(steelRes);
        setLithiumData(lithiumRes);
        setRubberData(rubberRes);
        setGseData(gseRes);
        setNasdaqData(nasdaqRes);
        setFtseData(ftseRes);
        setNgxData(ngxRes);
        setCacData(cacRes);
        setJseData(jseRes);
        setShanghaiData(shanghaiRes);
        setSp500Data(sp500Res);
        setDaxData(daxRes);
        setBitcoinData(bitcoinRes);
        setEthereumData(ethereumRes);
        setTetherData(tetherRes);
        setXrpData(xrpRes);
        setBinanceData(binanceRes);
        setChainlinkData(chainlinkRes);
        setCardanoData(cardanoRes);
        setDogecoinData(dogecoinRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
  
  
  function getLast5BusinessDaysFromData(price_history) {
    const isBusinessDay = date => {
      const day = date.getDay();
      return day !== 0 && day !== 6; // not Sunday or Saturday
    };
  
    // Sort newest → oldest
    const sorted = price_history
      .map(p => ({
        date: new Date(p.date),
        price: p.price
      }))
      .filter(p => !isNaN(p.date) && isBusinessDay(p.date))
      .sort((a, b) => b.date - a.date);
  
    const daysIncluded = new Set();
    const result = [];
  
    for (const point of sorted) {
      const dayKey = point.date.toISOString().split("T")[0]; // YYYY-MM-DD
  
      // If we already have 5 weekdays and this point's date isn't included, stop
      if (daysIncluded.size >= 5 && !daysIncluded.has(dayKey)) break;
  
      daysIncluded.add(dayKey);
      result.push(point);
    }
  
    // Return oldest → newest for chart display
    return result.sort((a, b) => a.date - b.date);
  }
  
  
  

  const usdChartData: (ChartDataPoint & { originalDate: string })[] =
    usdData?.price_history
      ? getLast5BusinessDaysFromData(usdData.price_history).map(point => ({
          date: formatDate(point.date),
          value: point.price,
          originalDate: point.date
        }))
      : [];

  const goldChartData: (ChartDataPoint & { originalDate: string })[] =
    goldData?.price_history
      ? getLast5BusinessDaysFromData(goldData.price_history).map(point => ({
          date: formatDate(point.date),
          value: point.price,
          originalDate: point.date
        }))
      : [];

  const gseChartData: (ChartDataPoint & { originalDate: string })[] =
    gseData?.price_history
      ? getLast5BusinessDaysFromData(gseData.price_history).map(point => ({
          date: formatDate(point.date),
          value: point.price,
          originalDate: point.date
        }))
      : [];

  const bitcoinChartData: (ChartDataPoint & { originalDate: string })[] =
    bitcoinData?.price_history
      ? getLast5BusinessDaysFromData(bitcoinData.price_history).map(point => ({
          date: formatDate(point.date),
          value: point.price,
          originalDate: point.date
        }))
      : [];

  console.log('bitcoin data', bitcoinData )
  console.log('bitcoin chart', bitcoinChartData )

  const xAxisTickFormatter = (value: string): string => {
    const isMidnight = value.includes('00:00');
    return isMidnight ? value.split(',')[0] : '';
  };

  const formatTooltip = (data: any, dataKey: string, dataType: string): string => {
    if (!data.payload?.[0]) return '';
    const payload = data.payload[0].payload;
    const value = payload.value;
    const originalDate = payload.originalDate;
    const formattedDate = new Date(originalDate).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    switch (dataType) {
      case 'usdghs':
        return `${formattedDate} : ${value.toFixed(2)} GHS/USD`;
      case 'gold':
        return `${formattedDate} : $${value.toFixed(2)}`;
      case 'gse':
        return `${formattedDate} : ${value.toFixed(2)}`;
      case 'bitcoin':
        return `${formattedDate} : $${value.toFixed(2)}`;
      default:
        return `${formattedDate} : ${value.toFixed(2)}`;
    }
  };

  if (loading) return <LoadingComponent />;

  return (
    <PageWrapper>
      <Wrapper>
        <ChartItem>
          <Header>
            <HeaderText>GSE Composite Index</HeaderText>
            
          </Header>

          <IndexChart
            data={usdChartData}
            color={usdData?.current_price >= 0 ? "#13D14C" : "#FF0606"}
            height={400}
            showGrid
            xAxisOptions={{
              tickFormatter: xAxisTickFormatter,
              tickRotation: -45,
              interval: Math.ceil(usdChartData.length / 10)
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
            tooltipFormatter={(data) => formatTooltip(data, 'value', 'usdghs')}
          />

          <ChartFooter>
            <LastUpdated>
            Last updated: {usdData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}
            </LastUpdated>
          </ChartFooter>
        </ChartItem>
        
        <ChartItem>
          <Header>
            <HeaderText>GSE Financial Index</HeaderText>
          </Header>

          <IndexChart
            data={goldChartData}
            color={goldData?.current_price >= 0 ? "#13D14C" : "#FF0606"}
            height={400}
            showGrid
            xAxisOptions={{
              tickFormatter: xAxisTickFormatter,
              tickRotation: -45,
              interval: Math.ceil(goldChartData.length / 10)
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
            tooltipFormatter={(data) => formatTooltip(data, 'value', 'gold')}
          />

          <ChartFooter>
            <LastUpdated>
            Last updated: {goldData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}
            </LastUpdated>
          </ChartFooter>
        </ChartItem>

        <ChartItem>
          <Header>
            <HeaderText>Top gainers today</HeaderText>
          </Header>

          <OtherContainer>
            <StockItem image="/assets/stocks/goil.svg" label="Goil" code="GOIL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/guiness.svg" label="Guinness Ghana" code="GGBL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/mtn.svg" label="MTN" code="MTNGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/societe-general.svg" label="Societe Generale" code="SOGEGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/standard-chartered.svg" label="Standard Chartered" code="SCB" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/republic.webp" label="Republic Bank" code="RBGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            
          </OtherContainer>

          <ChartFooter>
            <LastUpdated>
            Last updated: {gseData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}

            </LastUpdated>
          </ChartFooter>
        </ChartItem>

        <ChartItem>
          <Header>
            <HeaderText>Top losers today</HeaderText>
          </Header>

          <OtherContainer>
            <StockItem image="/assets/stocks/access.svg" label="Access Bank" code="ACCESS" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/anglogold.svg" label="AngloGold Ashanti" code="AGA" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/guiness.svg" label="Guinness Ghana" code="GGBL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/mtn.svg" label="MTN" code="MTNGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/societe-general.svg" label="Societe Generale" code="SOGEGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/standard-chartered.svg" label="Standard Chartered" code="SCB" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/trustbank.jpg" label="Trust Bank Gambia" code="TBL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            
          </OtherContainer>

          <ChartFooter>
            <LastUpdated>
            Last updated: {gseData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}

            </LastUpdated>
          </ChartFooter>
        </ChartItem>

        <ChartItem>
          <Header>
            <HeaderText>Stock performance by sectors</HeaderText>
          </Header>

          <OtherContainerPerf>
            <Heatmap/>
          </OtherContainerPerf>

          <ChartFooter>
            <LastUpdated>
            Last updated: {gseData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}

            </LastUpdated>
          </ChartFooter>
        </ChartItem>

        <ChartItem>
          <Header>
            <HeaderText>All Stocks In GSE</HeaderText>
          </Header>

          <IndexChart
            data={gseChartData}
            color={gseData?.currentPrice >= 0 ? "#13D14C" : "#FF0606"}
            height={400}
            showGrid
            xAxisOptions={{
              tickFormatter: xAxisTickFormatter,
              tickRotation: -45,
              interval: Math.ceil(gseChartData.length / 10)
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
            tooltipFormatter={(data) => formatTooltip(data, 'value', 'gse')}
          />

          <OtherContainer>
            <Header>
              <SubHeader>Other Stock Indexes</SubHeader>
            </Header>
            <StockItem image="/assets/stocks/access.svg" label="Access Bank" code="ACCESS" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/anglogold.svg" label="AngloGold Ashanti" code="AGA" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/asante-gold.svg" label="Asante Gold" code="ASG" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/atlantic-lithium.svg" label="Atlantic Lithium" code="ALLGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/ecobank.svg" label="Ecobank" code="EGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/gcb.webp" label="Ghana Commercial Bank" code="GCB" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/goil.svg" label="Goil" code="GOIL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/guiness.svg" label="Guinness Ghana" code="GGBL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/mtn.svg" label="MTN" code="MTNGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/societe-general.svg" label="Societe Generale" code="SOGEGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/standard-chartered.svg" label="Standard Chartered" code="SCB" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/total.svg" label="TotalEnergies" code="TOTAL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/tullow-oil.svg" label="Tullow Oil" code="TLW" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/unilever.svg" label="Unilever Ghana" code="UNIL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/sic.png" label="SIC Insurance" code="SIC" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/republic.webp" label="Republic Bank" code="RBGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/trustbank.jpg" label="Trust Bank Gambia" code="TBL" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/fanmilk.png" label="Fan Milk" code="FML" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            <StockItem image="/assets/stocks/republic.svg" label="Republic Bank" code="RBGH" value={nasdaqData?.currentPrice?.toFixed(2) || ' '} change={nasdaqData?.percentage_change || 0} />
            
          </OtherContainer>

          <ChartFooter>
            <DataSource>Source: Central Bank of Ghana</DataSource>
            <LastUpdated>
            Last updated: {gseData?.last_updated 
  ? new Date(gseData.last_updated).toLocaleString() 
  : ' '}

            </LastUpdated>
          </ChartFooter>
        </ChartItem>
        
      </Wrapper>
        <NewsContainer>
          <NHeader>
                      <HeaderText>News</HeaderText>
                      <SeeText>see all</SeeText>
          </NHeader>
          <NewsContent>
          <LogosCard
            title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
            description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
              time="5 MIN AGO"
              logos={[
    { id: 'shell', src: 'https://s3-symbol-logo.tradingview.com/shell--big.svg' },
    { id: 'skysports', src: 'https://s3-symbol-logo.tradingview.com/total.svg' },
    { id: 'espn', src: 'https://s3-symbol-logo.tradingview.com/bp.svg' },
  ]}
          />
          <LogosCard
            title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
            description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
              time="5 MIN AGO"
              logos={[
    { id: 'shell', src: 'https://s3-symbol-logo.tradingview.com/shell--big.svg' },
    { id: 'skysports', src: 'https://s3-symbol-logo.tradingview.com/total.svg' },
    { id: 'espn', src: 'https://s3-symbol-logo.tradingview.com/bp.svg' },
  ]}
          />
          <LogosCard
            title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
            description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
              time="5 MIN AGO"
          />
          <LogosCard
            title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
            description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
              time="5 MIN AGO"
              logos={[
    { id: 'shell', src: 'https://s3-symbol-logo.tradingview.com/mtn-ltd.svg' },
    { id: 'skysports', src: 'https://s3-symbol-logo.tradingview.com/ecobank-transnational.svg' },
  ]}
            />
            </NewsContent>
            </NewsContainer>
    </PageWrapper>
  );
}