import { Metadata } from 'next';
import TermsClient from './client';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Ghanapolitan',
  description: 'Read Ghanapolitan\'s terms and conditions outlining the rules, regulations, and guidelines for using our website and services.',
  openGraph: {
    title: 'Terms and Conditions | Ghanapolitan',
    description: 'Read Ghanapolitan\'s terms and conditions outlining the rules, regulations, and guidelines for using our website and services.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Ghanapolitan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Ghanapolitan',
    description: 'Read Ghanapolitan\'s terms and conditions for using our website and services.',
  },
  keywords: ['Ghanapolitan terms', 'terms and conditions', 'website terms', 'user agreement', 'legal terms', 'Ghana news terms'],
  authors: [{ name: 'Ghanapolitan' }],
  creator: 'Ghanapolitan',
  publisher: 'Ghanapolitan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ghanapolitan.com/terms',
  },
};

export default function Page() {
  return <TermsClient />;
}