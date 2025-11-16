import type { ClubCategoryEng } from '@/shared/types/club';

export type Club = {
  id: number;
  name: string;
  category: ClubCategoryEng;
  shortIntroduction: string;
  recruitStatus: RecruitStatus;
};

export const RECRUIT_STATUS_MAP = {
  RECRUITING: '모집중',
  CLOSED: '모집 종료',
  PREPARING: '모집 준비중',
  NOT_SCHEDULED: '모집 일정 미정',
  ALL: '전체',
} as const;

export type RecruitStatus = (typeof RECRUIT_STATUS_MAP)[keyof typeof RECRUIT_STATUS_MAP];
export type RecruitStatusEng = keyof typeof RECRUIT_STATUS_MAP;
export const CLUB_RECRUIT_STATUS_KOR = Object.values(RECRUIT_STATUS_MAP).filter(
  (status) => status !== '전체',
);
