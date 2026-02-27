'use client'

import Image from 'next/image'
import styled from 'styled-components'

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 8px;
`

const ChartImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media only screen and (max-width: 576px) { 
        width: 155px;
    height: 110px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         width: 155px;
    height: 110px;
    }
`

const Category = styled.p`
  font-family: 'franklin-normal';
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #7db2ff;
`

const Title = styled.h4`
  font-family: 'cheltenham-normal';
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  color: #ffffff;
  margin-top: -6px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

interface ChartItemProps {
  title: string
  category: string
  image: string
  href?: string
}

const ChartItem = ({ title, category, image, href = '#' }: ChartItemProps) => {
  return (
    <ItemWrapper href={href}>
      <ChartImage src={image} alt={title} width={800} height={500} />
      <Category>{category}</Category>
      <Title>{title}</Title>
    </ItemWrapper>
  )
}

export default ChartItem
