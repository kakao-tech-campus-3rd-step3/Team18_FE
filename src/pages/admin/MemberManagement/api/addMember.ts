import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { AddMemberFormData } from '../types/member';

export const addMember = async (clubId: string, data: AddMemberFormData): Promise<void> => {
  try {
    await apiInstance.post(`/clubs/${clubId}/members`, data);
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 추가에 실패했습니다.');
  }
};
