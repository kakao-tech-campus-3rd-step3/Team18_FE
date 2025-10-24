import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (clubId: number): Promise<ApplicantData[]> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard/applicants`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw error;
  }
};
