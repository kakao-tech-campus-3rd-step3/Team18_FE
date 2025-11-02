import type { ClubCategory, ClubCategoryEng } from '../constants/clubCategory';
import type { RecruitStatus, RecruitStatusEng } from '../types/club';

export const korToEngCategory: Record<ClubCategory, ClubCategoryEng> = {
  전체: 'ALL',
  문예: 'LITERATURE',
  학술: 'STUDY',
  체육: 'SPORTS',
  종교: 'RELIGION',
  봉사: 'VOLUNTEER',
};

export const engToKorCategory: Record<ClubCategoryEng, ClubCategory> = {
  ALL: '전체',
  LITERATURE: '문예',
  STUDY: '학술',
  SPORTS: '체육',
  RELIGION: '종교',
  VOLUNTEER: '봉사',
};

export const korToEngRecruitStatus: Record<RecruitStatus, RecruitStatusEng> = {
  모집중: 'RECRUITING',
  '모집 종료': 'CLOSED',
  '모집 일정 미정': 'NOT_SCHEDULED',
  '모집 준비중': 'PREPARING',
};
