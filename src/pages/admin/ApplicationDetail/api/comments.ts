import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

export const fetchComments = async (applicationId: number): Promise<Comment[]> => {
  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/applications/${applicationId}/comments`,
  );
  return await response.json();
};
