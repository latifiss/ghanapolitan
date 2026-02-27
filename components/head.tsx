'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { RootState } from "@/store";
import { LuMoon, LuSun } from "react-icons/lu";

const HeadWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  width: 100%;
`;

const AdContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 2px;
  padding: 0 12px;
`;

const InfoIcon = styled(IoInformationCircleOutline)`
  width: 12px;
  height: 12px;
  color: ${({ theme }) => theme.colors.grayText};
`;

const AdLabel = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grayText};
`;

const InsideAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 12px 12px;

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;

const AdWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.adBg};
  margin-bottom: 12px;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
  padding: 8px 0 0 0;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0 16px;
  }
`;

const TopRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  padding: 0px 30px;

  @media (max-width: 576px) {
    padding: 0px 16px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0px 16px;
  }
`;

const Logo = styled(Image)`
  height: 65px;
  width: auto;
  object-fit: contain;

  @media (max-width: 576px) {
    height: 35px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 45px;
  }
`;

const OtherSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 2px solid #000000
`;

const TabRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  @media only screen and (max-width: 576px) {
    justify-content: flex-start;
    padding: 8px 8px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: flex-start;
    padding: 8px 16px;
  }
`;

const TabComponent = styled.div<{ $isActive: boolean; $tabType: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 36px;
  cursor: pointer;
  text-decoration: none;

  /* 🔥 Main border for ALL tabs */
  border: 1px solid var(--border);
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.dust : theme.colors.white};

  /* 🔥 Remove border-radius so they join perfectly */
  border-radius: 0;

  /* 🔥 Remove left border for all except first tab */
  &:not(:first-child) {
    border-left: none;
  }

  /* Hover (only show soft background) */
  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.dust : theme.colors.altBg};
  }

  transition: background 0.2s ease;

  @media (max-width: 576px) {
    padding: 0 10px;
    height: 40px;
  }
`;


const Alink = styled(Link)`
  text-decoration: none;
`;

const TabText = styled.p<{ $isActive: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.text};
  font-family: inherit;
  text-decoration: none;
  margin-left: 8px;
  white-space: nowrap;
`;

/* ========== Theme Toggle ========== */

const IconButton = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const MoonIcon = styled(LuMoon)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.grayText};
`;

const SunIcon = styled(LuSun)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.grayText};
`;

const ThemeToggle = () => {
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <IconButton onClick={() => dispatch(toggleTheme())}>
      {themeMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

/* ========== Tabs ========== */

interface TabProps {
  label: string;
  isActive: boolean;
  href: string;
  TabImage: string;
}

const Tab = ({ label, isActive, href, TabImage }: TabProps) => (
  <Alink href={href} passHref>
    <TabComponent $isActive={isActive} $tabType={label}>
      <TabText $isActive={isActive}>{label}</TabText>
    </TabComponent>
  </Alink>
);

/* ========== Header Component ========== */

const Header = () => {
  const pathname = usePathname();

  const tabs = [
    { label: 'Ghana', href: '/ghana-local' },
    { label: 'Business', href: '/business' },
    { label: 'Politics', href: '/politics' },
    { label: 'Arts & Entertainment', href: '/entertainment' },
    { label: 'World', href: '/world', },
    { label: 'Africa', href: '/africa', },
    { label: 'Sports', href: '/sports', },
  ];

  return (
    <HeadWrapper>
      <AdContainer>
        <LabelContainer>
          <InfoIcon />
          <AdLabel>Advertisement</AdLabel>
        </LabelContainer>
        <InsideAdWrapper>
          <AdWrapper />
        </InsideAdWrapper>
      </AdContainer>

      <Component>
        <TopRow href="/home">
          <div />
          <Logo src="/assets/logos/logo-black.svg" alt="logo" width={322} height={65} />
          <ThemeToggle />
        </TopRow>

        <OtherSide>
          <TabRow>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                isActive={pathname === tab.href}
                href={tab.href}
              />
            ))}
          </TabRow>
        </OtherSide>
      </Component>
    </HeadWrapper>
  );
};

export default Header;
