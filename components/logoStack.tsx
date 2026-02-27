'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { getMarketLogoByName } from '@/utils/getMarketLogo'

const StackWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.div<{ $index: number }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ $index }) => ($index === 0 ? '0' : '-4px')};
  z-index: ${({ $index }) => $index};
`

const LogoImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`

interface Props {
  companyNames?: string[]
}

const LogoStack = ({ companyNames }: Props) => {
  if (!companyNames || companyNames.length === 0) return null

  const logoItems = companyNames.map((name, index) => ({
    id: `logo-${index}`,
    src: getMarketLogoByName(name),
    alt: name
  }))

  return (
    <StackWrapper>
      {logoItems.slice(0, 2).map((logo, index) => (
        <Logo key={logo.id} $index={index}>
          <LogoImage
            src={logo.src}
            alt={logo.alt}
            width={18}
            height={18}
          />
        </Logo>
      ))}
    </StackWrapper>
  )
}

export default LogoStack