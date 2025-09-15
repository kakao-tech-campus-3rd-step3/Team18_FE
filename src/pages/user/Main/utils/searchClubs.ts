import type { Club } from '@/types/club.ts';

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
