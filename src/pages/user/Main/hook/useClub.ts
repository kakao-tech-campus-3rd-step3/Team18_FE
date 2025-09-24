import { type ClubResponse, getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { useQuery } from '@tanstack/react-query';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/pages/user/Main/types/club';

export interface UseClubResult {
  clubs: Club[];
  error?: Error | null;
  isLoading: boolean;
}

export const useClub = (filter: ClubCategoryEng): UseClubResult => {
  const { data, isLoading, error } = useQuery<ClubResponse>({
    queryKey: ['clubData', filter],
    queryFn: () => getClubsByCategory(filter),
  });
  return {
    clubs: data?.clubs || [],
    error: error,
    isLoading: isLoading,
  };
};
