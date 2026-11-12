import { apiClient } from './client';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/news';

export const getAllLatestNews = async () => {
  const res = await apiClient.get(`${BASE_URL}/latest`);
  return res.data;
};

export const getLatestNewsByCategory = async (category: string) => {
  const res = await apiClient.get(`${BASE_URL}/latest-by-category`, {
    params: { category },
  });
  return res.data;
};
