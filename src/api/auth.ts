import { apiInstance } from './initInstance';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError } from 'axios';

export interface TokenResponse {
  accessToken: string;
}

const EXPIRED_REFRESH_TOKEN: string = 'EXPIRED_REFRESH_TOKEN';

export const reissueAccessToken = async (): Promise<TokenResponse> => {
  try {
    const { data } = await apiInstance.post(`/auth/reissue`, {}, { withCredentials: true });
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError<ErrorResponse>;
    if (error.response?.data.error_code === EXPIRED_REFRESH_TOKEN) {
      throw new Error('Refresh token 만료');
    }
    throw new Error(error.message);
  }
};
