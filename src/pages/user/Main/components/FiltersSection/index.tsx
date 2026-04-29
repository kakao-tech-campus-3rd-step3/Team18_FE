import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CLUB_CATEGORY } from '@/app/constants/clubCategory';
import { CLUB_RECRUIT_STATUS_KOR, type RecruitStatus } from '@/pages/user/Main/types/club.ts';
import {
  engToKorCategory,
  korToEngCategory,
  korToEngRecruitStatus,
} from '@/shared/utils/formatting.ts';
import * as S from './index.styled';
import type { ClubCategory, ClubCategoryEng } from '@/shared/types/club';

type FilterRecruitStatus = RecruitStatus | '전체';

type FiltersSectionProps = {
  selectedCategory: ClubCategoryEng;
  selectedRecruitStatus: RecruitStatus | undefined;
};

export const FiltersSection = ({
  selectedCategory,
  selectedRecruitStatus,
}: FiltersSectionProps) => {
  const [filterParams, setFilterParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (newCategory: ClubCategory) => {
    const engCategory = korToEngCategory[newCategory];
    filterParams.set('category', engCategory);
    setFilterParams(filterParams);
  };

  const handleRecruitStatusClick = (status: FilterRecruitStatus) => {
    if (status === '전체') {
      filterParams.delete('status');
    } else {
      filterParams.set('status', korToEngRecruitStatus[status as RecruitStatus]);
    }
    setFilterParams(filterParams);
    setIsDropdownOpen(false);
  };

  return (
    <S.FilterTabsContainer>
      <S.FilterRow>
        <S.TabsWrapper>
          {CLUB_CATEGORY.map((category) => (
            <S.TabButton
              key={category}
              isSelected={engToKorCategory[selectedCategory] === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </S.TabButton>
          ))}
        </S.TabsWrapper>

        <S.DropdownWrapper>
          <S.DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedRecruitStatus || '전체'}
            <S.DropdownIcon isOpen={isDropdownOpen}>
              <svg width='10' height='10' viewBox='0 0 10 10' fill='none' aria-hidden='true'>
                <path
                  d='M1 3L5 7L9 3'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </S.DropdownIcon>
          </S.DropdownButton>

          {isDropdownOpen && (
            <S.DropdownMenu>
              {['전체', ...CLUB_RECRUIT_STATUS_KOR].map((status) => (
                <S.DropdownItem
                  key={status}
                  isSelected={(selectedRecruitStatus || '전체') === status}
                  onClick={() => handleRecruitStatusClick(status as FilterRecruitStatus)}
                >
                  {status}
                </S.DropdownItem>
              ))}
            </S.DropdownMenu>
          )}
        </S.DropdownWrapper>
      </S.FilterRow>
    </S.FilterTabsContainer>
  );
};
