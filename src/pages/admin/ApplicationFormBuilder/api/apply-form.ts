import { type AxiosResponse } from 'axios';
import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { ApplicationForm } from '../types/fieldType';

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/dashboard/apply-form`,
    );
    return response.data;
  } catch (e: unknown) {
    return handleAxiosError(e);
  }
};

export const postApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: ApplicationForm;
}): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.post(
      `/clubs/${clubId}/dashboard/apply-form`,
      form,
    );
    return response.data;
  } catch (e: unknown) {
    return handleAxiosError(e);
  }
};

export const patchApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: Partial<ApplicationForm>;
}): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.patch(
      `/clubs/${clubId}/dashboard/apply-form`,
      form,
    );
    return response.data;
  } catch (e: unknown) {
    return handleAxiosError(e, '지원서 저장에 실패했습니다.', { useDetail: true });
  }
};
