import type { ClubCategoryEng } from '../constant/clubCategory';

export type Club = {
  id: number;
  name: string;
  category: ClubCategoryEng;
  shortIntroduction: string;
  recruitStatus: RecruitStatus;
};
export const RECRUIT_STATUS = ['모집중', '모집 마감'] as const;

export type RecruitStatus = (typeof RECRUIT_STATUS)[number];
