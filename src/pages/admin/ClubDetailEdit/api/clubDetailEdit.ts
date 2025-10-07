import type { ClubDetailEdit } from '../types/clubDetailEdit';

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  const res = await fetch(`/api/clubs/${clubId}`);
  if (!res.ok) throw new Error('동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
  return res.json();
};
