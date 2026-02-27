'use client'

import styled from 'styled-components'
import AltChartItem from './altChartItem'

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
`

const Header = styled.div`
  margin-bottom: 18px;
`

const HeadText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 800;
  font-style: italic;
  color: #9fc2ff;
  font-family: 'cheltenham-normal';
  margin-bottom: 3px;
  text-transform: uppercase;
`

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9fc2ff;
  color: #1e3561;
  padding: 2px 4px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 800;
  font-family: 'cheltenham-normal';
  text-transform: uppercase;
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
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }
`

interface ChartData {
  title: string
  category: string
  image: string
  href?: string
}

interface AltChartSectionProps {
  charts: ChartData[]
}

const AltChartSection = ({ charts }: AltChartSectionProps) => {
  return (
    <SectionWrapper>
      <Header>
        <HeadText>
          <Label>Charts</Label>
          <Title>& Visual Stories</Title>
        </HeadText>
        <Description>
          Visual breakdowns explaining the forces shaping global business,
          markets, and geopolitics.
        </Description>
      </Header>

      <ChartsContainer>
        {charts.map((chart, index) => (
          <AltChartItem
            key={index}
            title={chart.title}
            category={chart.category}
            image={chart.image}
            href={chart.href}
          />
        ))}
      </ChartsContainer>
    </SectionWrapper>
  )
}

export default AltChartSection
