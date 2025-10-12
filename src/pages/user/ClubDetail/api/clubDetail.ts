import type { ClubDetail } from '../types/clubDetail';

export const fetchClubDetail = async (clubId: number): Promise<ClubDetail> => {
  const url = `/api/clubs/${clubId}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  }

  return res.json() as Promise<ClubDetail>;
};
