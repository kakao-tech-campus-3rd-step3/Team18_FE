import axios from 'axios';
import { getAccessToken, removeAccessToken, setAccessToken } from '@/shared/auth/token';
import { AUTH_ERRORS } from '@/shared/constants/auth';
import { reissueAccessToken } from './auth';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

const LOGOUT_REDIRECT_URI_REISSUE = import.meta.env.VITE_LOGOUT_REDIRECT_URI_REISSUE;

const initInstance = (config: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
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
  window.location.href = LOGOUT_REDIRECT_URI_REISSUE;
  throw new Error(errorMessage);
};

apiInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },

  async (error: AxiosError<ErrorResponse>) => {
    if (!axios.isAxiosError(error)) throw error;

    const config = error.config;

    const errorCode = error.response?.data.error_code;
    const errorMessage = error.response?.data.message;

    if (errorCode === 'EXPIRED_ACCESS_TOKEN' && config) {
      if (config?.headers?.retry) {
        handleLogout(errorMessage ?? error.message);
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
          const reissueMessage = reissueError.response?.data.message;
          switch (reissueError.response?.data.error_code) {
            case AUTH_ERRORS.LOGGED_OUT_USER:
            case AUTH_ERRORS.REQUIRED_COOKIE_NOT_FOUND:
            case AUTH_ERRORS.UNSUPPORTED_JWT:
            case AUTH_ERRORS.INVALID_JWT_SIGNATURE:
            case AUTH_ERRORS.EXPIRED_REFRESH_TOKEN:
            case AUTH_ERRORS.INVALID_REFRESH_TOKEN:
              handleLogout(reissueMessage ?? '토큰 갱신 실패로 로그아웃 처리됩니다.');
              break;
            default:
              throw new Error(reissueMessage ?? `알 수 없는 오류`);
          }
        } else {
          throw e;
        }
      }
    }

    throw error;
  },
);
