import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/types/club.ts';

export type ClubResponse = {
  clubs: Club[];
};

export async function getClubsByCategory(filter: ClubCategory): Promise<ClubResponse> {
  const response = await fetch(`/api/clubs/search/category?categoryName=${filter}`);
  return await response.json();
}
