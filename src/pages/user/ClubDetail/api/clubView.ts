import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';

export const recordClubView = async (clubId: number): Promise<void> => {
  try {
    await apiInstance.post(`/clubs/${clubId}/views`, null, { withCredentials: true });
  } catch (error: unknown) {
    return handleAxiosError(error, '동아리 조회 기록에 실패했습니다.');
  }
};
