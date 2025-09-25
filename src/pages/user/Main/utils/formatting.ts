import type { ClubCategory, ClubCategoryEng } from '../constant/clubCategory';

export const korToEngCategory: Record<ClubCategory, ClubCategoryEng> = {
  전체: 'ALL',
  문예: 'ARTS',
  학술: 'ACADEMICS',
  체육: 'SPORTS',
  종교: 'RELIGION',
  봉사: 'VOLUNTEER',
};
