'use client';

import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  padding: 12px 12px;
  position: relative;

  ${({ $isNew }) => $isNew && `
    border-left: 4px solid #2a5599;
  `}
`;

const NewBadge = styled.div`
  position: absolute;
  top: -8px;
  right: 12px;
  background: #2a5599;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  font-family: 'franklin-normal';
`;

const ComponentTitle = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  font-family: 'franklin-normal';
  color: ${({ theme }) => theme.colors.grayText};
  text-align: left;
`;

const ComponentBody = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  font-family: 'franklin-normal';
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const ComponentTag = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  margin: 0;
  font-family: 'franklin-normal';
  color: #2a5599;
  text-align: left;
  margin-top: -8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  width: 100%;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const DetailLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
`;

const DetailValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-family: 'franklin-normal';
`;

const StateBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'franklin-normal';
  background: ${({ $type }) => {
    switch ($type) {
      case 'beat': return '#4caf50';
      case 'missed': return '#f44336';
      case 'met': return '#ff9800';
      case 'oversubscribed': return '#4caf50';
      case 'undersubscribed': return '#f44336';
      case 'announced': return '#2196f3';
      case 'increased': return '#4caf50';
      case 'decreased': return '#f44336';
      case 'priced': return '#4caf50';
      case 'completed': return '#4caf50';
      default: return '#9e9e9e';
    }
  }};
  color: white;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

const getTimeUntilEvent = (eventDate) => {
  const now = new Date();
  const event = new Date(eventDate);
  const diffMs = event - now;
  
  if (diffMs <= 0) return 'Past';
  
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (diffDays > 0) {
    return `In ${diffDays} day${diffDays !== 1 ? 's' : ''}${diffHours > 0 ? ` ${diffHours}h` : ''}`;
  } else {
    return `In ${diffHours}h`;
  }
};

const CalendarItem = ({ event }) => {
  if (!event) return null;

  const { 
    title, 
    code, 
    type, 
    actual, 
    forecast, 
    previous, 
    is_new, 
    date, 
    last_updated,
    state,
    is_new_expires_in
  } = event;

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);
  const timeUntilEvent = getTimeUntilEvent(date);
  const typeMap = {
    economic: 'Economic Data',
    earnings: 'Earnings',
    dividend: 'Dividend',
    ipo: 'IPO',
    treasury: 'Treasury'
  };

  return (
    <Component $isNew={is_new}>
      {is_new && (
        <NewBadge>
          NEW {is_new_expires_in && `(${is_new_expires_in})`}
        </NewBadge>
      )}
      
      <ComponentTitle>{typeMap[type] || type}</ComponentTitle>
      <ComponentBody>{title}</ComponentBody>
      
      <DetailsContainer>
        <DetailItem>
          <DetailLabel>Date:</DetailLabel>
          <DetailValue>{formattedDate} • {formattedTime}</DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>Code:</DetailLabel>
          <DetailValue>{code}</DetailValue>
        </DetailItem>
        
        {(actual || forecast || previous) && (
          <DetailItem>
            <DetailLabel>Data:</DetailLabel>
            <DetailValue>
              {actual && `Actual: ${actual} `}
              {forecast && `Forecast: ${forecast} `}
              {previous && `Previous: ${previous}`}
            </DetailValue>
          </DetailItem>
        )}
        
        {state && (
          <DetailItem>
            <DetailLabel>Status:</DetailLabel>
            <StateBadge $type={state}>{state}</StateBadge>
          </DetailItem>
        )}
      </DetailsContainer>
      
      <ComponentTag>{timeUntilEvent}</ComponentTag>
    </Component>
  );
};

export default CalendarItem;