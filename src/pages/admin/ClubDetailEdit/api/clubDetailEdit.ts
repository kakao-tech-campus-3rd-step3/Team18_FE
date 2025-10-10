import type { ClubDetailEdit } from '../types/clubDetailEdit';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  const res = await fetch(`${API_BASE_URL}/clubs/${clubId}`);
  if (!res.ok) throw new Error('동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
  return res.json() as Promise<ClubDetailEdit>;
};

export const updateClubDetailEdit = async (
  clubId: string | number,
  data: ClubDetailEdit,
): Promise<ClubDetailEdit> => {
  const res = await fetch(`${API_BASE_URL}/clubs/${clubId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('동아리 상세 수정 데이터를 저장하는데 실패했습니다.');
  return res.json() as Promise<ClubDetailEdit>;
};
