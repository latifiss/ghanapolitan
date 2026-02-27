'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 8px 8px 0px;
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 18px;
  margin-bottom: 2px;
`

const LiveLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 18px;
  margin-bottom: 2px;
`

const Label = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
  text-align: left;
`;

const EndedLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #6d767b;
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
  text-align: left;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 63px;
    gap: 8px;
    width: 100%;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    width: 100%;
`

const LiveRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: flex-end; 
  gap: 8px;
  width: 100%;
`

const LiveRightLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0px;
    width: 100%;
    color: ${({ theme }) => theme.colors.red};
`

const LiveRightRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    width: 100%;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0px;
    width: 100%;
`

const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    gap: 6px;
`

const LiveBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.white};
`

const EndedBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.white};
`

const Badge = styled(Image)`
    width: 20px;
    height: 20px;
    object-fit: contain;
`

const Team = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heavyMetal};
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
  margin-top: 6px;
`;

const LiveTeam = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.red};
  font-family: 'franklin-normal';
  text-decoration: none;
  white-space: nowrap;
  margin-top: 6px;
`;

const EndTeam = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'franklin-normal';
  text-decoration: none;
  white-space: nowrap;
  margin-top: 6px;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  text-decoration: none;
  white-space: nowrap;
`;

const Time = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heavyMetal};
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
`;

const TimeAlt = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #6d767b;
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
`;

const LiveTag = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  font-family: 'cheltenham-normal';
  white-space: nowrap;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};

  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    display: inline-block;
    animation: blink 1s infinite ease-in-out;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

type MatchStatus = 'live' | 'ended' | 'not_started' | 'cancelled' | 'postponed';

interface WidgetProps {
  competition: string;
  homeTeam: string;
  awayTeam: string;
  homeImage: string;
  awayImage: string;
  date: string;
  time: string;
  homeScore?: string;
  awayScore?: string;
  matchTime?: string;
  status: MatchStatus;
}

const Widget = ({ competition, homeTeam, awayTeam, homeImage, awayImage, date, time, homeScore, awayScore, matchTime, status }: WidgetProps) => {
  if (status === 'live') {
    return (
      <Component>
        <LiveLabelContainer>
          <Label>{competition}</Label>
          <LiveTag>Live</LiveTag>
        </LiveLabelContainer>
        <Content>
          <Left>
            <Bar>
              <Badge src={homeImage} width={18} height={18} alt='badge' />
              <Team>{homeTeam}</Team>
            </Bar>
            <Bar>
              <Badge src={awayImage} width={18} height={18} alt='badge' />
              <Team>{awayTeam}</Team>
            </Bar>
          </Left>
          <LiveRight>
            <LiveRightLeft>{matchTime}</LiveRightLeft>
            <LiveRightRight>
              <LiveBar>
                <LiveTeam>{homeScore}</LiveTeam>
              </LiveBar>
              <LiveBar>
                <LiveTeam>{awayScore}</LiveTeam>
              </LiveBar>
            </LiveRightRight>
          </LiveRight>
        </Content>
      </Component>
    )
  }
  if (status === 'ended') {
    return (
      <Component>
        <LiveLabelContainer>
          <Label>{competition}</Label>
          <EndedLabel>FT</EndedLabel>
        </LiveLabelContainer>
        <Content>
          <Left>
            <Bar>
              <Badge src={homeImage} width={18} height={18} alt='badge' />
              <Team>{homeTeam}</Team>
            </Bar>
            <Bar>
              <Badge src={awayImage} width={18} height={18} alt='badge' />
              <Team>{awayTeam}</Team>
            </Bar>
          </Left>
          <LiveRight>
            <LiveRightLeft> </LiveRightLeft>
            <LiveRightRight>
              <EndedBar>
                <EndTeam>{homeScore}</EndTeam>
              </EndedBar>
              <EndedBar>
                <EndTeam>{awayScore}</EndTeam>
              </EndedBar>
            </LiveRightRight>
          </LiveRight>
        </Content>
      </Component>
    )
  }
  if (status === 'cancelled') {
    return (
      <Component>
        <LabelContainer>
          <Label>{competition}</Label>
        </LabelContainer>
        <Content>
          <Left>
            <Bar>
              <Badge src={homeImage} width={18} height={18} alt='badge' />
              <Team>{homeTeam}</Team>
            </Bar>
            <Bar>
              <Badge src={awayImage} width={18} height={18} alt='badge' />
              <Team>{awayTeam}</Team>
            </Bar>
          </Left>
          <Right>
            <Date>{date}</Date>
            <TimeAlt>Cancelled</TimeAlt>
          </Right>
        </Content>
      </Component>
    )
  }
  if (status === 'postponed') {
    return (
      <Component>
        <LabelContainer>
          <Label>{competition}</Label>
        </LabelContainer>
        <Content>
          <Left>
            <Bar>
              <Badge src={homeImage} width={18} height={18} alt='badge' />
              <Team>{homeTeam}</Team>
            </Bar>
            <Bar>
              <Badge src={awayImage} width={18} height={18} alt='badge' />
              <Team>{awayTeam}</Team>
            </Bar>
          </Left>
          <Right>
            <Date>{date}</Date>
            <TimeAlt>Postponed</TimeAlt>
          </Right>
        </Content>
      </Component>
    )
  }
  return (
    <Component>
      <LabelContainer>
        <Label>{competition}</Label>
      </LabelContainer>
      <Content>
        <Left>
          <Bar>
            <Badge src={homeImage} width={18} height={18} alt='badge' />
            <Team>{homeTeam}</Team>
          </Bar>
          <Bar>
            <Badge src={awayImage} width={18} height={18} alt='badge' />
            <Team>{awayTeam}</Team>
          </Bar>
        </Left>
        <Right>
          <Date>{date}</Date>
          <Time>{time}</Time>
        </Right>
      </Content>
    </Component>
  )
}

export default Widget
