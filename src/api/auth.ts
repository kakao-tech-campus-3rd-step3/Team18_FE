import { apiInstance } from './initInstance';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError } from 'axios';

export interface TokenResponse {
  accessToken: string;
}

export const reissueAccessToken = async (): Promise<TokenResponse> => {
  try {
    const { data } = await apiInstance.post(`/api/auth/reissue`, {}, { withCredentials: true });
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError<ErrorResponse>;
    if (error.response?.data.status === 401) {
      throw new Error('Refresh token 만료');
    }
    throw new Error(error.message);
  }
};
