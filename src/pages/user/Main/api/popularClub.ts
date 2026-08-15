import { publicApiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { PopularClub } from '@/pages/user/Main/types/popularClub';

export type PopularClubsResponse = {
  clubs: PopularClub[];
};

export const getPopularClubs = async (): Promise<PopularClubsResponse> => {
  try {
    const { data } = await publicApiInstance.get('/clubs/popular');
    return data;
  } catch (error: unknown) {
    return handleAxiosError(error, '인기 동아리 조회 실패');
  }
};
