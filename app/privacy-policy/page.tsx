import { Metadata } from 'next';
import PrivacyPolicyClient from './client';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ghanapolitan',
  description: 'Read Ghanapolitan\'s privacy policy to understand how we collect, use, and protect your personal information when you visit our website.',
  openGraph: {
    title: 'Privacy Policy | Ghanapolitan',
    description: 'Read Ghanapolitan\'s privacy policy to understand how we collect, use, and protect your personal information.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Ghanapolitan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Ghanapolitan',
    description: 'Read Ghanapolitan\'s privacy policy to understand how we collect, use, and protect your personal information.',
  },
  keywords: ['Ghanapolitan privacy policy', 'Ghana news privacy', 'data protection', 'cookie policy', 'privacy terms'],
  authors: [{ name: 'Ghanapolitan' }],
  creator: 'Ghanapolitan',
  publisher: 'Ghanapolitan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ghanapolitan.com/privacy-policy',
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}