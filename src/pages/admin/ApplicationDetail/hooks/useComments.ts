import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import {
  fetchComments,
  createComment,
  deleteComment,
  updateComment,
} from '@/pages/admin/ApplicationDetail/api/comments';
import { toast } from '@/shared/utils/toast';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

export const useComments = (applicationId: number) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
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
    onError: (error: Error) => {
      toast.error(error.message || '댓글 작성에 실패했습니다.');
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
    onError: (error: Error) => {
      toast.error(error.message || '댓글 삭제에 실패했습니다.');
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
    onError: (error: Error) => {
      toast.error(error.message || '댓글 수정에 실패했습니다.');
    },
  });

  return {
    data,
    createComment: createCommentMutation,
    deleteComment: deleteCommentMutation,
    updateComment: updateCommentMutation,
  };
};
