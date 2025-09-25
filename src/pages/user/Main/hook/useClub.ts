import { type ClubResponse, getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { useQuery } from '@tanstack/react-query';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/pages/user/Main/types/club';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export const useClub = (filter: ClubCategory): UseApiQueryResult<Club[]> => {
  const { data, isLoading, error } = useQuery<ClubResponse>({
    queryKey: ['clubData', filter],
    queryFn: () => getClubsByCategory(filter),
  });
  return {
    data: data?.clubs || [],
    isLoading,
    error,
  };
};
