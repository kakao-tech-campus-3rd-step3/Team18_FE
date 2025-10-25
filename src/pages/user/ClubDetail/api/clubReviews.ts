import { apiInstance } from '@/api/initInstance';
import type { ClubReview, PostClubReviewRequest } from '@/pages/user/ClubDetail/types/review';

const handleAxiosError = (error: unknown, defaultMessage: string): never => {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    const message = axiosError.response?.data?.message || defaultMessage;
    throw new Error(message);
  }
  throw new Error('알 수 없는 오류가 발생했습니다.');
};

export const fetchClubReviews = async (clubId: number): Promise<ClubReview[]> => {
  return apiInstance
    .get<{ reviews: ClubReview[] }>(`/clubs/${clubId}/reviews`)
    .then((res) => res.data.reviews)
    .catch((error) => handleAxiosError(error, '동아리 후기를 불러오는데 실패했습니다.'));
};

export const postClubReview = async (
  clubId: number,
  body: PostClubReviewRequest,
): Promise<ClubReview> => {
  return apiInstance
    .post<ClubReview>(`/clubs/${clubId}/reviews`, body)
    .then((res) => res.data)
    .catch((error) => handleAxiosError(error, '후기 등록에 실패했습니다.'));
};
