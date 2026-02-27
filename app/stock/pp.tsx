'use client'

import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

import IndexChartDemo from '@/components/idDemo';
import { StockItem } from '@/components/stockItem';
import OverviewTable from '@/components/tables/overview';
import FinHighlight from '@/components/tables/finHighlight';
import DividendTable from '@/components/tables/dividentTable';
import HolderTable from '@/components/tables/holderTable';
import OwnershipTable from '@/components/tables/ownershipTable';
import PerformanceChart from '@/components/charts/performanceChart';
import SeasonalsChart from '@/components/charts/seasonalsChart';
import { chartData, quarterlyOnlyData, quarterlyPerformanceData, sampleWaterfallData, seasonalData, twoYearData } from "@/data/chartData";
import Card from '@/components/card';
import Event from '@/components/event';
import SourceChart from '@/components/charts/sourceChart';
import EarningChart from '@/components/charts/earningChart';

// --- Market Status Components ---

const blink = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(74,178,75, 0.7);
    }
    50% {
        box-shadow: 0 0 0 5px rgba(74,178,75, 0);
    }
    100% {
        box-shadow: 0 0 0 0px rgba(74,178,75, 0.7);
    }
`;

const MarketDot = styled.div<{ $isOpen: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ $isOpen }) => ($isOpen ? '#4ab24b' : '#00c1d1')};
    
    ${({ $isOpen }) => $isOpen && css`
        animation: ${blink} 1.5s infinite;
    `}
`;

const MarketStatusText = styled.p<{ $isOpen: boolean }>`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ $isOpen }) => ($isOpen ? '#4ab24b' : '#00c1d1')};
`;

const MarketStatus: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <React.Fragment>
        <MarketDot $isOpen={isOpen} />
        <MarketStatusText $isOpen={isOpen}>
            {isOpen ? 'Market Open' : 'Market Closed'}
        </MarketStatusText>
    </React.Fragment>
);

// --- Styled Components ---

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 16px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 100px;

    @media only screen and (max-width: 576px) { 
        padding-top: 12px;
        margin-left: 16px;
        margin-right: 16px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        padding-top: 12px;
        margin-left: 16px;
        margin-right: 16px;
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 32px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1.5px;
        background: #e7e7e7;
        left: 70%;
        transform: translateX(-0.75px);
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        &:before {
            display: none;
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    padding: 16px 24px;

    @media only screen and (max-width: 576px) { 
    padding: 16px 0px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    padding: 16px 0px;
  }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const HeaderText = styled.p`
    font-size: 20px;
    line-height: 24px;
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

    @media (max-width: 768px) {
        gap: 2px;
    }
`;

const StockHead = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 18px;
`;

const StockHeadInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    margin-top: -12px;
`;

const StockTitle = styled.p`
    font-size: 40px;
    line-height: 48px;
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

const StockLogo = styled(Image)`
    object-fit: cover;
    width: 168px;
    height: 168px;
    border-radius: 99px;

    @media only screen and (max-width: 768px) {
        width: 68px;
        height: 68px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        width: 88px;
        height: 88px;
    }
`

const StockHeadInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 0px 12px;

    @media only screen and (max-width: 768px) {
        margin-top: -12px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        margin-top: -8px;
    }
`

const StockSymbol = styled.p`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    @media only screen and (max-width: 768px) {
        font-size: 17px;
        line-height: 20px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

const StockDot = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    @media only screen and (max-width: 768px) {
        font-size: 13px;
        line-height: 13px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 13px;
        line-height: 13px;
    }
`;

const StockExchange = styled.p`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    @media only screen and (max-width: 768px) {
        font-size: 17px;
        line-height: 20px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

const StockPriceRow = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    gap: 8px;
    margin-top: 2px;
    margin-bottom: 8px;

    @media only screen and (max-width: 768px) {
        margin-bottom: 13px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        margin-bottom: 13px;
    }
`;

const StockValueRow = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: fit-content;
    gap: 4px;
`;

const StockValue = styled.p`
    font-size: 38px;
    line-height: 38px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    @media only screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 28px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 28px;
        line-height: 28px;
    }
`;

const StockCurrency = styled.p`
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: ${({ theme }) => theme.colors.text};

    @media only screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 14px;
        line-height: 16px;
    }
`;

const StockChange = styled.p`
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin: 0;
    font-family: 'cheltenham-normal';
    color: #FF0606;

    @media only screen and (max-width: 768px) {
        font-size: 21px;
        line-height: 21px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 21px;
        line-height: 21px;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`;

const TabsContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const TabButton = styled.button<{ $isActive: boolean }>`
    font-family: 'cheltenham-normal';
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    border: none;
    padding: 8px 12px;
    outline: none;
    cursor: pointer;
    color: ${({ $isActive }) => ($isActive ? '#2a5599' : '#888')};
    border-bottom: 2px solid ${({ $isActive }) => ($isActive ? '#2a5599' : 'transparent')};
    transition: all 0.2s;
`;

const TabContent = styled.div`
    margin-top: 16px;
    font-family: 'cheltenham-normal';
    font-size: 14px;
    width: 100%;
    margin-right: 24px;

    @media only screen and (max-width: 576px) { 
    margin-right: 0px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    margin-right: 0px;
  }
`;

const SectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
`;

const SectInfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
`

const SectTextHead = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.grayText};
    text-align: left;
`;

const SectTextBody = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.text};
    text-align: right;
`;

const SectTextDesc = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
    margin-top: 8px;
`;

const TabContentInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
`;

const TabContentInnerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    @media only screen and (max-width: 576px) { 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 12px 0px;
  gap: 12px;
`;

const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
`;

const EventsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
`

const page = () => {
    const [isMarketOpen, setIsMarketOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('Overview');

    const toggleMarket = () => {
        setIsMarketOpen(prev => !prev);
    };

    return (
        <PageWrapper>
            <ContentWrapper>
                <Left>
                    <StockHead>
                        <StockLogo src='/assets/stocks/mtn.svg' alt='MTN Logo' width={168} height={168}/>
                        <StockHeadInner>
                            <StockTitle>MTN Group Limited</StockTitle>
                            
                            <StockHeadInfo onClick={toggleMarket} title='Click to toggle market status'>
                                
                                <StockSymbol>MTN</StockSymbol>
                                <StockDot>•</StockDot>
                                <StockExchange>Ghana Stock Exchange</StockExchange>
                            </StockHeadInfo>
                            
                            <StockPriceRow>
                                <StockValueRow>
                                    <StockValue>15,798</StockValue>
                                    <StockCurrency>GHS</StockCurrency>
                                </StockValueRow>
                                <StockChange>+0.48%</StockChange>
                            </StockPriceRow>
                            <StockHeadInfo onClick={toggleMarket} title='Click to toggle market status'>
                                <MarketStatus isOpen={isMarketOpen} /> 
                                
                            </StockHeadInfo>
                        </StockHeadInner>
                    </StockHead>
                    <IndexChartDemo />
                    <InfoContainer>
                        <TabsContainer>
                        {['Overview', 'Financials', 'Earnings & Dividends', 'Ownership'].map(tab => (
                            <TabButton
                                key={tab}
                                $isActive={activeTab === tab}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </TabButton>
                        ))}
                        </TabsContainer>

                        <TabContent>
                            {activeTab === 'Overview' && (
                                <TabContentInner>
                                    <OverviewTable />
                                    <EventsContainer>
                                        <Header>
                                            <HeaderText>Upcoming Events</HeaderText>
                                        </Header>
                                    <EventsRow>
                                        <Event/>
                                        <Event/>
                                        <Event/>
                                    </EventsRow>
                                    </EventsContainer>
                                    <TabContentInnerGrid>
                                        <PerformanceChart 
                                          annualData={quarterlyPerformanceData.annualData}
                                          periodicData={quarterlyPerformanceData.periodicData}
                                          dataType="Quarterly"
                                          defaultView="Periodic"
                                        />
                                                <SeasonalsChart 
                                          data={seasonalData} 
                                          showReferenceLine={false}
                                        />
                                    </TabContentInnerGrid>
                                    <TabContentInnerGrid>
                                        <SourceChart data={chartData} />
                                                <EarningChart/>
                                    </TabContentInnerGrid>
                                    <SectInfo>
                                        <Header>
                                            <HeaderText>About</HeaderText>
                                        </Header>
                                        <SectInfoRow>
                                            <SectTextHead>Sector</SectTextHead>
                                            <SectTextBody>Electronic technology</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>Industry</SectTextHead>
                                            <SectTextBody>Telecommunications</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>CEO</SectTextHead>
                                            <SectTextBody>Timothy Wilson Gyan</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>Employees</SectTextHead>
                                            <SectTextBody>1,378</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>Headquaters</SectTextHead>
                                            <SectTextBody>Independence Ave, Accra - Ghana</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>Founded</SectTextHead>
                                            <SectTextBody>1995</SectTextBody>
                                        </SectInfoRow>
                                        <SectInfoRow>
                                            <SectTextHead>ISIN</SectTextHead>
                                            <SectTextBody>DHD672I9XNXM02</SectTextBody>
                                        </SectInfoRow>
                                        <SectTextDesc>
                                            MTN Group Ltd. engages in the provision of voice, data, fintech, digital, enterprise, wholesale, and application programming interface services. It operates under the following geographical segments: South Africa, Nigeria, Southern and East Africa, West and Central Africa, and Middle East and North Africa. The company was founded on November 23,1994 and is headquartered in Fairland, South Africa.
                                        </SectTextDesc>
                                    </SectInfo>
                                </TabContentInner>
                            )}
                            {activeTab === 'Financials' && (
                                <TabContentInner>
                                    <FinHighlight/>
                                </TabContentInner>
                            )}
                            {activeTab === 'Earnings & Dividends' && (
                                <TabContentInner>
                                    <DividendTable/>
                                </TabContentInner>
                            )}
                            {activeTab === 'Ownership' && (
                                <TabContentInner>
                                    <HolderTable />
                                    <OwnershipTable/>
                                </TabContentInner>
                            )}
                        </TabContent>
                        <NewsContainer>
                            <Header>
                                <HeaderText>In the News</HeaderText>
                            </Header>
          <Card
            title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
            description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
            time="5 MIN AGO"
          />
          <Card
  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
  time="5 MIN AGO"
/>
            </NewsContainer>
                    </InfoContainer>
                </Left>

                <Right>
                    <Header>
                        <HeaderText>More Stocks on GSE</HeaderText>
                    </Header>
                    <Content>
                        <StockItem image="/assets/stocks/access.svg" label="Access Bank" code="ACCESS" value="12.45" change={1.23} />
<StockItem image="/assets/stocks/anglogold.svg" label="AngloGold Ashanti" code="AGA" value="98.10" change={-0.85} />
<StockItem image="/assets/stocks/asante-gold.svg" label="Asante Gold" code="ASG" value="6.75" change={2.14} />
<StockItem image="/assets/stocks/atlantic-lithium.svg" label="Atlantic Lithium" code="ALLGH" value="3.42" change={-1.02} />
<StockItem image="/assets/stocks/ecobank.svg" label="Ecobank" code="EGH" value="5.88" change={0.64} />
<StockItem image="/assets/stocks/gcb.webp" label="Ghana Commercial Bank" code="GCB" value="7.30" change={-0.45} />
<StockItem image="/assets/stocks/goil.svg" label="Goil" code="GOIL" value="4.92" change={1.76} />
<StockItem image="/assets/stocks/guiness.svg" label="Guinness Ghana" code="GGBL" value="28.15" change={-0.38} />
<StockItem image="/assets/stocks/mtn.svg" label="MTN" code="MTNGH" value="1.95" change={0.21} />
<StockItem image="/assets/stocks/societe-general.svg" label="Societe Generale" code="SOGEGH" value="10.60" change={-1.10} />
<StockItem image="/assets/stocks/standard-chartered.svg" label="Standard Chartered" code="SCB" value="18.75" change={0.92} />
<StockItem image="/assets/stocks/total.svg" label="TotalEnergies" code="TOTAL" value="7.85" change={-0.67} />
<StockItem image="/assets/stocks/tullow-oil.svg" label="Tullow Oil" code="TLW" value="9.40" change={1.48} />
<StockItem image="/assets/stocks/unilever.svg" label="Unilever Ghana" code="UNIL" value="21.30" change={-0.25} />
<StockItem image="/assets/stocks/sic.png" label="SIC Insurance" code="SIC" value="2.18" change={0.73} />
<StockItem image="/assets/stocks/republic.webp" label="Republic Bank" code="RBGH" value="6.05" change={-0.54} />
<StockItem image="/assets/stocks/trustbank.jpg" label="Trust Bank Gambia" code="TBL" value="3.90" change={1.09} />
<StockItem image="/assets/stocks/fanmilk.png" label="Fan Milk" code="FML" value="25.60" change={-0.80} />

                    </Content>
                </Right>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default page