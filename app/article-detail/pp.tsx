'use client'

import React from 'react';
import styled from 'styled-components';
import { formatDate } from '@/utils/formatDate';
import ExtendedActions from '@/components/extendedActions';
import Image from 'next/image';
import News from '@/components/news';
import NewsCard from '@/components/newscard';
import FollowGoogle from '@/components/followGoogle';

// Utility function to generate random text (Lorem Ipsum style)
export const generateRandomText = (wordCount: number, isTitle: boolean = false) => {
    // List of common words (you can expand this)
    const words = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
        "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
        "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam",
        "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut",
        "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure",
        "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse",
        "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "excepteur",
        "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa",
        "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
    ];
    
    // To ensure we can generate 2000 words, we need to repeat the word list multiple times.
    const fullWordList = [];
    while (fullWordList.length < wordCount) {
        fullWordList.push(...words);
    }
    
    // Shuffle the array of words
    const shuffledWords = fullWordList.sort(() => 0.5 - Math.random());
    
    // Select the required number of words and join them
    let text = shuffledWords.slice(0, wordCount).join(' ');

    // Capitalize the first letter
    text = text.charAt(0).toUpperCase() + text.slice(1);
    
    // Add punctuation for titles or descriptions
    if (isTitle) {
        if (!text.endsWith('?')) text += '?'; // Add a question mark for variety
    } else if (!text.endsWith('.')) {
        text += '.'; // Add a period for the description
    }

    return text;
};

// --- Styled Components (omitted for brevity, assume they are unchanged) ---

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    margin-left: 250px;
    margin-right: 250px;
    margin-bottom: 100px;

    @media only screen and (max-width: 576px) { 
        padding-top: 12px;
        margin-left: 16px;
        margin-right: 16px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        padding-top: 12px;
        margin-left: 16px;
        margin-right: 16px;
    }
`;

const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    gap: 4px;

    @media only screen and (max-width: 576px) { 
        margin-bottom: 16px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         margin-bottom: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
    gap: 12px;
`;

const Title = styled.p`
    font-size: 46px;
    line-height: 46px;
    font-weight: 800;
    font-style: italic;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'cheltenham-normal';
    text-decoration: none;
    margin-bottom: 3px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media only screen and (max-width: 576px) { 
        font-size: 32px;
    line-height: 36px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         font-size: 32px;
    line-height: 36px;
    }
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.grayText};
    font-family: 'franklin-normal';
    text-decoration: none;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media only screen and (max-width: 576px) { 
        font-size: 16px;
    line-height: 22px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
         font-size: 16px;
    line-height: 22px;
    }
`;

const ActionsRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Thumbnail = styled(Image)`
    width: 100%;
    height: auto;
    min-height: 400px;
    display: block;
    object-fit: cover;
    margin: 8px 0px;

    @media only screen and (max-width: 576px) { 
        width: 100%;
        height: auto;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        width: 100%;
        height: auto;
    }
`

const ContentText = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.grayText};
    font-family: 'franklin-normal';
    text-decoration: none;
    overflow: hidden;
`;

const GoogleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const OtherSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 100px;
    gap: 12px;
`;

const OtHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 8px;
    gap: 12px;
`;

const OtText = styled.p`
    font-size: 22px;
    line-height: 28px;
    font-weight: 800;
    font-style: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'cheltenham-normal';
    margin-bottom: 3px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    /* 🛑 REMOVED redundant/conflicting text-decoration properties */
    text-decoration: none;
    
    /* 👇 ADDED CSS for Double Underline Effect */
    display: inline; /* Needed for box-shadow to wrap the text content */
    box-shadow: 
        /* First Line (1px thick, 2px offset from baseline) */
        0 2px 0 0 currentColor, 
        /* Second Line (1px thick, 5px offset from baseline) */
        0 5px 0 0 currentColor; 

    /* Note: If you want the lines to be colored differently, replace 'currentColor' 
       with a specific color code or theme variable. */

    @media only screen and (max-width: 576px) { 
        font-size: 22px;
        line-height: 28px;
    }
    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        font-size: 22px;
        line-height: 28px;
    }
`;

const Page = () => {
    // 1. Generate random data
    const randomTitle = generateRandomText(8, true); // 8 words, mark as title
    const randomDescription = generateRandomText(40); // 40 words
    
    // UPDATED: Generate 2000 words for the main content
    const randomContent = generateRandomText(700); 
    
    return (
        <PageWrapper>
            <Head>
                {/* 2. Inject random data */}
                <Title>{randomTitle}</Title>
                <Description>{randomDescription}</Description>
                <ActionsRow>
                    <ExtendedActions/>
                </ActionsRow>
            </Head>
            <Content>
                <Thumbnail src="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale" alt='title' width={500} height={500} />
                {/* Use the 2000-word randomContent variable */}
                <ContentText>{randomContent}</ContentText>
            </Content>
            <GoogleSection>
                <FollowGoogle googleSearchUrl="https://www.google.com/search" googleNewsUrl="https://news.google.com/" />
            </GoogleSection>
            <OtherSection>
                <OtHead>
                    <OtText>More News</OtText>
                </OtHead>
                <NewsCard
  tag="opinion"
  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
  time="19 MIN AGO"
  image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                />
                <NewsCard
                  tag="opinion"
                  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
                  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
                  time="19 MIN AGO"
                  image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                        />
                        <NewsCard
  tag="opinion"
  title="Ghana’s Economic Outlook for 2024: Navigating Challenges and Opportunities"
  description="As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities. As Ghana steps into 2024, the economic landscape is marked by a blend of challenges and opportunities."
  time="19 MIN AGO"
  image="https://static01.nyt.com/images/2024/12/23/multimedia/00ukraine-civilian-prisoner-03-wjlh/00ukraine-civilian-prisoner-03-wjlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
        />
            </OtherSection>
        </PageWrapper>
    );
};

export default Page;