'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Graphic from '@/components/graphic';
import styled from 'styled-components';
import { getGraphics, Graphic as GraphicType } from '@/lib/api/graphics';

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

  @media only screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  font-family: 'franklin-normal';
  font-size: 16px;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  font-family: 'franklin-normal';
  font-size: 16px;
  color: #ff6b6b;
  text-align: center;
  padding: 20px;
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  width: 100%;
`;

const LoadMoreButton = styled.button`
  padding: 12px 24px;
  background-color: #2f4f8f;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: 'franklin-normal';
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #1e3561;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LoadingMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f0f0f0;
  border-top: 3px solid #2f4f8f;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Header = styled.div`
  margin-bottom: 18px;
`

const HeadText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 4px;
`

const Title = styled.p`
  font-size: 17px;
  line-height: 24px;
  font-weight: 800;
  font-style: italic;
  text-align: left;
  color: #1e3561;
  font-family: 'cheltenham-normal';
  text-decoration: none;
  margin-bottom: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    font-style: italic;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    font-style: italic;
  }
`

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e3561;
  color: #9fc2ff;
  padding: 2px 4px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 800;
  font-family: 'cheltenham-normal';
  margin-bottom: 3px;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    font-style: italic;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    font-style: italic;
  }
`

const Description = styled.p`
  font-family: 'franklin-normal';
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 2px;
  color: #1e3561;
`

const Client = () => {
  const [charts, setCharts] = useState<GraphicType[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);
  const initialLoad = useRef(true);

  const limit = 20;

  const fetchGraphics = useCallback(async (pageNum: number, isLoadMore = false) => {
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    
    setError(null);
    
    try {
      const response = await getGraphics(pageNum, limit);
      
      if (response.status === 'success' && response.data?.graphics) {
        const newGraphics = response.data.graphics;
        
        if (isLoadMore) {
          setCharts(prev => [...prev, ...newGraphics]);
        } else {
          setCharts(newGraphics);
        }
        
        setHasMore(newGraphics.length === limit && (response.totalPages || 1) > pageNum);
      } else {
        if (!isLoadMore) {
          setError('No graphics data available');
        }
        setHasMore(false);
      }
    } catch (err) {
      console.error('Failed to fetch graphics:', err);
      if (!isLoadMore) {
        setError('Failed to load graphics. Please try again later.');
      }
      setHasMore(false);
    } finally {
      if (isLoadMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (initialLoad.current) {
      fetchGraphics(1);
      initialLoad.current = false;
    }
  }, [fetchGraphics]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          const nextPage = page + 1;
          setPage(nextPage);
          fetchGraphics(nextPage, true);
        }
      },
      { threshold: 0.5 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadingMore, loading, page, fetchGraphics]);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchGraphics(nextPage, true);
    }
  };

  if (loading && !loadingMore) {
    return (
      <PageWrapper>
        <LoadingContainer>Loading graphics...</LoadingContainer>
      </PageWrapper>
    );
  }

  if (error && charts.length === 0) {
    return (
      <PageWrapper>
        <ErrorContainer>{error}</ErrorContainer>
      </PageWrapper>
    );
  }

  return (
      <PageWrapper>
          <Header>
        <HeadText>
          <Label>Charts</Label>
          <Title>& Visual Stories</Title>
        </HeadText>

        <Description>
          Visual breakdowns explaining the forces shaping ghanaian and african economy,
          markets, and politics.
        </Description>
      </Header>
      {charts.length === 0 ? (
        <ErrorContainer>No graphics found.</ErrorContainer>
      ) : (
        <>
          <ContentWrapper>
            {charts.map((chart) => (
              <Graphic
                key={chart._id}
                title={chart.title}
                category={chart.category}
                image={chart.image_url || '/default-chart-image.jpg'}
                href={`/graphics/${chart.slug}`}
              />
            ))}
          </ContentWrapper>
          
          {loadingMore && (
            <LoadingMoreContainer>
              <LoadingSpinner />
            </LoadingMoreContainer>
          )}
          
          {!loadingMore && hasMore && (
            <LoadMoreContainer ref={observerTarget}>
              <LoadMoreButton onClick={handleLoadMore}>
                Load More
              </LoadMoreButton>
            </LoadMoreContainer>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Client;