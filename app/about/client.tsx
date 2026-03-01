'use client'

import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0px 30px 0px 30px;
  max-width: 100%;

  @media only screen and (max-width: 576px) { 
    padding: 0px 8px 0px 8px;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 0px;
  width: 100%;
  border: 1px solid var(--border);

  @media only screen and (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  border-right: 1px solid var(--border);

  @media only screen and (max-width: 768px) { 
    padding: 8px 0px 0px 0px;
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 12px 16px 12px;
  border-bottom: 1px solid var(--border);
`;

const ArticleTitle = styled.p`
  font-size: 34px;
  line-height: 39px;
  font-weight: 600;
  margin: 0;
  font-family: 'cheltenham-normal';
  color: var(--text);
  margin-bottom: -8px;
`;

const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 12px 16px 12px;
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 40px;
`;

const AboutContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  font-family: 'cheltenham-normal';
  color: var(--text);
  word-break: break-word;

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 16px;
  }
`;

const AboutClient = () => {
  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <ArticleHeader>
            <ArticleTitle>About Ghanapolitan</ArticleTitle>
          </ArticleHeader>
          <ArticleContentContainer>
            <ArticleContent>
              <AboutContent>
                <h2>Our Mission</h2>
                <p>Ghanapolitan is Ghana's leading digital news platform, dedicated to delivering accurate, timely, and insightful journalism that informs and empowers our readers. We strive to be the most trusted source of news and information about Ghana and for Ghanaians worldwide.</p>

                <h2>Our Story</h2>
                <p>Founded in 2025, Ghanapolitan began as a small blog covering local Accra news. Today, we've grown into a comprehensive news organization with bureaus across all 16 regions of Ghana and correspondents in major global cities. Our team of award-winning journalists works around the clock to bring you the stories that matter most.</p>

                <h2>Our Values</h2>
                <p>We are committed to:</p>
                
                  Journalistic integrity and factual accuracy
                  Fearless reporting without political bias
                  Amplifying diverse Ghanaian voices
                  Innovative storytelling that embraces digital media
                  Holding power to account while giving voice to the voiceless

                <h2>Our Team</h2>
                <p>Ghanapolitan employs staff including reporters, editors, photographers, videographers, and digital specialists. Our newsroom reflects Ghana's diversity, with team members representing all regions, ethnic groups, and walks of life.</p>

                <h2>Our Commitment to Ghana</h2>
                <p>As a Ghanaian-owned and operated media company, we reinvest our profits into training young journalists and developing media infrastructure across the country. Through our Foundation, we support media literacy programs in schools and community journalism initiatives.</p>

                <h2>Connect With Us</h2>
                <p>Follow Ghanapolitan on all major social platforms @ghanapolitan and download our mobile app for breaking news alerts and personalized content.</p>
              </AboutContent>
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default AboutClient;