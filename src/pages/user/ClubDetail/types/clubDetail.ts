export type RecruitStatus = '모집중' | '모집 준비중' | '모집 종료';

export type ClubDetail = {
  clubId: number;
  clubName: string;
  location: string;
  category: string;
  shortIntroduction: string;
  introductionImages: string[];
  introductionOverview: string;
  introductionActivity: string;
  introductionIdeal: string;
  regularMeetingInfo: string;
  recruitStatus: RecruitStatus;
  presidentName: string;
  presidentPhoneNumber: string;
  recruitStart: string;
  recruitEnd: string;
  applicationNotice: string;
};
