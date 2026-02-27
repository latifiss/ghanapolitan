'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  margin: 8px 0px 0px 0px;
`;

const CommentsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
`

const ExtCommentsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    height: 36px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 36px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
`

const CommentsText = styled.p`
    font-size: 15px;
    font-weight: 500;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.text};
`


const CommentIcon = styled(Image)`
    width: 20px;
    height: 20px;
`

const SaveIcon = styled(Image)`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

const Actions = () => {
  return (
      <Component>
          <CommentsContainer>
              <CommentIcon src="/icons/comment.svg" alt="comments icon" width={16} height={16} />
              <CommentsText>24</CommentsText>
          </CommentsContainer>
          <SaveIcon src="/icons/save.svg" alt="save icon" width={16} height={16} />
    </Component>
  )
}

const ExtendedActions = () => {
  return (
      <Component>
          <ExtCommentsContainer>
              <CommentIcon src="/icons/comment.svg" alt="comments icon" width={16} height={16} />
              <CommentsText>24 Comments</CommentsText>
          </ExtCommentsContainer>
          <IconContainer>
          <SaveIcon src="/icons/save.svg" alt="save icon" width={16} height={16} />
          </IconContainer>
    </Component>
  )
}

export default Actions;