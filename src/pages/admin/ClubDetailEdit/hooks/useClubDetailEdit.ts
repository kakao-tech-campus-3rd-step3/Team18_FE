import { useQuery } from '@tanstack/react-query';
import { fetchClubDetailEdit } from '@/pages/admin/ClubDetailEdit/api/clubDetailEdit';
import type { ClubDetailEdit } from '../types/clubDetailEdit';

export const useClubDetailEdit = (clubId: string | number) => {
  return useQuery<ClubDetailEdit>({
    queryKey: ['clubDetailEdit', clubId],
    queryFn: () => fetchClubDetailEdit(clubId),
    enabled: !!clubId,
  });
};
