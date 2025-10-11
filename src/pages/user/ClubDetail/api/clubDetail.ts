import type { ClubDetail } from '../types/clubDetail';

export const fetchClubDetail = async (clubId: string | number): Promise<ClubDetail> => {
  const url = `/api/clubs/${clubId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  }
  return response.json() as Promise<ClubDetail>;
};
