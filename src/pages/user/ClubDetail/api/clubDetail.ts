import type { ClubDetail } from '../types/clubDetail';

export const fetchClubDetail = async (clubId: number): Promise<ClubDetail> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  }
  return response.json() as Promise<ClubDetail>;
};
