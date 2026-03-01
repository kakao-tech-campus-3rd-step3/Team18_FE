import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
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
  } catch (error: unknown) {
    return handleAxiosError(error);
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
  } catch (error: unknown) {
    return handleAxiosError(error);
  }
};
