import { isAxiosError } from 'axios';
import { apiInstance } from '@/app/api/initInstance';
import type { ClubDetailEdit, ClubDetailUpdatePayload } from '../types/clubDetailEdit';

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}`);
    return data;
  } catch (e: unknown) {
    if (isAxiosError(e)) throw new Error('동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
    throw e;
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
    if (isAxiosError(e)) throw new Error('동아리 상세 정보를 수정하는데 실패했습니다.');
    throw e;
  }
};
