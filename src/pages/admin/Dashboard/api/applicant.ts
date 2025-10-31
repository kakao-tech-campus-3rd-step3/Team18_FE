import { isAxiosError } from 'axios';
import { apiInstance } from '@/app/api/initInstance';
import type { ApplicantsApiResponse } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (
  clubId: number,
  stage: 'INTERVIEW' | 'FINAL',
): Promise<ApplicantsApiResponse> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard/applicants?stage=${stage}`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw error;
  }
};
