import { apiInstance } from '@/api/initInstance';
import type { AxiosResponse } from 'axios';

interface LoginSuccessResponse {
  status: 'LOGIN_SUCCESS';
  accessToken: string;
}

interface RegistrationRequiredResponse {
  status: 'REGISTRATION_REQUIRED';
  temporaryToken: string;
}

export type LoginResponse = LoginSuccessResponse | RegistrationRequiredResponse;

export const postAuthCode = async (code: string, signal: AbortSignal): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await apiInstance.post(
    '/auth/kakao/login',
    {
      authorizationCode: code,
    },
    { signal },
  );

  return response.data;
};

export const logoutUser = async () => {
  const response = await apiInstance.post('/auth/logout', {});
  return response;
};
