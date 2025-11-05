import { useQuery } from '@tanstack/react-query';
import { type ClubResponse, getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { searchClubs } from '../utils/searchClubs';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club, RecruitStatus } from '@/pages/user/Main/types/club';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export const useClubFiltering = (
  filter: ClubCategoryEng,
  searchText: string,
  recruitStatus: RecruitStatus | undefined,
): UseApiQueryResult<Club[]> => {
  const { data, isLoading, error } = useQuery<ClubResponse>({
    queryKey: ['clubData', filter],
    queryFn: () => getClubsByCategory(filter),
  });

  let filteredClubs = data?.clubs || [];
  filteredClubs = searchClubs(filteredClubs, searchText.replace(/\s+/g, ''));

  if (recruitStatus !== undefined) {
    filteredClubs = filteredClubs.filter((club) => club.recruitStatus === recruitStatus);
  }

  return {
    data: filteredClubs,
    isLoading,
    error,
  };
};
