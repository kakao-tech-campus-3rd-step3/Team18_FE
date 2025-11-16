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
  } catch (e) {
    return handleAxiosError(e);
  }
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = toApplyRequest(formData, questionArray);

  const response = await apiInstance.post(`/clubs/${clubId}/apply-submit`, applicationDto);

  return response;
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
    return handleAxiosError(error, '지원서 제출이 실패하였습니다.');
  }
};
