'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #e6e6e6;
  padding: 20px 24px;
  background: #fff;
`

const Heading = styled.h3`
  font-family: 'cheltenham-normal';
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 14px;
`

const List = styled.ul`
  list-style: disc;
  padding-left: 18px;
  margin-bottom: 18px;
`

const ListItem = styled.li`
  font-family: 'franklin-normal';
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
`

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  background: #fff;
  text-decoration: none;
  font-family: 'franklin-normal';
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const SourceImage = styled(Image)`
  display: block;
  height: 40px;
  width: auto;
`

interface FollowGoogleProps {
  googleSearchUrl: string
  googleNewsUrl: string
}

const FollowGoogle = ({
  googleSearchUrl,
  googleNewsUrl,
}: FollowGoogleProps) => {
  return (
    <Wrapper>
      <Heading>Don&apos;t miss the latest news</Heading>

      <List>
        <ListItem>
          <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
            Add Ghanapolitan as a preferred source in Google Search
          </a>
        </ListItem>
        <ListItem>
          <a href={googleNewsUrl} target="_blank" rel="noopener noreferrer">
            Follow Ghanapolitan on Google News
          </a>
        </ListItem>
      </List>

      <ButtonsRow>
        <Button href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
          <SourceImage
            src="/google/google_preferred_source_badge_light.webp"
            alt="Google"
            width={20}
            height={20}
          />
        </Button>

        <Button href={googleNewsUrl} target="_blank" rel="noopener noreferrer">
          <SourceImage
            src="/google/google_news_badge.webp"
            alt="Google News"
            width={20}
            height={20}
          />
        </Button>
      </ButtonsRow>
    </Wrapper>
  )
}

export default FollowGoogle
