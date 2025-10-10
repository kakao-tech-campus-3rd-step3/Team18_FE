export type RecruitStatus = '모집중' | '모집 마감';

export type Club = {
  id: number;
  name: string;
  category: string;
  shortIntroduction: string;
  recruitStatus: RecruitStatus;
};
