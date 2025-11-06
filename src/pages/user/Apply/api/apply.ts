import axios, { AxiosError, isAxiosError, type AxiosResponse } from 'axios';
import { apiInstance } from '@/api/initInstance';
import { toApplyRequest } from './mappers/apply';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { ApplicationForm, FormInputs } from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/apply`,
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data);
    }
    throw e;
  }
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = toApplyRequest(formData, questionArray);

  try {
    const response = await apiInstance.post(`/clubs/${clubId}/apply-submit`, applicationDto);

    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError<ErrorResponse>;
    throw new Error(error.response?.data.message || '지원서 제출이 실패하였습니다.');
  }
};

export const overwriteApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = toApplyRequest(formData, questionArray);

  try {
    const overwriteResponse = await apiInstance.post(`/clubs/${clubId}/apply-submit`, {
      ...applicationDto,
      overwrite: true,
    });
    return overwriteResponse.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || '지원서 제출이 실패하였습니다.');
    }
    throw error;
  }
};
