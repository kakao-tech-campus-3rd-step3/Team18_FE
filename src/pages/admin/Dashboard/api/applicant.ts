import type {
  ApplicantData,
  ApplicationFilterOption,
} from '@/pages/admin/Dashboard/types/dashboard';

export const fetchApplicants = async (
  clubId: number,
  status?: ApplicationFilterOption,
): Promise<ApplicantData[]> => {
  const url = new URL(
    import.meta.env.VITE_API_BASE_URL + `/clubs/${clubId}/dashboard`,
    window.location.origin,
  );
  if (status && status !== 'ALL') {
    url.searchParams.set('status', status);
  }

  const response = await fetch(url.toString());
  return await response.json();
};
