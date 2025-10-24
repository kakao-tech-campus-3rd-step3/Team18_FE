import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (clubId: number): Promise<ApplicantData[]> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}/dashboard/applicants`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  return await response.json();
};
