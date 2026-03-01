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

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
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

  @media only screen and (max-width: 576px) { 
    padding: 12px 12px 8px 12px;
  }
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

  a {
    color: var(--primary-main);
    text-decoration: underline;
  }
`;

const ContactClient = () => {
  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <ArticleHeader>
            <ArticleTitle>Contact Information</ArticleTitle>
          </ArticleHeader>
          <ArticleContentContainer>
            <ArticleContent>
              <TermsContent>
                <h1>How to contact editorial departments</h1>
                <p>Please take care to send queries to the correct destination as there is no guarantee that messages will be forwarded.</p>

                <h2>To send us story tips confidentially</h2>
                <p>For information on how to contact Ghanapolitan journalists securely, please use our SecureDrop portal or encrypted messaging options.</p>

                <h2>To contact a member of staff</h2>
                <p>Individual staff, whether editorial or commercial, can be contacted using this email format:</p>
                <p>Firstname.lastname@ghanapolitan.com</p>

                <h2>Letters to the editor</h2>
                <p>Letters for publication in Ghanapolitan should be sent to:</p>
                <p>letters@ghanapolitan.com</p>
                <p>The sender's full postal address and phone number are required for verification only.</p>

                <h2>Corrections and clarifications</h2>
                <p>It is the policy of Ghanapolitan to correct significant editorial errors and handle editorial complaints promptly. Our editorial team reviews all correction requests.</p>

                <h2>General inquiries</h2>
                <p>For general questions, please contact: info@ghanapolitan.com</p>

                <h2>Advertising inquiries</h2>
                <p>For advertising opportunities: ads@ghanapolitan.com</p>

                <h2>Technical support</h2>
                <p>For website or app issues: support@ghanapolitan.com</p>
              </TermsContent>
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default ContactClient;