import { useEffect, useState, useCallback } from 'react';
import { fetchClubReviews, postClubReview } from '../api/clubReviews';
import type { ClubReview } from '@/pages/user/ClubDetail/types/review';

export const useClubReviews = (clubId: number) => {
  const [reviews, setReviews] = useState<ClubReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadReviews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchClubReviews(clubId);
      setReviews(data);
    } catch {
      setError('후기를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  }, [clubId]);

  const addReview = useCallback(
    async (studentId: string, content: string) => {
      if (!studentId.trim() || !content.trim()) {
        setError('학번과 내용을 입력해 주세요.');
        return false;
      }

      try {
        setError(null);
        const newReview = await postClubReview(clubId, { studentId, content });
        setReviews((prev) => [newReview, ...prev]);
        return true;
      } catch {
        setError('학번이 일치하지 않습니다.');
        return false;
      }
    },
    [clubId],
  );

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  return {
    reviews,
    loading,
    error,
    addReview,
    reload: loadReviews,
  };
};
