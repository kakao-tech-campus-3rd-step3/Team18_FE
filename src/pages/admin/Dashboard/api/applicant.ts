import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
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

export const updateInterviewTime = async (
  clubId: number,
  applicantId: number,
  interviewAt: string,
): Promise<void> => {
  try {
    await apiInstance.patch(`/clubs/${clubId}/applicants/${applicantId}/interview`, {
      interviewAt,
    });
  } catch (error: unknown) {
    handleAxiosError(error);
  }
};
