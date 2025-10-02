import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchComments, createComment } from '@/pages/admin/ApplicationDetail/api/comments';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

type UseCommentsResult = UseApiQueryResult<Comment[]> & {
  createComment: (comment: { content: string; rating: number }) => void;
};

export const useComments = (applicationId: number): UseCommentsResult => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['comments', applicationId],
    queryFn: () => fetchComments(applicationId),
  });

  const { mutate: createCommentMutation } = useMutation({
    mutationFn: ({ content, rating }: { content: string; rating: number }) =>
      createComment(applicationId, content, rating),
    onSuccess: (newComment) => {
      queryClient.setQueryData(['comments', applicationId], (oldData: Comment[] | undefined) => {
        if (oldData) {
          return [...oldData, newComment];
        }
        return [newComment];
      });
    },
  });

  return {
    data: data || [],
    isLoading,
    error,
    createComment: createCommentMutation,
  };
};
