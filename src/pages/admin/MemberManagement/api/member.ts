// TODO: API연동할 때 이름 세분화(변경)하고 파일 분리

import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { Member, MemberRole, AddMemberFormData } from '../types/member';

export const fetchMembers = async (clubId: string): Promise<Member[]> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/members`);
    return data;
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 목록을 가져오는데 실패했습니다.');
  }
};

export const updateMemberRole = async (
  clubId: string,
  memberId: number,
  role: MemberRole,
): Promise<void> => {
  try {
    await apiInstance.patch(`/clubs/${clubId}/members/${memberId}/role`, { role });
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 역할 변경에 실패했습니다.');
  }
};

export const deleteMember = async (clubId: string, memberId: number): Promise<void> => {
  try {
    await apiInstance.delete(`/clubs/${clubId}/members/${memberId}`);
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 삭제에 실패했습니다.');
  }
};

export const addMember = async (clubId: string, data: AddMemberFormData): Promise<void> => {
  try {
    await apiInstance.post(`/clubs/${clubId}/members`, data);
  } catch (e: unknown) {
    return handleAxiosError(e, '회원 추가에 실패했습니다.');
  }
};

export const bulkUploadMembers = async (clubId: string, file: File): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    await apiInstance.post(`/clubs/${clubId}/members/bulk`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (e: unknown) {
    return handleAxiosError(e, '일괄 등록에 실패했습니다.');
  }
};
