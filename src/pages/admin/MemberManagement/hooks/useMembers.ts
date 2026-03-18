import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMembers } from '../api/fetchMembers';
import type { Member } from '../types/member';

export const useMembers = (clubId: string) => {
  const { data } = useSuspenseQuery<Member[]>({
    queryKey: ['members', clubId],
    queryFn: () => fetchMembers(clubId),
  });

  return data;
};
