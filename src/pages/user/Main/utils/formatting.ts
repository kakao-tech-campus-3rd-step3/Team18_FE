import type { ClubCategory, ClubCategoryEng } from '../constant/clubCategory';

export const korToEngCategory: Record<ClubCategory, ClubCategoryEng> = {
  전체: 'ALL',
  문예: 'LITERATURE',
  학술: 'STUDY',
  체육: 'SPORTS',
  종교: 'RELIGION',
  봉사: 'VOLUNTEER',
};
