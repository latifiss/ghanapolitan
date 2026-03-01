import { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About Ghanapolitan | Ghana\'s Leading Digital News Platform',
  description: 'Learn about Ghanapolitan - our mission to deliver accurate, timely journalism for Ghana and Ghanaians worldwide. Discover our story, values, team, and commitment to Ghana.',
  openGraph: {
    title: 'About Ghanapolitan | Ghana\'s Leading Digital News Platform',
    description: 'Learn about Ghanapolitan - our mission to deliver accurate, timely journalism for Ghana and Ghanaians worldwide. Discover our story, values, team, and commitment to Ghana.',
    type: 'website',
    locale: 'en_GH',
    siteName: 'Ghanapolitan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ghanapolitan | Ghana\'s Leading Digital News Platform',
    description: 'Learn about Ghanapolitan - our mission to deliver accurate, timely journalism for Ghana and Ghanaians worldwide.',
  },
  keywords: ['Ghanapolitan', 'Ghana news', 'Ghana media', 'digital journalism', 'Accra news', 'Ghanaian news', 'about us'],
  authors: [{ name: 'Ghanapolitan' }],
  creator: 'Ghanapolitan',
  publisher: 'Ghanapolitan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ghanapolitan.com/about',
  },
};

export default function Page() {
  return <AboutClient />;
}