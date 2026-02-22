import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';

export const deleteMember = async (clubId: string, profileId: number): Promise<void> => {
  try {
    await apiInstance.delete(`/clubs/${clubId}/members/${profileId}`);
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 삭제에 실패했습니다.');
  }
};
