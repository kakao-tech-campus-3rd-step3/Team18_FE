import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { Member } from '../types/member';

export const fetchMembers = async (clubId: string): Promise<Member[]> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/members`);
    return data;
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 목록을 가져오는데 실패했습니다.');
  }
};
