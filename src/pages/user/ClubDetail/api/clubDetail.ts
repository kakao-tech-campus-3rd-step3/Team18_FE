import { apiInstance } from '@/api/initInstance';
import type { ClubDetail } from '../types/clubDetail';
import type { AxiosResponse } from 'axios';

export const fetchClubDetail = async (clubId: number): Promise<ClubDetail> => {
  try {
    const response: AxiosResponse<ClubDetail> = await apiInstance.get(`/clubs/${clubId}`);
    return response.data;
  } catch {
    throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  }
};
