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
