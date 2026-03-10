import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchClubDetail } from '../api/clubDetail';

export const useClubDetail = (clubId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['clubDetail', clubId],
    queryFn: () => fetchClubDetail(clubId),
  });

  return data;
};
