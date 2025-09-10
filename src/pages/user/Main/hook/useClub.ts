import { getClubsByCategory } from '@/pages/user/Main/api/club.ts';
import { useQuery } from '@tanstack/react-query';
import type { ClubResponse } from '@/types/club.ts';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';

export const useClub = (filter: ClubCategory) => {
  const { data, error, isLoading } = useQuery<ClubResponse>({
    queryKey: ['clubData', filter],
    queryFn: () => getClubsByCategory(filter),
  });

  return { data, isLoading, error };
};
