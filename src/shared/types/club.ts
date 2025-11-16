import { CLUB_CATEGORY_MAP } from '@/app/constants/clubCategory';

export type ClubCategory = keyof typeof CLUB_CATEGORY_MAP;
export type ClubCategoryEng = (typeof CLUB_CATEGORY_MAP)[ClubCategory];
