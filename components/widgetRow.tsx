'use client'

import React from 'react';
import styled from 'styled-components';
import { matches } from '@/data/matches';
import Widget from './widget';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    gap: 0px;
    padding: 0px 0px 12px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 14px;
`;

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    @media only screen and (max-width: 576px) { 
        justify-content: flex-start;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        justify-content: flex-start;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        justify-content: flex-start;
    }

    /* Divider on right side of every widget except last */
    & > *:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        padding-right: 8px; /* optional spacing */
    }
`;


const WidgetRow = () => {
  return (
    <Component>
      <Row>
        {matches.map((match) => (
        <Widget
            key={match.homeTeam + match.awayTeam}
            competition={match.competition}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeImage={match.homeImage}
            awayImage={match.awayImage}
            date={match.date}
            time={match.time}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            matchTime={match.matchTime}
            status={match.status}
        />
        ))}
      </Row>
    </Component>
  );
};

export default WidgetRow;
