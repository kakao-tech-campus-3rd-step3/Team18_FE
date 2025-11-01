import { apiInstance } from './initInstance';

export interface TokenResponse {
  accessToken: string;
}

export const reissueAccessToken = async (): Promise<TokenResponse> => {
  const { data } = await apiInstance.post(`/auth/reissue`, {}, { withCredentials: true });
  return data;
};
