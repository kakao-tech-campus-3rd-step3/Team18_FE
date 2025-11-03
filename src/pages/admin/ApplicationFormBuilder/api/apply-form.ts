import axios, { type AxiosResponse } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { ApplicationForm } from '../types/fieldType';

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/dashboard/apply-form`,
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data);
    }
    throw e;
  }
};

export const postApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: ApplicationForm;
}): Promise<ApplicationForm> => {
  const response: AxiosResponse<ApplicationForm> = await apiInstance.post(
    `/clubs/${clubId}/dashboard/apply-form`,
    form,
  );
  return response.data;
};

export const patchApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: Partial<ApplicationForm>;
}): Promise<ApplicationForm> => {
  const response: AxiosResponse<ApplicationForm> = await apiInstance.patch(
    `/clubs/${clubId}/dashboard/apply-form`,
    form,
  );
  return response.data;
};
