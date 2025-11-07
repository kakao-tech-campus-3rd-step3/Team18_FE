import { apiInstance } from '@/api/initInstance';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { ApplicantsApiResponse } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (
  clubId: number,
  stage: 'INTERVIEW' | 'FINAL',
): Promise<ApplicantsApiResponse> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard/applicants?stage=${stage}`);
    return data;
  } catch (error: unknown) {
    handleAxiosError(error);
    throw error;
  }
};
