import { getClubs } from '@/pages/user/Main/api/club.ts';

import { useQuery } from '@tanstack/react-query';
import type { ClubResponse } from '@/types/club.ts';

export const useClub = () => {
  const { data, error, isLoading } = useQuery<ClubResponse>({
    queryKey: ['clubData'],
    queryFn: getClubs,
  });

  return { data, isLoading, error };
};
