import Client from './client';
import { getGraphics } from '@/lib/api/graphics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Charts & Visual Stories | Ghanapolitan',
  description: 'Visual breakdowns explaining the forces shaping Ghanaian and African economy, markets, and politics.',
  openGraph: {
    title: 'Charts & Visual Stories | Ghanapolitan',
    description: 'Visual breakdowns explaining the forces shaping Ghanaian and African economy, markets, and politics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charts & Visual Stories | Ghanapolitan',
    description: 'Visual breakdowns explaining the forces shaping Ghanaian and African economy, markets, and politics.',
  },
  keywords: ['charts', 'visual stories', 'data visualization', 'infographics', 'Ghana economy', 'African markets', 'political analysis'],
};

export default async function Page() {
  const res = await getGraphics(1, 12);
  const graphics = res?.status === 'success' ? res.data?.graphics || [] : [];

  return <Client graphics={graphics} totalPages={res?.totalPages || 1} />;
}