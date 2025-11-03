import { apiInstance } from '@/api/initInstance';
import type { Role } from '@/types/navigation';
import type { AxiosResponse } from 'axios';

interface LoginSuccessResponse {
  status: 'LOGIN_SUCCESS';
  accessToken: string;
  clubListInfo: ClubMemberInfo[];
}

interface RegistrationRequiredResponse {
  status: 'REGISTRATION_REQUIRED';
  temporaryToken: string;
  clubListInfo: ClubMemberInfo[];
}

interface ClubMemberInfo {
  clubId?: number;
  clubName?: string;
  role?: Role;
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
