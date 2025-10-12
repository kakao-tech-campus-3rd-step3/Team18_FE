import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/pages/user/Main/types/club';

export type ClubResponse = {
  clubs: Club[];
};

export async function getClubsByCategory(filter: ClubCategoryEng): Promise<ClubResponse> {

  const response = await fetch(import.meta.env.VITE_API_BASE_URL + `/clubs?category=${filter}`);
  return await response.json();
}
