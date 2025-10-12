import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

export const fetchComments = async (applicationId: number): Promise<Comment[]> => {
  const url = `/api/applications/${applicationId}/comments`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('Failed to fetch comments');
  return await response.json();
};

export const createComment = async (
  applicationId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  const url = `/api/applications/${applicationId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, rating }),
  });

  if (!response.ok) throw new Error('Failed to create comment');
  return await response.json();
};

export const deleteComment = async (applicationId: number, commentId: number): Promise<void> => {
  const url = `/api/applications/${applicationId}/comments/${commentId}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Failed to delete comment');
};

export const updateComment = async (
  applicationId: number,
  commentId: number,
  content: string,
  rating: number,
): Promise<Comment> => {
  const url = `/api/applications/${applicationId}/comments/${commentId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, rating }),
  });

  if (!response.ok) throw new Error('Failed to update comment');
  return await response.json();
};
