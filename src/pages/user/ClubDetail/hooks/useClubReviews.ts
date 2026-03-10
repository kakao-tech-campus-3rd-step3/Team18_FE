import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { fetchClubReviews, postClubReview } from '../api/clubReviews';

export const useClubReviews = (clubId: number) => {
  const queryClient = useQueryClient();

  const { data: reviews } = useSuspenseQuery({
    queryKey: ['clubReviews', clubId],
    queryFn: () => fetchClubReviews(clubId),
  });

  const { mutateAsync, error: mutationError } = useMutation({
    mutationFn: (body: { studentId: string; content: string }) => postClubReview(clubId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubReviews', clubId] });
    },
  });

  const addReview = async (studentId: string, content: string): Promise<boolean> => {
    try {
      await mutateAsync({ studentId, content });
      return true;
    } catch {
      return false;
    }
  };

  return {
    reviews,
    addReview,
    apiError: mutationError?.message ?? null,
  };
};
