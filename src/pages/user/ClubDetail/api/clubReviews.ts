import { apiInstance } from '@/api/initInstance';
import type { ClubReview, PostClubReviewRequest } from '@/pages/user/ClubDetail/types/review';
import type { AxiosResponse } from 'axios';

export const fetchClubReviews = async (clubId: number): Promise<ClubReview[]> => {
  try {
    const response: AxiosResponse<{ reviews: ClubReview[] }> = await apiInstance.get(
      `/clubs/${clubId}/reviews`,
    );
    return response.data.reviews;
  } catch {
    throw new Error('동아리 후기를 불러오는데 실패했습니다.');
  }
};

export const postClubReview = async (
  clubId: number,
  body: PostClubReviewRequest,
): Promise<ClubReview> => {
  try {
    const response: AxiosResponse<ClubReview> = await apiInstance.post(
      `/clubs/${clubId}/reviews`,
      body,
    );
    return response.data;
  } catch {
    throw new Error('후기 등록에 실패했습니다.');
  }
};
