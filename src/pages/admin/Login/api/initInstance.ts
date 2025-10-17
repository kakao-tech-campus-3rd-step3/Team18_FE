import axios from 'axios';
import type { AxiosInstance, CreateAxiosDefaults } from 'axios';

const initInstance = (config: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    // TODO 0. interceptor 적용지점(동아리 운영자)
    ...config,
  });

  return instance;
};

export const apiInstance = initInstance({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
