import { apiInstance } from '@/api/initInstance';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

export const fetchDetailApplication = async (
  clubId: number,
  applicantId: number,
): Promise<DetailApplication> => {
  try {
    const { data } = await apiInstance.get(
      `/clubs/${clubId}/applicants/${applicantId}/application`,
    );
    return data;
  } catch {
    throw new Error('지원서 상세 정보를 가져오지 못했습니다');
  }
};

export const updateApplicationStatus = async (
  applicationId: number,
  clubId: number,
  status: DetailApplication['status'],
): Promise<unknown> => {
  try {
    const { data } = await apiInstance.patch(
      `/clubs/${clubId}/applications/${applicationId}/status`,
      { status },
    );
    return data;
  } catch {
    throw new Error('지원서 상태를 업데이트하지 못했습니다');
  }
};
