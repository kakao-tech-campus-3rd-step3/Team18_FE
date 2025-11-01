import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail';

// GET용: 전체 데이터
export type ClubDetailEdit = ClubDetail;

// 이미지 제외한 정보 수정
export type ClubDetailUpdatePayload = Omit<ClubDetailEdit, 'introductionImages'>;

// 이미지 전용 수정 (PATCH 전용)
export type ClubDetailImagesPayload = {
  keepImageIds: number[];
  newImages?: File[];
};
