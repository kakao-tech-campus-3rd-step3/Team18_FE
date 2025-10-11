import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (clubId: number): Promise<ApplicantData[]> => {
  const url = `/api/clubs/${clubId}/dashboard`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  return await response.json();
};
