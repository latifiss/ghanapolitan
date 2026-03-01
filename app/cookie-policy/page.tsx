import { Metadata } from 'next';
import CookiePolicyClient from './client';

export const metadata: Metadata = {
  title: 'Cookie Policy | Ghanapolitan',
  description: 'Read Ghanapolitan\'s cookie policy to understand how we use cookies and similar technologies to enhance your browsing experience, deliver personalized content, and show relevant advertising.',
  openGraph: {
    title: 'Cookie Policy | Ghanapolitan',
    description: 'Read Ghanapolitan\'s cookie policy to understand how we use cookies and similar technologies to enhance your browsing experience.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Ghanapolitan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Ghanapolitan',
    description: 'Read Ghanapolitan\'s cookie policy to understand how we use cookies and similar technologies.',
  },
  keywords: ['Ghanapolitan cookie policy', 'cookie policy', 'browser cookies', 'tracking technologies', 'privacy', 'data collection', 'advertising cookies'],
  authors: [{ name: 'Ghanapolitan' }],
  creator: 'Ghanapolitan',
  publisher: 'Ghanapolitan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ghanapolitan.com/cookie-policy',
  },
};

export default function Page() {
  return <CookiePolicyClient />;
}