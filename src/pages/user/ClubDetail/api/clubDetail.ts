import type { ClubDetail } from '../types/clubDetail';

export const fetchClubDetail = async (clubId: string | number): Promise<ClubDetail> => {
  const res = await fetch(`/api/clubs/${clubId}`);
  if (!res.ok) throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  return res.json();
};
