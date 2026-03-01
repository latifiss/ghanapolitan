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
    flex-direction: column;
    align-items: center;
    padding: 0px 8px 0px 8px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 0px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0px 24px 0px 24px;
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
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid var(--border);
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

  @media only screen and (max-width: 576px) { 
    padding: 12px 12px 8px 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    padding: 12px 12px 8px 12px;
  }
`;

const ArticleTitle = styled.p`
  text-align: left;
  font-size: 34px;
  line-height: 39px;
  font-weight: 600;
  margin: 0;
  font-family: 'cheltenham-normal';
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
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

const TermsContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  font-family: 'cheltenham-normal';
  color: var(--text);
  word-break: break-word;

  h1, h2 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  p, ul {
    margin-bottom: 16px;
  }

  ul {
    padding-left: 20px;
  }
`;

const TermsClient = () => {
  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <ArticleHeader>
            <ArticleTitle>Our Terms and Conditions</ArticleTitle>
          </ArticleHeader>
          <ArticleContentContainer>
            <ArticleContent>
              <TermsContent>
                <h1>Welcome to Ghanapolitan.com!</h1>
                <p>These terms and conditions outline the rules and regulations for the use of Ghanapolitan.com's website, located at <strong>Ghanapolitan.com</strong>.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Ghanapolitan.com if you do not agree to take all of the terms and conditions stated on this page.</p>
                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you...</p>

                <h2>Cookies</h2>
                <p>We employ the use of cookies. By accessing Ghanapolitan.com, you agreed to use cookies in agreement with our Privacy Policy.</p>

                <h2>License</h2>
                <p>Unless otherwise stated, Ghanapolitan.com and/or its licensors own the intellectual property rights for all material on this site...</p>

                <ul>
                  <li>Republish material from Ghanapolitan.com</li>
                  <li>Sell, rent or sub-license material from Ghanapolitan.com</li>
                  <li>Reproduce, duplicate or copy material from Ghanapolitan.com</li>
                  <li>Redistribute content from Ghanapolitan.com</li>
                </ul>

                <h2>Hyperlinking to our Content</h2>
                <p>The following organizations may link to our Website without prior written approval:</p>
                <ul>
                  <li>Government agencies</li>
                  <li>Search engines</li>
                  <li>News organizations</li>
                  <li>Online directories</li>
                  <li>Accredited businesses</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>To the maximum extent permitted by law, we exclude all warranties and conditions relating to our website and its use...</p>

              </TermsContent>
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default TermsClient;