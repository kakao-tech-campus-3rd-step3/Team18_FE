import { useQuery } from '@tanstack/react-query';
import { fetchMembers } from '../api/fetchMembers';
import type { Member } from '../types/member';
import type { UseApiQueryResult } from '@/shared/types/useApiQueryResult';

export const useMembers = (clubId: string): UseApiQueryResult<Member[]> => {
  const { data, isLoading, error } = useQuery<Member[]>({
    queryKey: ['members', clubId],
    queryFn: () => fetchMembers(clubId),
    enabled: !!clubId,
  });

  return { data: data ?? [], isLoading, error };
};
