import type { ApplicantData } from '@/types/dashboard';

export const fetchApplicants = async (
  clubId: number,
  status?: string,
): Promise<ApplicantData[]> => {
  const url = new URL(`/api/clubs/${clubId}/applicants`, window.location.origin);
  if (status && status !== 'ALL') {
    url.searchParams.set('status', status);
  }

  const response = await fetch(url.toString());
  return await response.json();
};
