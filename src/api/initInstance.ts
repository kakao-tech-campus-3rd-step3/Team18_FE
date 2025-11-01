import axios from 'axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '@/pages/admin/Signup/utils/token';
import { reissueAccessToken } from './auth';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

const INVALID_INPUT_VALUE: string = 'INVALID_INPUT_VALUE';
const UNSUPPORTED_JWT: string = 'UNSUPPORTED_JWT';
const UNAUTHENTICATED_USER: string = 'UNAUTHENTICATED_USER';
const INVALID_JWT_SIGNATURE: string = 'INVALID_JWT_SIGNATURE';
const EXPIRED_REFRESH_TOKEN: string = 'EXPIRED_REFRESH_TOKEN';

const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

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

const handleLogout = (errorMessage: string) => {
  removeAccessToken();
  window.location.href = LOGOUT_REDIRECT_URI;
  throw new Error(errorMessage);
};

apiInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  async function onRejected(e: AxiosError) {
    if (!axios.isAxiosError(e)) throw e;
    const error = e as AxiosError<ErrorResponse>;
    const config = error.config;

    if (error.response?.status === 401 && config) {
      if (config?.headers?.retry) {
        handleLogout(error.response.data.message ?? error.message);
      }
      try {
        const tokenResponse = await reissueAccessToken();
        setAccessToken(tokenResponse.accessToken);
        config.headers.Authorization = `Bearer ${tokenResponse.accessToken}`;
        config.headers.retry = true;
        return apiInstance(config);
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          const reissueError = e as AxiosError<ErrorResponse>;
          const errorMessage = reissueError.response?.data.message;
          switch (error.response?.data.error_code) {
            case INVALID_INPUT_VALUE:
              throw new Error(errorMessage ?? '입력값이 올바르지 않습니다.');
            case UNAUTHENTICATED_USER:
            case UNSUPPORTED_JWT:
            case INVALID_JWT_SIGNATURE:
            case EXPIRED_REFRESH_TOKEN:
              handleLogout(errorMessage ?? '토큰 갱신 실패로 로그아웃 처리됩니다.');
              break;
            default:
              throw new Error(errorMessage ?? `알 수 없는 오류`);
          }
        }
        throw e;
      }
    }
    throw error;
  },
);
