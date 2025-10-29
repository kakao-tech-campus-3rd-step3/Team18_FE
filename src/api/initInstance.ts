import axios from 'axios';
import { getAccessToken, setAccessToken } from '@/pages/admin/Signup/utils/token';
import { reissueAccessToken } from './auth';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

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

apiInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  async function onRejected(e: AxiosError) {
    const error = e as AxiosError<ErrorResponse>;
    const config = error.config;
    if (error.response?.status === 401 && config) {
      try {
        const tokenResponse = await reissueAccessToken();
        setAccessToken(tokenResponse.accessToken);
        config.headers.Authorization = `Bearer ${tokenResponse.accessToken}`;
        return axios(config);
      } catch {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);
