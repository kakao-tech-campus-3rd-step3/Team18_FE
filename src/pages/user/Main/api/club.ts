import type { ClubResponse } from '@/types/club.ts';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';

//REST API ->  /api/clubs?category={...}

export async function getClubsByCategory(filter: ClubCategory): Promise<ClubResponse> {
  const response = await fetch(`/api/clubs/search/category?categoryName=${filter}`);
  return await response.json();
}
