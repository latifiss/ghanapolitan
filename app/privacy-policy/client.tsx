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
    padding: 0px 8px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0px 24px;
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
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-right: 1px solid var(--border);

  @media only screen and (max-width: 768px) {
    border-right: none;
    padding-top: 8px;
  }
`;

const ArticleHeader = styled.div`
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid var(--border);
`;

const ArticleTitle = styled.p`
  font-size: 34px;
  line-height: 39px;
  font-weight: 600;
  font-family: 'cheltenham-normal';
  color: var(--text);
  margin-bottom: 16px;
`;

const ArticleContentContainer = styled.div`
  padding: 12px;
  width: 100%;
`;

const ArticleContent = styled.div`
  padding-bottom: 40px;
  width: 100%;
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
    color: var(--link);
    text-decoration: underline;
  }
`;

const PrivacyPolicyClient = () => {
  return (
    <PageWrapper>
      <LayoutGrid>
        <LeftColumn>
          <ArticleHeader>
            <ArticleTitle>Our Privacy Policy</ArticleTitle>
          </ArticleHeader>
          <ArticleContentContainer>
            <ArticleContent>
              <TermsContent>
                <h1>Our Privacy Policy</h1>
                <p>
                  At Ghanapolitan,  one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ghanapolitan and how we use it.
                </p>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>

                <h2>Log Files</h2>
                <p>
                  Ghanapolitan follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>

                <h2>Cookies and Web Beacons</h2>
                <p>
                  Like any other website, Ghanapolitan uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>

                <h2>Google DoubleClick DART Cookie</h2>
                <p>
                  Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank">https://policies.google.com/technologies/ads</a>
                </p>

                <h2>Our Advertising Partners</h2>
                <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data:</p>
                <ul>
                  <li><a href="https://policies.google.com/technologies/ads" target="_blank">Google</a></li>
                  <li><a href="https://policies.google.com/technologies/ads" target="_blank">Newsgain</a></li>
                  <li><a href="https://www.inmobi.com/privacy-policy/" target="_blank">InMobi</a></li>
                  <li><a href="https://www.smaato.com/privacy/" target="_blank">Smaato</a></li>
                  <li><a href="https://www.xandr.com/privacy/" target="_blank">Xandr</a></li>
                  <li><a href="https://lp.outbrain.com/gdpr-ready/" target="_blank">Outbrain</a></li>
                  <li><a href="https://docs.vuukle.com/privacy-and-policy/" target="_blank">Vuukle</a></li>
                  <li><a href="https://www.adswizz.com/our-privacy-policy/" target="_blank">AdsWizz</a></li>
                </ul>

                <h2>Privacy Policies</h2>
                <p>
                  You may consult this list to find the Privacy Policy for each of the advertising partners of Ghanapolitan.
                </p>
                <p>
                  Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Ghanapolitan, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                <p>
                  Note that Ghanapolitan has no access to or control over these cookies that are used by third-party advertisers.
                </p>

                <h2>Third Party Privacy Policies</h2>
                <p>
                  Ghanapolitan's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
                </p>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>

                <h2>Children's Information</h2>
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p>
                  Ghanapolitan does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>

                <h2>Online Privacy Policy Only</h2>
                <p>
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Ghanapolitan. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>

                <h2>Consent</h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
              </TermsContent>
            </ArticleContent>
          </ArticleContentContainer>
        </LeftColumn>
      </LayoutGrid>
    </PageWrapper>
  );
};

export default PrivacyPolicyClient;