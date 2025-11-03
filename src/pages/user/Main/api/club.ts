import { apiInstance } from '@/api/initInstance';
import type { ClubCategoryEng } from '@/pages/user/Main/constants/clubCategory';
import type { Club } from '@/pages/user/Main/types/club';
import type { AxiosResponse } from 'axios';

export type ClubResponse = {
  clubs: Club[];
};

export async function getClubsByCategory(filter: ClubCategoryEng): Promise<ClubResponse> {
  try {
    const response: AxiosResponse<ClubResponse> = await apiInstance.get(
      `/clubs?category=${filter}`,
    );
    return response.data;
  } catch {
    throw new Error('존재하지 않는 동아리 카테고리입니다.');
  }
}
