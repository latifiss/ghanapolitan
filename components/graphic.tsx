'use client'

import Image from 'next/image'
import styled from 'styled-components'

const ItemWrapper = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  break-inside: avoid;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 230px;
  height: 180px;
  flex-shrink: 0;
  overflow: hidden;

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 226px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 180px;
    height: 240px;
  }
`

const ChartImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ItemWrapper}:hover & {
    transform: scale(1.05);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;

  @media only screen and (max-width: 576px) {
    width: 100%;
    gap: 4px;
  }
`

const Category = styled.p`
  font-family: 'franklin-normal';
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #1a65d5;
  margin: 0;
`

const Title = styled.h4`
  font-family: 'cheltenham-normal';
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  color: #000;
  margin: 0;

  @media only screen and (max-width: 576px) {
    font-size: 20px;
    line-height: 22px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 22px;
  }
`

const Description = styled.p`
  font-family: 'franklin-normal';
  font-size: 14px;
  line-height: 1.4;
  color: #666;
  margin: 4px 0 0 0;
`

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #eee;
`

const MetaItem = styled.span`
  font-family: 'franklin-normal';
  font-size: 12px;
  color: #888;
`

interface GraphicProps {
  title: string
  category: string
  image: string
  href?: string
  description?: string
  publishedDate?: string
}

const Graphic = ({ 
  title, 
  category, 
  image, 
  href = '#', 
  description,
  publishedDate 
}: GraphicProps) => {
  const defaultDescription = "Interactive chart showing key insights and data visualization";
  const formattedDate = publishedDate 
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : null;

  return (
    <ItemWrapper href={href}>
      <ImageContainer>
        <ChartImage 
          src={image || '/default-chart-image.jpg'} 
          alt={title} 
          width={400}
          height={300}
          priority={false}
          loading="lazy"
        />
      </ImageContainer>
      
      <Content>
        <Category>{category}</Category>
        <Title>{title}</Title>
        
        {description && (
          <Description>
            {description}
          </Description>
        )}
        
        {(formattedDate || description) && (
          <MetaInfo>
            {formattedDate && (
              <MetaItem>{formattedDate}</MetaItem>
            )}
            {description && (
              <MetaItem>Interactive</MetaItem>
            )}
          </MetaInfo>
        )}
      </Content>
    </ItemWrapper>
  )
}

export default Graphic