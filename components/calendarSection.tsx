'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarItem from './calendarItem'; 
import { eventsData } from '@/data/events';

const Section = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-family: 'franklin-normal';
`;

const Filters = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme, $active }) => 
    $active ? theme.colors.text : theme.colors.border};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.text : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? '#fff' : theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'franklin-normal';

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-size: 14px;
  font-family: 'franklin-normal';
  width: 200px;
  margin-left: auto;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px;
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 16px;
  font-family: 'franklin-normal';
`;

const SortSelect = styled.select`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-size: 14px;
  font-family: 'franklin-normal';
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface EventType {
  _id: string;
  code: string;
  title: string;
  type: 'economic' | 'earnings' | 'dividend' | 'ipo' | 'treasury';
  actual?: string;
  forecast?: string;
  previous?: string;
  is_new: boolean;
  is_new_set_at?: string;
  date: string;
  last_updated: string;
  state?: string;
  __v: number;
}

const CalendarSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');

  const filteredEvents = eventsData.filter((event: EventType) => {
    const typeMatch = filter === 'all' || event.type === filter;
    
    const searchMatch = 
      search === '' || 
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.code.toLowerCase().includes(search.toLowerCase());

    return typeMatch && searchMatch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'new':
        return (b.is_new ? 1 : 0) - (a.is_new ? 1 : 0);
      default:
        return 0;
    }
  });

  const totalEvents = eventsData.length;
  const newEvents = eventsData.filter(e => e.is_new).length;
  const upcomingEvents = eventsData.filter(e => new Date(e.date) > new Date()).length;

  return (
    <Section>
      <Header>
        <Title>Economic Calendar</Title>
        <SearchInput
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <Filters>
        <FilterButton 
          $active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All Events ({totalEvents})
        </FilterButton>
        <FilterButton 
          $active={filter === 'economic'} 
          onClick={() => setFilter('economic')}
        >
          Economic Data
        </FilterButton>
        <FilterButton 
          $active={filter === 'earnings'} 
          onClick={() => setFilter('earnings')}
        >
          Earnings
        </FilterButton>
        <FilterButton 
          $active={filter === 'dividend'} 
          onClick={() => setFilter('dividend')}
        >
          Dividends
        </FilterButton>
        <FilterButton 
          $active={filter === 'ipo'} 
          onClick={() => setFilter('ipo')}
        >
          IPOs
        </FilterButton>
        <FilterButton 
          $active={filter === 'treasury'} 
          onClick={() => setFilter('treasury')}
        >
          Treasury
        </FilterButton>
        <FilterButton 
          $active={filter === 'new'} 
          onClick={() => setFilter('new')}
        >
          New ({newEvents})
        </FilterButton>

        <SortSelect 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by: Date (Ascending)</option>
          <option value="date-desc">Sort by: Date (Descending)</option>
          <option value="title">Sort by: Title</option>
          <option value="new">Sort by: New First</option>
        </SortSelect>
      </Filters>

      <Stats>
        <StatItem>
          <span>Total Events:</span>
          <strong>{totalEvents}</strong>
        </StatItem>
        <StatItem>
          <span>New Events:</span>
          <strong>{newEvents}</strong>
        </StatItem>
        <StatItem>
          <span>Upcoming:</span>
          <strong>{upcomingEvents}</strong>
        </StatItem>
        <StatItem>
          <span>Showing:</span>
          <strong>{sortedEvents.length} events</strong>
        </StatItem>
      </Stats>

      {sortedEvents.length > 0 ? (
        <EventsGrid>
          {sortedEvents.map((event) => (
            <CalendarItem 
              key={event._id} 
              event={event}
            />
          ))}
        </EventsGrid>
      ) : (
        <EmptyState>
          No events found matching your criteria. Try adjusting your filters.
        </EmptyState>
      )}
    </Section>
  );
};

export default CalendarSection;