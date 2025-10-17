import { apiInstance } from './initInstance';
import type { AxiosResponse } from 'axios';

interface LoginSuccessResponse {
  status: 'LOGIN_SUCCESS';
  accessToken: string;
  refreshToken: string;
}

interface RegistrationRequiredResponse {
  status: 'REGISTRATION_REQUIRED';
  temporaryToken: string;
}

type LoginResponse = LoginSuccessResponse | RegistrationRequiredResponse;

export const postAuthCode = async (code: string): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await apiInstance.post('/auth/kakao/login', {
    authorizationCode: code,
  });
  return response.data;
};
