import type { DetailApplication } from '@/types/detailApplication';

export const fetchDetailApplication = async (
  clubId: number,
  applicantId: number,
): Promise<DetailApplication> => {
  const response = await fetch(`/api/clubs/${clubId}/applicants/${applicantId}/application`);
  return await response.json();
};
