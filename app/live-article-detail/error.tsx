'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  max-width: 100%;
  max-height: 50vh;
  background-color: var(--white);
`;

const Content = styled.div`
  display: flex;
  width: auto;
  max-width: 298px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ErrorTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 24px;
`;

const ErrorHead = styled.p`
  font-size: 24px;
  font-weight: 600;
  font-family: 'cheltenham-normal';
  color: var(--text);
  line-height: auto;
  text-align: center;
  margin-bottom: 8px;
  white-space: nowrap
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
  color: var(--text);
  font-family: 'franklin-normal';
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 286px;
  height: 44px;
  padding: 0px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  background-color: var(--text);
  color: #000;
  max-width: 298px;
  outline: none;
  text-align: center;
  user-select: none;
`;

const ButtonText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  margin-top: 4px;
  color: var(--white);
  font-family: 'cheltenham-normal';
`;

export default function ErrorComponent() {
  return (
    <Wrapper>
        <Content>
          <ErrorTextContent>
            <ErrorHead>
                Ooops! – Something went wrong.
            </ErrorHead>
            <ErrorText>
              Please reload the page or tap the button to go to homepage.
            </ErrorText>
          </ErrorTextContent>
          <Button href="/">
            <ButtonText>Go to Homepage</ButtonText>
          </Button>
        </Content>
    </Wrapper>
  );
}