import axios, { AxiosError, type AxiosResponse } from 'axios';
import { apiInstance } from '@/app/api/initInstance';
import type { ErrorResponse } from '../type/error';
import type { SignupFormInputs } from '../type/signup';

export interface RegisterSuccessResponse {
  status: 'REGISTER_SUCCESS';
  accessToken: string;
}

const INVALID_INPUT_VALUE: string = 'INVALID_INPUT_VALUE';
const UNAUTHENTICATED_USER: string = 'UNAUTHENTICATED_USER';
const DUPLICATE_KAKAO_ID: string = 'DUPLICATE_KAKAO_ID';

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
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<ErrorResponse>;
      const detailMsg = error.response?.data.detail;
      switch (error.response?.data.error_code) {
        case INVALID_INPUT_VALUE:
          throw new Error(`입력 오류: ${detailMsg}`);
        case UNAUTHENTICATED_USER:
          throw new Error(`권한 오류: ${detailMsg}`);
        case DUPLICATE_KAKAO_ID:
          throw new Error(`중복 오류: ${detailMsg}`);
        default:
          throw new Error(`알 수 없는 오류: ${e.message}`);
      }
    }
    throw e;
  }
};
