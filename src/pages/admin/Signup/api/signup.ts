import { apiInstance } from '@/api/initInstance';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { SignupFormInputs } from '../type/signup';
import type { AxiosResponse } from 'axios';

export interface RegisterSuccessResponse {
  status: 'REGISTER_SUCCESS';
  accessToken: string;
}

export const postSignupForm = async (
  formData: SignupFormInputs,
  tempToken: string,
): Promise<RegisterSuccessResponse> => {
  try {
    const response: AxiosResponse<RegisterSuccessResponse> = await apiInstance.post(
      '/auth/register',
      formData,
      {
        headers: { Authorization: `Bearer ${tempToken}` },
      },
    );
    return response.data;
  } catch (e: unknown) {
    handleAxiosError(e);
    throw e;
  }
};
