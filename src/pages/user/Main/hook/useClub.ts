import { type ClubResponse, getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { useQuery } from '@tanstack/react-query';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';

export const useClub = (filter: ClubCategory) => {
  const result = useQuery<ClubResponse>({
    queryKey: ['clubData', filter],
    queryFn: () => getClubsByCategory(filter),
  });
  return {
    clubs: result.data?.clubs,
    error: result.error,
    isLoading: result.isLoading,
  };
};
