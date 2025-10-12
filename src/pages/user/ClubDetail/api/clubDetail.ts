import type { ClubDetail } from '../types/clubDetail';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchClubDetail = async (clubId: number): Promise<ClubDetail> => {
  const res = await fetch(`${BASE_URL}/clubs/${clubId}`);
  if (!res.ok) throw new Error('동아리 상세 정보를 가져오는데 실패했습니다.');
  return res.json() as Promise<ClubDetail>;
};
