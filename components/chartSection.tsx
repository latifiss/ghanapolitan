'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChartItem from './chartItem'
import { getGraphics, Graphic } from '@/lib/api/graphics'

const SectionWrapper = styled.aside`
  background: linear-gradient(
    160deg,
    #2f4f8f 0%,
    #1e3561 45%,
    #0f1f3a 100%
  );
  padding: 16px;
  color: #fff;
  width: 100%;
  height: fit-content;

  @media (min-width: 1024px) {
    width: 290px;
    position: sticky;
    top: 90px;
  }
`

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
  color: #9fc2ff;
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
  background-color: #9fc2ff;
  color: #1e3561;
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
  color: rgb(138, 178, 255);
`

const ChartsContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 1024px) {
    flex-direction: column;
    overflow: visible;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #9fc2ff;
  font-family: 'franklin-normal';
  font-size: 14px;
`

interface ChartSectionProps {
  initialCharts?: Array<{
    title: string
    category: string
    image: string
    href?: string
  }>
  limit?: number
  category?: string
}

const ChartSection = ({ 
  initialCharts, 
  limit = 6,
  category
}: ChartSectionProps) => {
  const [charts, setCharts] = useState<Graphic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGraphics = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await getGraphics(1, limit, category)
        if (response.status === 'success' && response.data?.graphics) {
          setCharts(response.data.graphics)
        } else {
          setError('No graphics data available')
        }
      } catch (err) {
        console.error('Failed to fetch graphics:', err)
        setError('Failed to load charts. Please try again later.')
        if (initialCharts) {
          setCharts(
            initialCharts.map(chart => ({
              _id: Math.random().toString(),
              title: chart.title,
              description: '',
              content: {},
              category: chart.category,
              subcategory: [],
              tags: [],
              meta_title: '',
              meta_description: '',
              creator: '',
              slug: chart.title.toLowerCase().replace(/\s+/g, '-'),
              image_url: chart.image,
              published_at: new Date().toISOString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              __v: 0
            }))
          )
        }
      } finally {
        setLoading(false)
      }
    }

    fetchGraphics()
  }, [limit, initialCharts, category]) 

  if (loading) {
    return (
      <SectionWrapper>
        <Header>
          <HeadText>
            <Label>Charts</Label>
            <Title>& Visual Stories</Title>
          </HeadText>
          <Description>
            Loading visual stories...
          </Description>
        </Header>
        <LoadingContainer>Loading charts...</LoadingContainer>
      </SectionWrapper>
    )
  }

  if (charts.length === 0) {
    return null
  }

  return (
    <SectionWrapper>
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

      <ChartsContainer>
        {charts.map((chart) => (
          <ChartItem
            key={chart._id}
            title={chart.title}
            category={chart.category}
            image={chart.image_url || '/default-chart-image.jpg'}
            href={`/graphics/${chart.slug}`}
          />
        ))}
      </ChartsContainer>
    </SectionWrapper>
  )
}

export default ChartSection