'use client'

import React from 'react';
import styled from 'styled-components';
import Quote from './icons/quote';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    background-color: var(--white);

     @media only screen and (max-width: 576px) { 
        flex-direction: column;
        align-items: flex-end;
        gap: 0px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        flex-direction: column;
        align-items: flex-end;
        gap: 0px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;  

const TitleText = styled.p`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0;
  font-family: 'cheltenham-normal';

  [data-theme='dark'] & {
    color: var(--text);
  }

  [data-theme='light'] & {
    color: var(--text);
  }

   @media only screen and (max-width: 576px) { 
        font-size: 18px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        font-size: 18px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 20px;
    }
`;

const Author = styled.p`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0;
  font-family: 'cheltenham-normal';
   color: var(--opinion-main);
  margin-top: 4px;

  @media only screen and (max-width: 576px) { 
        font-size: 18px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        font-size: 18px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 20px;
    }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateTime = styled.p`
  font-size: 11px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 3px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  min-width: 130px;
  max-width: 130px;
  background-color: var(--gray-text);
  border-radius: 9999px;

  @media only screen and (max-width: 576px) { 
        height: 85px;
  min-width: 85px;
  max-width: 85px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        height: 85px;
  min-width: 85px;
  max-width: 85px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        height: 120px;
  min-width: 120px;
  max-width: 120px;
    }
`

const Opinion = () => {
  return (
      <Wrapper>
          <Content>
              <TitleText>
                      <Quote />
          Trump is waging war against citizens in LA. This is a dangerous new era Trump is waging war against citizens in LA.
              </TitleText>
              <Author>Anthony Amissah</Author>
              <Description>In its first months in office, the Trump administration enacted what could be called soft
                  authoritarianism. Now we are in a second phase</Description>
              <DateTime>1hr ago</DateTime>
          </Content>
          <ProfileContainer/>
    </Wrapper>
  )
}

export default Opinion