import { type ClubResponse, getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { useQuery } from '@tanstack/react-query';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';
import type { Club } from '@/types/club.ts';

export interface UseClubResult {
  clubs?: Club[];
  error?: Error | null;
  isLoading: boolean;
}

export const useClub = (filter: ClubCategory): UseClubResult => {
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
