import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/pages/user/Main/types/club';

export type ClubResponse = {
  clubs: Club[];
};

export async function getClubsByCategory(filter: ClubCategoryEng): Promise<ClubResponse> {
  const url = `/api/clubs?category=${filter}`;
  const response = await fetch(url);

  return await response.json();
}
