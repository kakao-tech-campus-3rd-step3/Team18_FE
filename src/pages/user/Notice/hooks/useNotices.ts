import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNotices } from '../api/notices';

export const useNotices = (page: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['notices', page],
    queryFn: () => fetchNotices(page),
  });

  return data;
};
