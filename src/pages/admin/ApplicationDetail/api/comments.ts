import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

export const fetchComments = async (applicationId: number): Promise<Comment[]> => {
  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}/comments`,
  );
  return await response.json();
};

export const createComment = async (
  applicationId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, rating }),
    },
  );
  return await response.json();
};

export const deleteComment = async (applicationId: number, commentId: number): Promise<void> => {
  await fetch(
    import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}/comments/${commentId}`,
    {
      method: 'DELETE',
    },
  );
};

export const updateComment = async (
  applicationId: number,
  commentId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}/comments/${commentId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, rating }),
    },
  );
  return await response.json();
};
