import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { AddMemberFormData, MemberApiResponse } from '../types/member';

export const addMember = async (
  clubId: string,
  data: AddMemberFormData,
): Promise<MemberApiResponse> => {
  try {
    const { data: response } = await apiInstance.post<MemberApiResponse>(
      `/clubs/${clubId}/members`,
      data,
    );
    return response;
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 추가에 실패했습니다.');
  }
};
