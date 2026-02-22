import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { ApiRole } from '../types/member';

export const updateMemberRole = async (
  clubId: string,
  profileId: number,
  role: ApiRole,
): Promise<void> => {
  try {
    await apiInstance.patch(`/clubs/${clubId}/members/${profileId}/role`, { role });
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 역할 변경에 실패했습니다.');
  }
};
