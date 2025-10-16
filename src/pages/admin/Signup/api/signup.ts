import axios, { AxiosError, type AxiosResponse } from 'axios';
import { apiInstance } from '../../Login/api/initInstance';
import type { SignupFormInputs } from '../type/signup';
import type { ErrorResponse } from '../type/error';

export interface RegisterSuccessResponse {
  status: 'REGISTER_SUCCESS';
  accessToken: string;
  refreshToken: string;
}

export const postSignupForm = async (formData: SignupFormInputs, tempToken: string) => {
  try {
    const response: AxiosResponse<RegisterSuccessResponse> = await apiInstance.post(
      '/auth/register',
      formData,
      {
        headers: { Authorization: `Bearer ${tempToken}` },
      },
    );
    sessionStorage.setItem('accessToken', response.data.accessToken);
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<ErrorResponse>;
      const status = error.response?.status;
      const detailMsg = error.response?.data.detail;
      switch (status) {
        case 400:
          throw new Error(`입력 오류: ${detailMsg}`);
        case 401:
          throw new Error(`권한 오류: ${detailMsg}`);
        case 409:
          throw new Error(`중복 오류: ${detailMsg}`);
        default:
          throw new Error(`알 수 없는 오류: ${e.message}`);
      }
    }
  }
};
