import type { ClubDetailEdit } from '../types/clubDetailEdit';

export const fetchClubDetailEdit = async (clubId: string | number): Promise<ClubDetailEdit> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('동아리 상세 수정 데이터를 가져오는데 실패했습니다.');
  }
  return response.json() as Promise<ClubDetailEdit>;
};

export const updateClubDetailEdit = async (
  clubId: string | number,
  updatedData: Partial<ClubDetailEdit>,
): Promise<ClubDetailEdit> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('동아리 상세 정보를 수정하는데 실패했습니다.');
  }

  return response.json() as Promise<ClubDetailEdit>;
};
