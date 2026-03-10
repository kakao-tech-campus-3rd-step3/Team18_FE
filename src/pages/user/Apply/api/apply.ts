import { type AxiosResponse } from 'axios';
import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { toApplyRequest } from './mappers/apply';
import type { ApplicationForm, FormInputs } from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/apply`,
    );
    return response.data;
  } catch (e: unknown) {
    return handleAxiosError(e);
  }
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = toApplyRequest(formData, questionArray);

  try {
    return await apiInstance.post(`/clubs/${clubId}/apply-submit`, applicationDto);
  } catch (error: unknown) {
    return handleAxiosError(error, '지원서 제출에 실패했습니다.');
  }
};

export const overwriteApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = toApplyRequest(formData, questionArray);

  try {
    return await apiInstance.post(`/clubs/${clubId}/apply-submit`, applicationDto, {
      params: { overwrite: true },
    });
  } catch (error: unknown) {
    return handleAxiosError(error, '지원서 제출에 실패했습니다.');
  }
};
