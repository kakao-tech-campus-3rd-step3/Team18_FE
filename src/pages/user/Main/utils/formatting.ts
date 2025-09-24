import type { ClubCategory, ClubCategoryEng } from '../constant/clubCategory';

export const korToEngCategory: Record<ClubCategory, ClubCategoryEng> = {
  전체: 'all',
  문예: 'arts',
  학술: 'academics',
  체육: 'sports',
  종교: 'religion',
  봉사: 'volunteer',
};
