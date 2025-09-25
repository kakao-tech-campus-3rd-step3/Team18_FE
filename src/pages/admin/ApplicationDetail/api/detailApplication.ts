import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

export const fetchDetailApplication = async (
  clubId: number,
  applicantId: number,
): Promise<DetailApplication> => {
  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/clubs/${clubId}/applicants/${applicantId}/application`,
  );
  return await response.json();
};

export const updateApplicationStatus = async (
  applicationId: number,
  status: DetailApplication['status'],
): Promise<void> => {
  await fetch(import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
};
