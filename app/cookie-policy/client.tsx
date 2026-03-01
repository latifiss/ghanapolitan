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

const CookiePolicyClient = () => {
  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <ArticleHeader>
            <ArticleTitle>Cookie Policy</ArticleTitle>
          </ArticleHeader>
          <ArticleContentContainer>
            <ArticleContent>
              <TermsContent>
                <h1>Introduction</h1>
                <p>This is the cookie policy for Ghanapolitan (collectively referred to as "Ghanapolitan", "we", "us" or "our" in this policy), our site Ghanapolitan.com, and our associated apps ("our sites"). Some of our other sites and services have their own cookie policies, which will be relevant to you when you are using those sites and services.</p>

                <h2>1. What is a cookie?</h2>
                <p>A cookie is a small file that contains letters and numbers that is downloaded to your device when you visit a website. It is sent to your browser and stored on your computer's hard drive, tablet or mobile device. When you visit our sites it can allow us to recognise and remember you.</p>
                <p>Technologies similar to cookies:</p>
                <ul>
                  <li>Device fingerprinting – using a set of information without relying on cookies to identify a particular device</li>
                  <li>Local storage – storage of data in the local device's cache</li>
                  <li>Pixels – small pixel graphics used to track user behavior</li>
                  <li>Scripts – small programs embedded within websites</li>
                </ul>
                <p>In this policy we call all cookies and similar technologies "cookies".</p>

                <h2>2. First-party and third-party cookies</h2>
                <p>There are different types of cookies:</p>
                <ul>
                  <li>First-party cookies – set by Ghanapolitan when you use our site</li>
                  <li>Third-party cookies – set by other organizations when you use our site</li>
                </ul>

                <h2>3. How do we use cookies?</h2>
                <p>We use cookies to:</p>
                <ul>
                  <li>Keep you signed in</li>
                  <li>Deliver content to you</li>
                  <li>Show you relevant journalism</li>
                  <li>Provide a better reading experience</li>
                  <li>Understand how you use our site</li>
                  <li>Process payments and refunds</li>
                  <li>Monitor user interactions</li>
                  <li>Deliver relevant advertising</li>
                </ul>

                <h2>4. What types of cookies do we use?</h2>
                <p>We use four types of cookies:</p>
                <ul>
                  <li>Strictly Necessary – essential cookies</li>
                  <li>Performance – measure site usage</li>
                  <li>Functionality – remember preferences</li>
                  <li>Advertising – for personalized ads</li>
                </ul>

                <h2>5. How long do cookies last?</h2>
                <p>Session cookies expire when you close your browser. Persistent cookies stay on your device for up to 13 months.</p>

                <h2>6. How do we use cookies for advertising?</h2>
                <p>We use cookies to understand your interests and show relevant advertising. We may share information with advertising partners.</p>

                <h2>7. How do third parties use cookies for advertising?</h2>
                <p>With your consent, we share data with advertising partners to show you relevant ads on other sites. Partners include:</p>
                <ul>
                  <li>Google Ad Manager</li>
                  <li>Microsoft Advertising</li>
                  <li>Criteo</li>
                  <li>Teads</li>
                </ul>

                <h2>8. How can you control advertising cookies?</h2>
                <p>You can manage cookie preferences through our Privacy Settings link in the footer. You may still see non-personalized ads.</p>
              </TermsContent>
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default CookiePolicyClient;