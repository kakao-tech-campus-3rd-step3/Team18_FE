import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
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
  } catch (error: unknown) {
    return handleAxiosError(error);
  }
};

export const deleteComment = async (applicationId: number, commentId: number): Promise<void> => {
  try {
    await apiInstance.delete(`/applications/${applicationId}/comments/${commentId}`);
  } catch (error: unknown) {
    return handleAxiosError(error);
  }
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
  } catch (error: unknown) {
    return handleAxiosError(error);
  }
};
