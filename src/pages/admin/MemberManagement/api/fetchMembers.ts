import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { API_ROLE_TO_UI } from '../types/member';
import type { Member, MemberApiResponse } from '../types/member';

export const fetchMembers = async (clubId: string): Promise<Member[]> => {
  try {
    const { data } = await apiInstance.get<MemberApiResponse[]>(`/clubs/${clubId}/members`);

    return data.map((item) => ({
      id: item.clubMemberProfileId,
      name: item.name,
      studentId: item.studentId,
      department: item.department,
      phoneNumber: item.phoneNumber,
      role: API_ROLE_TO_UI[item.role],
      joinDate: item.joinDate,
    }));
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 목록을 가져오는데 실패했습니다.');
  }
};
