import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { formatDate } from '@/utils/formatDate';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  -ms-overflow-style: none;

  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const TimelineLine = styled.div`
  position: relative;
  width: 100%;
  top: 44px; 
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #333 0,
    #333 5px,
    transparent 5px,
    transparent 10px
  );
  z-index: 1;
`;

const TimelineItems = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  min-width: ${props => props.itemCount * 220}px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 0 10px;
`;

const TimeDotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const NewsTime = styled.span`
  font-size: 13px;
  color: var(--red);
  margin-bottom: 8px;
  font-weight: 600;
  font-family: 'franklin-normal';
`;

const TimelineDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
`;

const NewsTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: var(--red);
  font-family: 'cheltenham-normal';
  margin-top: 4px;
`;

const NewsDescription = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  text-align: center;
  color: var(--gray-text);
  margin-top: 0px;
  font-family: 'franklin-normal';
`;

const NewsTimeline = ({ items }) => {
  return (
    <TimelineContainer>
      <TimelineLine />
      <TimelineItems itemCount={items.length}>
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <TimeDotContainer>
              <NewsTime>
              {formatDate(item.content_published_at)}
              </NewsTime>
              <TimelineDot />
            </TimeDotContainer>
            <NewsTitle>{item.content_title}</NewsTitle>
            <NewsDescription>{item.content_description}</NewsDescription>
          </TimelineItem>
        ))}
      </TimelineItems>
    </TimelineContainer>
  );
};

export default NewsTimeline;