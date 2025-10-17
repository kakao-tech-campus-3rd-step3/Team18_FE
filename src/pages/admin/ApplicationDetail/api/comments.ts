import { apiInstance } from '@/api/initInstance';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

export const fetchComments = async (applicationId: number): Promise<Comment[]> => {
  const { data } = await apiInstance.get(`/applications/${applicationId}/comments`);
  return data;
};

export const createComment = async (
  applicationId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  try {
    const { data } = await apiInstance.post(`/applications/${applicationId}/comments`, {
      content,
      rating,
    });
    return data;
  } catch {
    throw new Error('Failed to fetch comments');
  }
};

export const deleteComment = async (applicationId: number, commentId: number): Promise<void> => {
  await apiInstance.delete(`/applications/${applicationId}/comments/${commentId}`);
};

export const updateComment = async (
  applicationId: number,
  commentId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  try {
    const { data } = await apiInstance.patch(
      `/applications/${applicationId}/comments/${commentId}`,
      {
        content,
        rating,
      },
    );
    return data;
  } catch {
    throw new Error('Failed to create comment');
  }
};
