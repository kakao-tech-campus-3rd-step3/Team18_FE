import { apiInstance } from '@/api/initInstance';
import type { ClubDetailEdit } from '../types/clubDetailEdit';

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}`);
    return data;
  } catch {
    throw new Error('동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
  }
};

export const updateClubDetailEdit = async (
  clubId: string | number,
  updatedData: Partial<ClubDetailEdit>,
): Promise<ClubDetailEdit> => {
  try {
    const { data } = await apiInstance.post(`/clubs/${clubId}`, updatedData);
    return data;
  } catch {
    throw new Error('동아리 상세 정보를 수정하는데 실패했습니다.');
  }
};
