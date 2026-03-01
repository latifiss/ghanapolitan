'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { getSourceImage } from '@/utils/getSourceImage';

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 12px 0px 16px 0px;
  max-width: 100%;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 8px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const ExtCommentsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.white};
    }
`

const IconContainer = styled.button<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 36px;
    border: 1px solid ${({ theme, $active }) => 
        $active ? '#fbbf24' : theme.colors.border};
    border-radius: 99px;
    padding: 0px 12px;
    background: ${({ $active }) => $active ? '#fef3c7' : 'transparent'};
    transition: all 0.2s ease;
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

const CommentIcon = styled(Image)`
    width: 20px;
    height: 20px;
`

const SaveIcon = styled(Image)`
    width: 20px;
    height: 20px;
`

const ShareIcon = styled(Image)`
    width: 20px;
    height: 20px;
`

const SourceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
`

const SourceText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'franklin-normal';
  white-space: nowrap;
  margin-top: 3px; 
  clear: both; 
`

const SourceImage = styled(Image)`
  width: 16px;  
  height: 16px;
  object-fit: contain;
`

interface ExtendedActionsProps {
    onBookmark: () => void;
    onShare: () => void;
    isBookmarked: boolean;
    sourceText?: string;
}

const ExtendedActions = ({ onBookmark, onShare, isBookmarked, sourceText }: ExtendedActionsProps) => {
    const shouldShowSource = sourceText && sourceText.toLowerCase() !== 'Ghanapolitan'
    const sourceImage = sourceText ? getSourceImage(sourceText) : '/assets/sources/default.png'

    return (
        <Component>
            <Left>
                {shouldShowSource && (
          <SourceRow>
            <SourceImage src={sourceImage} alt={sourceText} width={14} height={14} />
                        <SourceText>{sourceText}</SourceText>
                        <div></div>
          </SourceRow>
        )}
            </Left>
            <Right>
                <ExtCommentsContainer onClick={onShare}>
                    <ShareIcon src="/icons/share.svg" alt="share icon" width={16} height={16} />
                    <CommentsText>Share article</CommentsText>
                </ExtCommentsContainer>
            </Right>
        </Component>
    )
}

export default ExtendedActions;