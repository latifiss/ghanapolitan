import type { Metadata } from 'next';

import Providers from '../store/providers';
import ThemeInitializer from '../store/themeInitializer';
import GlobalStyles from '../styles/GlobalStyles';
import ProgressBar from '@/components/progressBar';
import StyledComponentsRegistry from './registry';
import ScrollToTop from '@/hooks/scrollToTop';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomAd from '@/ads/bottomAd';

export const metadata: Metadata = {
  title: {
    default: 'Ghanapolitan | News, Business, Markets and More',
    template: '%s | Ghanapolitan',
  },
  description:
    'Stay informed with the latest news, analysis and updates from Ghana, Africa and around the world. Follow business, politics, sports, entertainment and financial markets.',
  applicationName: 'Ghanapolitan',
  keywords: [
    'Ghana news',
    'Ghana business news',
    'Ghana politics',
    'African news',
    'Ghana markets',
    'Ghanapolitan',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Ghanapolitan',
    title: 'Ghanapolitan | News, Business, Markets and More',
    description:
      'News, analysis and updates from Ghana, Africa and around the world.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghanapolitan | News, Business, Markets and More',
    description:
      'News, analysis and updates from Ghana, Africa and around the world.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <ProgressBar />
            <ThemeInitializer />
            <GlobalStyles />
            <ScrollToTop />
            <Header />
            {children}
            <Footer />
            <BottomAd />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
