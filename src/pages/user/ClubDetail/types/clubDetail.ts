import type { RecruitStatus } from '@/pages/user/Main/types/club';

export type ClubDetail = {
  clubId: number;
  clubName: string;
  location: string;
  category: string;
  shortIntroduction: string;
  introductionImages: {
    id: number;
    url: string;
  }[];
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
