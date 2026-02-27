'use client'

import Providers from "../store/providers";
import ThemeInitializer from "../store/themeInitializer";
import GlobalStyles from "../styles/GlobalStyles";
import ProgressBar from "@/components/progressBar";
import StyledComponentsRegistry from "./registry";
import ScrollToTop from "@/hooks/scrollToTop";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomAd from "@/ads/bottomAd";

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