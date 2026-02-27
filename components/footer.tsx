'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color:  ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    bottom: 0;           
    left: 0;             
    overflow: hidden; 
    padding: 0px;
    margin-top: 55px;

    @media only screen and (max-width: 576px) { 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        padding: 0px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        padding: 0px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        padding: 0px;
    }
`;

const Lineblock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 0;
    cursor: pointer;
    padding: 16px 12px;
`;

const LineblockText = styled.p`
    text-align: left;
    white-space: nowrap;
    color:  ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    font-family: 'cheltenham-normal';
    text-decoration: none;
`

const LineblockTText = styled.p`
    text-align: left;
    white-space: nowrap;
    color:  ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    font-family: 'cheltenham-normal';
    text-decoration: none;
`

const LineblockTitle = styled.p`
    text-align: left;
    white-space: nowrap;
    color:  ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 600;
    font-family: 'cheltenham-normal';
    text-decoration: none;
`

const GridArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-right: 1px solid rgba(231,231,231, 0.3);

    @media only screen and (max-width: 576px) { 
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto);  
        grid-column-gap: 0px; 
        grid-row-gap: 6px; 
        width: 100%;
        border-bottom: 1px solid rgba(231,231,231, 0.3);
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto);  
        grid-column-gap: 0px; 
        grid-row-gap: 6px; 
        width: 100%; 
        border-right: 1px solid rgba(231,231,231, 0.3);
        border-bottom: 1px solid rgba(231,231,231, 0.3);
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, auto);  
        grid-column-gap: 0px; 
        grid-row-gap: 6px;  
    }
`

const FrameA = styled.div`
    padding: 16px 0px 16px 0px;
    border-right: 1px solid rgba(231,231,231, 0.3);
    
    @media only screen and (max-width: 576px) { 
        padding:  12px 0px 12px 0px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        padding:  12px 0px 12px 0px;  
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        padding:  16px 0px 16px 0px; 
    }
`

const Frame = styled.div`
    padding: 16px 0px 16px 0px;

    @media only screen and (max-width: 576px) { 
        padding:  12px 0px 12px 0px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        padding:  12px 0px 12px 0px;  
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        padding:  16px 0px 16px 0px;
    }
`

const FrameInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
`

const Ground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 24px 12px 24px;
    gap: 30px;
    width: 100%;

    @media only screen and (max-width: 576px) { 
        padding: 12px 24px 140px 24px;
    }
`

const GroundLeft = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 576px) { 
        padding: 0px;
    }
`

const SocialIcon = styled(Image)`
    width: 65px;
    height: 65px;
    cursor: pointer;

    @media only screen and (max-width: 576px) { 
        width: 60px;
        height: 60px;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) { 
        width: 38px;
        height: 38px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        width: 50px;
        height: 50px;
    }
`

const SocialRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media only screen and (max-width: 576px) { 
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
    }
`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media only screen and (max-width: 576px) { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        width: 100%;
    }
`

const ALink = styled(Link)`
    text-decoration: none;
`

const ATitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(231,231,231, 0.3);
    padding: 12px 12px 16px 12px;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
`;

const HeaderText = styled.p`
    position: relative;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-family: 'franklin-normal';
    color: ${({ theme }) => theme.colors.white};
`;

interface LineTitleProp {
    text: string;
}

interface LineBlockProps {
    text: string;
    href?: string;
    onClick?: () => void;
    target?: '_blank' | '_self';
}

const LineBlockTit: React.FC<LineBlockProps> = ({ text }) => {
    return (
        <ATitle>
            <Lineblock>
            <LineblockTText>{text}</LineblockTText>
            </Lineblock>
        </ATitle>
    );
}

const LineBlockItem: React.FC<LineBlockProps> = ({ text, href, onClick, target }) => {
    if (href) {
        return (
            <ALink href={href} passHref target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                <Lineblock onClick={onClick}>
                <LineblockText>{text}</LineblockText>
                </Lineblock>
            </ALink>
        );
    }
}

const LineTitle: React.FC<LineTitleProp> = ({ text }) => {
        return (
            <Lineblock>
                <LineblockTitle>{text}</LineblockTitle>
            </Lineblock>
        )
    }

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Wrapper>
                <GridArea>
                    <FrameA>
                        <LineBlockTit text="Sections" />
                        <FrameInner>
                            <LineBlockItem text="Home" href="/home" />
                            <LineBlockItem text="Business" href="/business" />
                            <LineBlockItem text="Sports" href="/sports" />
                            <LineBlockItem text="Africa" href="/africa" />
                            <LineBlockItem text="Entertainment" href="/entertainment" />
                            <LineBlockItem text="World" href="/world" />
                            <LineBlockItem text="Tech" href="/world" />
                        </FrameInner>
                </FrameA>
                <Frame>
                        <LineBlockTit text="More" />
                        <FrameInner>
                            <LineBlockItem text="About Us" href="/about" />
                            <LineBlockItem text="Privacy Policy" href="/privacy-policy" />
                            <LineBlockItem text="Terms of use" href="/terms" />
                            <LineBlockItem text="Cookies" href="/cookie-policy" />
                            <LineBlockItem text="Contact Us" href="/contact" />
                        </FrameInner>
                    </Frame>
                </GridArea>
                <Ground>
                    <GroundLeft>
                    <Image src='/assets/logos/logo-white.svg' alt='logo' width={230} height={86} />
                    </GroundLeft>
                    <SocialRow>
                        <Socials>
                            <SocialIcon src="/assets/social/facebook.svg" alt="facebook" width={65} height={65} />
                            <SocialIcon src="/assets/social/whatsapp.svg" alt="whatsapp" width={65} height={65} />
                            <SocialIcon src="/assets/social/tiktok.svg" alt="tiktok" width={65} height={65} />
                            <SocialIcon src="/assets/social/instagram.svg" alt="instagram" width={65} height={65} />
                        </Socials>
                </SocialRow>
                <Header>
              <HeaderText>© {currentYear} All Rights Reserved Ghanapolitan.</HeaderText>
          </Header>
                </Ground>
        </Wrapper>
    );
};

export default Footer