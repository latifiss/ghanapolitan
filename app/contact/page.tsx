import { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact Us | Ghanapolitan',
  description: 'Get in touch with Ghanapolitan. Find contact information for editorial departments, story tips, letters to the editor, corrections, advertising inquiries, and technical support.',
  openGraph: {
    title: 'Contact Us | Ghanapolitan',
    description: 'Get in touch with Ghanapolitan. Find contact information for editorial departments, story tips, letters to the editor, corrections, advertising inquiries, and technical support.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Ghanapolitan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Ghanapolitan',
    description: 'Get in touch with Ghanapolitan. Find contact information for editorial departments, story tips, and more.',
  },
  keywords: ['Ghanapolitan contact', 'Ghana news contact', 'editorial department', 'story tips', 'letters to the editor', 'advertising inquiries', 'technical support'],
  authors: [{ name: 'Ghanapolitan' }],
  creator: 'Ghanapolitan',
  publisher: 'Ghanapolitan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ghanapolitan.com/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}