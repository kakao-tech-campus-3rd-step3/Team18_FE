import type { ApplicantData } from '@/types/dashboard';

export const fetchApplicants = async (clubId: number): Promise<ApplicantData[]> => {
  const response = await fetch(`/api/clubs/${clubId}/applicants`);
  return await response.json();
};
