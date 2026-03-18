import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNoticeDetail } from '../api/notices';

export const useNoticeDetail = (noticeId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['noticeDetail', noticeId],
    queryFn: () => fetchNoticeDetail(noticeId),
  });

  return data;
};
