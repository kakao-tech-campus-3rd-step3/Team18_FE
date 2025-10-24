import axios from 'axios';
import { getAccessToken } from '@/pages/admin/Signup/utils/token';
import type { AxiosInstance, CreateAxiosDefaults } from 'axios';

const initInstance = (config: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    ...config,
  });

  return instance;
};

export const apiInstance = initInstance({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
