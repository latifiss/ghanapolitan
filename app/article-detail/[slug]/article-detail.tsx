'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatDate } from '@/utils/formatDate';
import ExtendedActions from '@/components/extendedActions';
import Image from 'next/image';
import NewsCard from '@/components/newscard';
import FollowGoogle from '@/components/followGoogle';
import { Article } from '@/lib/api/articles';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
    margin-left: 250px;
    margin-right: 250px;
    margin-bottom: 100px;

    @media only screen and (max-width: 768px) { 
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
    margin-bottom: 16px;
    gap: 4px;
`;

const Title = styled.h1`
    font-size: 46px;
    line-height: 46px;
    font-weight: 800;
    font-style: italic;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'cheltenham-normal';
    margin-bottom: 6px;

    @media only screen and (max-width: 576px) { 
    font-size: 26px;
    line-height: 30px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) { 
    font-size: 30px;
    line-height: 34px;
  }
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.grayText};
    font-family: 'franklin-normal';
    margin-bottom: 14px;

    @media only screen and (max-width: 768px) { 
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
    padding: 8px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-top: 12px;
`;

const ContentText = styled.div`
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'franklin-normal';
    width: 100%;
    
    p { margin-bottom: 1.5rem; }
    
    img {
        max-width: 100%;
        height: auto;
        margin: 2rem 0;
    }
    
    h2, h3 {
        font-family: 'cheltenham-normal';
        margin: 2rem 0 1rem;
        font-weight: 800;
    }

    blockquote {
        border-left: 3px solid ${({ theme }) => theme.colors.primary || '#059669'};
        padding-left: 20px;
        margin: 30px 0;
        font-style: italic;
        font-size: 22px;
        color: #444;
    }
`;

const Thumbnail = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 24px;
`;

const OtText = styled.h2`
    font-size: 22px;
    line-height: 28px;
    font-weight: 800;
    font-family: 'cheltenham-normal';
    display: inline-block;
    box-shadow: 0 2px 0 0 currentColor, 0 5px 0 0 currentColor;
    margin-bottom: 24px;
`;

const TagBadge = styled.span<{ type: string }>`
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 8px;
    background: ${({ type }) => {
        if (type === 'breaking') return '#fee2e2';
        if (type === 'live') return '#fef3c7';
        return '#eee';
    }};
    color: ${({ type }) => {
        if (type === 'breaking') return '#dc2626';
        if (type === 'live') return '#d97706';
        return '#000';
    }};
    border: 1px solid ${({ type }) => {
        if (type === 'breaking') return '#fecaca';
        if (type === 'live') return '#fde68a';
        return '#ddd';
    }};
`;

const CategoryBadge = styled.span`
    display: inline-block;
    padding: 4px 12px;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 600;
    background: #e0f2fe;
    color: #0369a1;
    border-radius: 4px;
`;

const Toast = styled.div<{ $show: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 50%;
    padding: 12px 20px;
    background: #059669;
    color: white;
    border-radius: 0px;
    font-family: 'franklin-normal';
    font-size: 14px;
    opacity: ${({ $show }) => $show ? 1 : 0};
    transform: ${({ $show }) => $show ? 'translateY(0)' : 'translateY(10px)'};
    transition: all 0.3s ease;
    z-index: 1000;
    pointer-events: none;
`;

interface ArticleDetailProps {
    article: Article;
    similarArticles: Article[];
}

const ArticleDetail = ({ article, similarArticles }: ArticleDetailProps) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (!article?._id) return;

        if (typeof window !== 'undefined') {
            const bookmarks = JSON.parse(localStorage.getItem('ghanapolitan_bookmarks') || '[]');
            setIsBookmarked(bookmarks.includes(article._id));
        }
    }, [article?._id]);

    if (!article) {
        return (
            <PageWrapper>
                <div style={{ padding: '20px', fontFamily: 'franklin-normal' }}>Loading article...</div>
            </PageWrapper>
        );
    }

    const handleBookmark = () => {
        if (typeof window === 'undefined' || !article._id) return;
        
        const bookmarks = JSON.parse(localStorage.getItem('ghanapolitan_bookmarks') || '[]');
        let newBookmarks;
        
        if (isBookmarked) {
            newBookmarks = bookmarks.filter((id: string) => id !== article._id);
            setIsBookmarked(false);
            showToastMessage('Removed from bookmarks');
        } else {
            newBookmarks = [...bookmarks, article._id];
            setIsBookmarked(true);
            showToastMessage('Added to bookmarks');
        }
        localStorage.setItem('ghanapolitan_bookmarks', JSON.stringify(newBookmarks));
    };

    const showToastMessage = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                showToastMessage('Link copied to clipboard!');
            })
            .catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = window.location.href;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToastMessage('Link copied to clipboard!');
                } catch {
                    showToastMessage('Failed to copy link');
                }
                document.body.removeChild(textArea);
            });
    };

    const handleShare = async () => {
        if (typeof window === 'undefined') return;
        
        const shareData = {
            title: article.title,
            text: article.description || article.title,
            url: window.location.href,
        };
        
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    copyToClipboard();
                }
            }
        } else {
            copyToClipboard();
        }
    };

    return (
        <PageWrapper>
            <Head>
                <div style={{ marginBottom: '8px' }}>
                    {article.isBreaking && <TagBadge type="breaking">Breaking News</TagBadge>}
                    {article.isLive && <TagBadge type="live">Live Now</TagBadge>}
                    {article.isTopstory && <TagBadge type="default">Top Story</TagBadge>}
                    {article.isHeadline && <TagBadge type="default">Headline</TagBadge>}
                </div>
                
                <Title>{article.title}</Title>
                <Description>{article.description}</Description>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginTop: '-8px',
                    fontFamily: 'franklin-normal' 
                }}>
                    <div style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>
                        {formatDate(article.published_at)}
                    </div>
                </div>

                <ActionsRow>
                    <ExtendedActions 
                        onBookmark={handleBookmark}
                        onShare={handleShare}
                        isBookmarked={isBookmarked}
                        sourceText={article.source_name}
                    />
                </ActionsRow>
            </Head>

            {article.image_url && (
                <Thumbnail 
                    src={article.image_url} 
                    alt={article.title} 
                    width={1200} 
                    height={675}
                    priority
                />
            )}

            <ContentText 
                dangerouslySetInnerHTML={{ 
                    __html: typeof article.content === 'string' ? article.content : '' 
                }} 
            />

            <div style={{ width: '100%', marginTop: '1px' }}>
                <FollowGoogle 
                    googleSearchUrl={`https://www.google.com/search?q=${encodeURIComponent(article.title)}`}
                    googleNewsUrl="https://news.google.com/"
                />
            </div>

            {similarArticles && similarArticles.length > 0 && (
                <div style={{ marginTop: '60px', width: '100%' }}>
                    <OtText>More News</OtText>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {similarArticles.slice(0, 3).map((item) => (
                            <NewsCard
                                key={item._id}
                                title={item.title}
                                description={item.description}
                                time={formatDate(item.published_at)}
                                image={item.image_url || "/placeholder.jpg"}
                                subcategory={item.category}
                            />
                        ))}
                    </div>
                </div>
            )}

            <Toast $show={showToast}>
                {toastMessage}
            </Toast>
        </PageWrapper>
    );
};

export default ArticleDetail;