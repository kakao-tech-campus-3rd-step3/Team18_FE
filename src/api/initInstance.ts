import axios from 'axios';
import { getAccessToken, setAccessToken } from '@/pages/admin/Signup/utils/token';
import { reissueAccessToken } from './auth';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

const INVALID_INPUT_VALUE: string = 'INVALID_INPUT_VALUE';
const UNSUPPORTED_JWT: string = 'UNSUPPORTED_JWT';
const UNAUTHENTICATED_USER: string = 'UNAUTHENTICATED_USER';
const INVALID_JWT_SIGNATURE: string = 'INVALID_JWT_SIGNATURE';
const EXPIRED_REFRESH_TOKEN: string = 'EXPIRED_REFRESH_TOKEN';

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
    if (error.response?.status === 401 && config && !config.headers.retry) {
      try {
        const tokenResponse = await reissueAccessToken();
        setAccessToken(tokenResponse.accessToken);
        config.headers.Authorization = `Bearer ${tokenResponse.accessToken}`;
        config.headers.retry = true;
        return apiInstance(config);
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<ErrorResponse>;
          const errorMessage = error.response?.data.message;
          switch (error.response?.data.error_code) {
            case INVALID_INPUT_VALUE:
              throw new Error(`${errorMessage}`);
            case UNAUTHENTICATED_USER:
              throw new Error(`${errorMessage}`);
            case UNSUPPORTED_JWT:
              throw new Error(`${errorMessage}`);
            case INVALID_JWT_SIGNATURE:
              throw new Error(` ${errorMessage}`);
            case EXPIRED_REFRESH_TOKEN:
              throw new Error(`${errorMessage}`);
            default:
              throw new Error(`알 수 없는 오류: ${e.message}`);
          }
        }
        throw e;
      }
    }
    return Promise.reject(error);
  },
);
