import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { MemberApiResponse, UpdateMemberData } from '../types/member';

export const updateMember = async (
  clubId: string,
  profileId: number,
  data: UpdateMemberData,
): Promise<MemberApiResponse> => {
  try {
    const { data: response } = await apiInstance.patch<MemberApiResponse>(
      `/clubs/${clubId}/members/${profileId}`,
      data,
    );
    return response;
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 정보 수정에 실패했습니다.');
  }
};
