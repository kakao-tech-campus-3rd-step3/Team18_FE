import { apiInstance } from '@/app/api/initInstance';
import type { Role } from '@/shared/types/navigation';
import type { AxiosResponse } from 'axios';

interface LoginSuccessResponse {
  status: 'LOGIN_SUCCESS';
  accessToken: string;
  clubIdAndRoleList: ClubMemberInfo[];
}

interface RegistrationRequiredResponse {
  status: 'REGISTRATION_REQUIRED';
  temporaryToken: string;
  clubIdAndRoleList: ClubMemberInfo[];
}

interface ClubMemberInfo {
  clubId: number;
  role: Role;
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
