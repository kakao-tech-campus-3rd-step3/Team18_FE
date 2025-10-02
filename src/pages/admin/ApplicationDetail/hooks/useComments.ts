import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '@/pages/admin/ApplicationDetail/api/comments';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export const useComments = (applicationId: number): UseApiQueryResult<Comment[]> => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comments', applicationId],
    queryFn: () => fetchComments(applicationId),
  });

  return {
    data: data || [],
    isLoading,
    error,
  };
};
