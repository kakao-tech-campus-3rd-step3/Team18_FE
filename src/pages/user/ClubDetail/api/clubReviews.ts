import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { ClubReview, PostClubReviewRequest } from '@/pages/user/ClubDetail/types/review';

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
