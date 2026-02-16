import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { UpdateMemberData } from '../types/member';

export const updateMember = async (
  clubId: string,
  profileId: number,
  data: UpdateMemberData,
): Promise<void> => {
  try {
    await apiInstance.patch(`/clubs/${clubId}/members/${profileId}`, data);
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 정보 수정에 실패했습니다.');
  }
};
