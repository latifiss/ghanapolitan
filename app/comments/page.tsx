'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Reply {
    id: number;
    author: string;
    isOP: boolean;
    text: string;
    votes: number;
    timestamp: string;
    replies?: Reply[];
}

interface CommentProps {
    comment: Reply;
    level: number;
}

const CommentWrapper = styled.div<{ $level: number }>`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    position: relative;
    padding-left: ${({ $level }) => $level > 0 ? 20 : 0}px;

    &::before {
        content: "";
        display: ${({ $level }) => $level > 0 ? 'block' : 'none'};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 2px;
        background-color: #343536;
    }
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const VoteColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-right: 8px;
    margin-top: 2px;
`;

const VoteButton = styled.span`
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    user-select: none;
    padding: 0 2px;
`;

const ContentContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const MetaRow = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #888;
    margin-bottom: 5px;
    gap: 6px;
`;

const Avatar = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 4px;
`;

const Author = styled.span<{ $isOP: boolean }>`
    font-weight: 500;
    color: #d7dadc;
    
    ${({ $isOP }) => $isOP && `
        color: #46d160; 
        font-weight: 600;
    `}
`;

const OPBadge = styled.span`
    background-color: #46d160;
    color: #1a1a1b;
    font-size: 10px;
    font-weight: 700;
    padding: 1px 4px;
    border-radius: 2px;
    margin-left: 4px;
`;

const Timestamp = styled.span`
    color: #888;
`;

const CommentText = styled.p`
    font-size: 14px;
    color: #ccc;
    line-height: 1.5;
    margin: 0 0 8px 0;
`;

const ActionsRow = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
    padding-left: 0;
`;

const ActionLink = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    padding-right: 12px;
    &:hover {
        color: #fff;
    }
`;

const VotesCount = styled.span`
    color: #d7dadc;
    font-weight: 500;
    padding: 0 4px;
`;

const DiscussionComment: React.FC<CommentProps> = ({ 
    comment = {
        id: 0, 
        author: '', 
        isOP: false, 
        text: '', 
        votes: 0, 
        timestamp: '' 
    }, 
    level 
}) => {
    const [currentVotes, setCurrentVotes] = useState(comment.votes);

    const handleVote = (direction: 'up' | 'down') => {
        setCurrentVotes(prev => prev + (direction === 'up' ? 1 : -1));
    };

    return (
        <CommentWrapper $level={level}>
            <ContentRow>
                <VoteColumn>
                    <Avatar src={`https://i.pravatar.cc/20?img=${comment.id % 20}`} alt="Avatar" />
                    <Author $isOP={comment.isOP}>{comment.author}</Author>
                    {comment.isOP && <OPBadge>OP</OPBadge>}
                    <Timestamp>{comment.timestamp}</Timestamp>
                </VoteColumn>

                <ContentContainer>
                    <CommentText>{comment.text}</CommentText>
                    
                    <ActionsRow>
                        <VoteButton onClick={() => handleVote('down')} title="Downvote">
                            <Image src="/icons/votedown.svg" alt="Downvote" width={18} height={18} />
                        </VoteButton>
                        <VotesCount>{currentVotes}</VotesCount>
                        <VoteButton onClick={() => handleVote('up')} title="Upvote">
                            <Image src="/icons/voteup.svg" alt="Upvote" width={18} height={18} />
                        </VoteButton>

                        <ActionLink>Reply</ActionLink>
                        <ActionLink>Award</ActionLink>
                        <ActionLink>Share</ActionLink>
                        <ActionLink>...</ActionLink>
                    </ActionsRow>

                    {comment.replies && comment.replies.map(reply => (
                        <DiscussionComment key={reply.id} comment={reply} level={level + 1} />
                    ))}
                </ContentContainer>
            </ContentRow>
        </CommentWrapper>
    );
};

export default DiscussionComment;