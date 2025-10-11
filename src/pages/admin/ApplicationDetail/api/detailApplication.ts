import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

export const fetchDetailApplication = async (
  clubId: number,
  applicantId: number,
): Promise<DetailApplication> => {
  const url = `/api/clubs/${clubId}/applicants/${applicantId}/application`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('지원서 상세 정보를 가져오지 못했습니다');
  return await response.json();
};

export const updateApplicationStatus = async (
  applicationId: number,
  status: DetailApplication['status'],
): Promise<void> => {
  const url = `/api/applications/${applicationId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) throw new Error('지원서 상태를 업데이트하지 못했습니다');
  return await response.json();
};
