'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    BOGTicker,
    GSETicker,
    USDTicker,
    GoldTicker,
    BrentTicker,
    CocobodTicker,
    EURTicker,
} from '@/components/ticker';
import ForwardButton from './forwardButton';
import {
    getForexByCode,
    getForexInterbankRateByCode,
    getIndexByCode,
    getCommodityByCode,
    getGoldbodByCode
} from '@/lib/api/markets';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    gap: 0px;
    padding: 0px 12px 8px 0px;
`;

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 4px;

    overflow-x: auto;
    flex-wrap: nowrap; /* mobile: NO wrap */
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /* 🔥 Desktop: wrap the items and remove scrolling */
    @media only screen and (min-width: 769px) {
        overflow-x: visible;
        flex-wrap: wrap;
    }
`;


const TickerRow = () => {
    const [usdData, setUsdData] = useState<any>(null);
    const [eurData, setEurData] = useState<any>(null);
    const [usdInterbankData, setUsdInterbankData] = useState<any>(null);
    const [eurInterbankData, setEurInterbankData] = useState<any>(null);
    const [gseData, setGseData] = useState<any>(null);
    const [goldData, setGoldData] = useState<any>(null);
    const [goldbodData, setGoldbodData] = useState<any>(null);
    const [brentData, setBrentData] = useState<any>(null);
    const [cocoaData, setCocoaData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const currentDate = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    usdRes,
                    eurRes,
                    usdInterbankRes,
                    eurInterbankRes,
                    gseRes,
                    goldRes,
                    goldbodRes,
                    brentRes,
                    cocoaRes
                ] = await Promise.all([
                    getForexByCode('usdghs'),
                    getForexByCode('eurghs'),
                    getForexInterbankRateByCode('USDGHS'),
                    getForexInterbankRateByCode('EURGHS'),
                    getIndexByCode('GGSECI'),
                    getCommodityByCode('gold'),
                    getGoldbodByCode('goldbod'),
                    getCommodityByCode('brent'),
                    getCommodityByCode('cocoa')
                ]);

                setUsdData(usdRes);
                setEurData(eurRes);
                
                // Interbank helpers already unwrap to the inner `data` object
                setUsdInterbankData(usdInterbankRes ?? null);
                setEurInterbankData(eurInterbankRes ?? null);
                
                setGseData(gseRes);
                setGoldData(goldRes);
                
                // Handle goldbod data - check the response structure
                // If goldbodRes has a data property, use that, otherwise use the response directly
                setGoldbodData(goldbodRes?.data || goldbodRes || null);
                
                setBrentData(brentRes);
                setCocoaData(cocoaRes);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div></div>;

    return (
        <Component>
            <Row>
                <USDTicker
                    title="USD / GHS"
                    date={currentDate}
                    items={[
                        { 
                            label: "Interbank Rate", 
                            value: `₵${usdInterbankData?.current_midrate_price?.toFixed(2) || usdInterbankData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: usdInterbankData?.midrate_percentage_change || usdInterbankData?.percentage_change || 0 
                        },
                        { 
                            label: "Global Rate", 
                            value: `₵${usdData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: usdData?.percentage_change || 0 
                        }
                    ]}
                />
                <GSETicker
                    title="Ghana Stock Exchange"
                    date={currentDate}
                    items={[
                        { 
                            label: "Composite", 
                            value: `₵${gseData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: gseData?.percentage_change || 0 
                        }
                    ]}
                />
                <EURTicker
                    title="EUR / GHS"
                    date={currentDate}
                    items={[
                        { 
                            label: "Interbank Rate", 
                            value: `₵${eurInterbankData?.current_midrate_price?.toFixed(2) || eurInterbankData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: eurInterbankData?.midrate_percentage_change || eurInterbankData?.percentage_change || 0 
                        },
                        { 
                            label: "Global Rate", 
                            value: `₵${eurData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: eurData?.percentage_change || 0 
                        }
                    ]}
                />
                <BrentTicker
                    title="Brent Crude"
                    date={currentDate}
                    items={[
                        { 
                            label: "Global Price", 
                            value: `$${brentData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: brentData?.percentage_change || 0 
                        }
                    ]}
                />
                <GoldTicker
                    title="Gold"
                    date={currentDate}
                    items={[
                        { 
                            label: "Global", 
                            value: `$${goldData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: goldData?.percentage_change || 0 
                        },
                        { 
                            label: "Goldbod", 
                            value: `₵${goldbodData?.currentPrice?.toFixed(2) || goldbodData?.price?.toFixed(2) || ' '}`, 
                            change: goldbodData?.percentage_change || goldbodData?.change || 0 
                        }
                    ]}
                />
                <CocobodTicker
                    title="Cocoa"
                    date={currentDate}
                    items={[
                        { 
                            label: "Global", 
                            value: `$${cocoaData?.currentPrice?.toFixed(2) || ' '}`, 
                            change: cocoaData?.percentage_change || 0 
                        }
                    ]}
                />
            </Row>
            <ForwardButton />
        </Component>
    );
};

export default TickerRow;