import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { ClubDetailEdit, ClubDetailUpdatePayload } from '../types/clubDetailEdit';

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}`);
    return data;
  } catch (e: unknown) {
    return handleAxiosError(e, '동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
  }
};

export const updateClubDetailEdit = async (
  clubId: string | number,
  updatedData: ClubDetailUpdatePayload,
): Promise<ClubDetailEdit> => {
  try {
    const { data } = await apiInstance.post(`/clubs/${clubId}`, updatedData);
    return data;
  } catch (e: unknown) {
    return handleAxiosError(e);
  }
};
