import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';

export const sendClubHeartbeat = async (clubId: number): Promise<void> => {
  try {
    await apiInstance.post(`/clubs/${clubId}/heartbeat`, null, { withCredentials: true });
  } catch (error: unknown) {
    return handleAxiosError(error, '동아리 조회 상태 갱신에 실패했습니다.');
  }
};
