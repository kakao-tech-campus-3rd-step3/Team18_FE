export const CLUB_CATEGORY_MAP = {
  전체: 'ALL',
  문예: 'LITERATURE',
  학술: 'STUDY',
  체육: 'SPORTS',
  종교: 'RELIGION',
  봉사: 'VOLUNTEER',
} as const;

export const CLUB_CATEGORY = Object.keys(CLUB_CATEGORY_MAP) as (keyof typeof CLUB_CATEGORY_MAP)[];
