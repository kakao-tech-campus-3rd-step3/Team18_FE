import { CLUB_CATEGORY_MAP } from '@/constants/clubCategory';

export type ClubCategory = keyof typeof CLUB_CATEGORY_MAP;
export type ClubCategoryEng = (typeof CLUB_CATEGORY_MAP)[ClubCategory];
