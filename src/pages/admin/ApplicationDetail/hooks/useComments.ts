import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchComments,
  createComment,
  deleteComment,
  updateComment,
} from '@/pages/admin/ApplicationDetail/api/comments';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

type CreateCommentPayload = Pick<Comment, 'content' | 'rating'>;
type UpdateCommentPayload = Pick<Comment, 'commentId' | 'content' | 'rating'>;

type UseCommentsResult = UseApiQueryResult<Comment[]> & {
  createComment: (comment: CreateCommentPayload) => void;
  deleteComment: (commentId: number) => void;
  updateComment: (comment: UpdateCommentPayload) => void;
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

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: (commentId: number) => deleteComment(applicationId, commentId),
    onSuccess: (_, commentId) => {
      queryClient.setQueryData(['comments', applicationId], (oldData: Comment[] | undefined) => {
        if (oldData) {
          return oldData.filter((comment) => comment.commentId !== commentId);
        }
        return [];
      });
    },
  });

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: ({
      commentId,
      content,
      rating,
    }: {
      commentId: number;
      content: string;
      rating: number;
    }) => updateComment(applicationId, commentId, content, rating),
    onSuccess: (updatedComment) => {
      queryClient.setQueryData(['comments', applicationId], (oldData: Comment[] | undefined) => {
        if (oldData) {
          return oldData.map((comment) =>
            comment.commentId === updatedComment.commentId ? updatedComment : comment,
          );
        }
        return [];
      });
    },
  });

  return {
    data: data || [],
    isLoading,
    error,
    createComment: createCommentMutation,
    deleteComment: deleteCommentMutation,
    updateComment: updateCommentMutation,
  };
};
