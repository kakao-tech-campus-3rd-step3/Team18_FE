import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchClubDetail } from '../api/clubDetail';

export const useClubDetail = (clubId: number) => {
  const { data: club } = useSuspenseQuery({
    queryKey: ['clubDetail', clubId],
    queryFn: () => fetchClubDetail(clubId),
  });

  return club;
};
