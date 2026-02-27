'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 12px;
`;

const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
`

const Author = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'franklin-normal';
  text-decoration: none;
  display: block; 
  white-space: nowrap;
`

const Time = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.grayText};
  font-family: 'franklin-normal';
  text-decoration: none;
  display: block; 
  white-space: nowrap;
`

const ContentText = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'franklin-normal';
    text-decoration: none;
    /* ❌ Removed: overflow: hidden; */

    /* 👇 CSS Rules to Ensure Words Wrap Without Breaking (Keeping these to preserve wrapping behavior) */
    word-break: normal;
    hyphens: none;
    overflow-wrap: break-word; 
`;

const ExtCommentsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
`

const CommentIcon = styled(Image)`
    width: 20px;
    height: 20px;
`

const CommentsText = styled.p`
    font-size: 15px;
    font-weight: 500;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.text};
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  padding-left: 54px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 12px;
`;

const ReplySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
    margin-right: 40px;
`;

const HeadRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    padding-left: 54px;
    margin-bottom: -8px;
`

const HeadText = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'cheltenham-normal';
  text-decoration: none;
  white-space: nowrap;
    text-decoration: underline;

`;


const ReplyComponent = () => {
  return (
      <ReplyWrapper>
          <AuthorContainer>
              <Author>JohnDoe</Author>
                <Time>•</Time>
                <Time>5 min read</Time>
          </AuthorContainer>
          <ContentText>Giving Trump the first FIFA Peace Prize assures that it remains a worthless piece of sweetener political candy of no consequence to anyone that considers peace a virtue and awards for achieving and promoting it an honor.</ContentText>
          <Footer>
          <ExtCommentsContainer>
              <CommentIcon src="/icons/voteup.svg" alt="comments icon" width={16} height={16} />
              <CommentsText>24</CommentsText>
              <CommentIcon src="/icons/votedown.svg" alt="comments icon" width={16} height={16} />
          </ExtCommentsContainer>
          <ExtCommentsContainer>
              <CommentIcon src="/icons/comment.svg" alt="reply" width={16} height={16} />
              <CommentsText>Reply</CommentsText>
              </ExtCommentsContainer>
              </Footer>
    </ReplyWrapper>
  )
}

const Comment = () => {
  return (
      <ComponentWrapper>
          <AuthorContainer>
              <Author>JohnDoe</Author>
              <Time>•</Time>
                <Time>5 min read</Time>
          </AuthorContainer>
          <ContentText>Giving Trump the first FIFA Peace Prize assures that it remains a worthless piece of sweetener political candy of no consequence to anyone that considers peace a virtue and awards for achieving and promoting it an honor. As one TV commentator noted today that the FIFA is giving Trump a peace award while he is killing fishermen in the Caribbean in prelude to starting a war. Preposterous!</ContentText>
          <Footer>
          <ExtCommentsContainer>
              <CommentIcon src="/icons/voteup.svg" alt="comments icon" width={16} height={16} />
              <CommentsText>24</CommentsText>
              <CommentIcon src="/icons/votedown.svg" alt="comments icon" width={16} height={16} />
          </ExtCommentsContainer>
          <ExtCommentsContainer>
              <CommentIcon src="/icons/comment.svg" alt="reply" width={16} height={16} />
              <CommentsText>Reply</CommentsText>
              </ExtCommentsContainer>
          </Footer>
          <ReplySection>
              <HeadRow>
                  <HeadText>Replies</HeadText>
              </HeadRow>
              <ReplyComponent />
                <ReplyComponent />
          </ReplySection>
    </ComponentWrapper>
  )
}

export default Comment