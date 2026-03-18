import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchClubDetailEdit } from '@/pages/admin/ClubDetailEdit/api/clubDetailEdit';

export const useClubDetailEdit = (clubId: string | number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['clubDetailEdit', clubId],
    queryFn: () => fetchClubDetailEdit(clubId),
  });

  return data;
};
