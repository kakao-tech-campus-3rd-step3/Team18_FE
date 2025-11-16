import { CLUB_CATEGORY_MAP } from '@/app/constants/clubCategory.ts';
import { engToKorCategory } from '@/shared/utils/formatting.ts';
import { RECRUIT_STATUS_MAP, type Club, type RecruitStatus } from '../types/club.ts';
import type { ClubCategoryEng } from '@/shared/types/club.ts';

export const searchClubs = (clubs: Club[], searchKeyword: string): Club[] => {
  return searchKeyword
    ? clubs.filter(
        (club) =>
          club.name.replace(/\s+/g, '').includes(searchKeyword) ||
          club.category.includes(searchKeyword) ||
          club.shortIntroduction.replace(/\s+/g, '').includes(searchKeyword),
      )
    : clubs;
};

export const getNoSearchMessage = (
  searchText: string,
  categoryFilter: ClubCategoryEng,
  recruitStatus: RecruitStatus | undefined,
) => {
  if (searchText) return `\`${searchText}\` 검색 결과가 없습니다.`;
  if (categoryFilter !== CLUB_CATEGORY_MAP.전체)
    return `\`${engToKorCategory[categoryFilter]}\` 카테고리에 해당하는 동아리가 존재하지 않습니다.`;
  if (recruitStatus && recruitStatus !== RECRUIT_STATUS_MAP.ALL)
    return `현재 \`${recruitStatus}\` 상태인 동아리가 없습니다.`;
};
