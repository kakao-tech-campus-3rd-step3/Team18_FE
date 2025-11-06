import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { CLUB_CATEGORY } from '@/constants/clubCategory';
import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import { CLUB_RECRUIT_STATUS_KOR, type RecruitStatus } from '@/pages/user/Main/types/club.ts';
import { Dropdown } from '@/shared/components/Dropdown/index.tsx';
import { engToKorCategory, korToEngCategory, korToEngRecruitStatus } from '@/utils/formatting.ts';
import * as S from './Banner.styled.ts';
import * as B from './BannerText.tsx';
import type { ClubCategory, ClubCategoryEng } from '@/types/club';

type Props = {
  onChangeSearch: (searchText: string) => void;
  onSelectCategory: (category: ClubCategoryEng) => void;
  onSelectStatus: (recruitStatus: RecruitStatus) => void;
  selectedCategory: ClubCategoryEng;
  selectedRecruitStatus: RecruitStatus | undefined;
};

export const BannerSection = ({
  onChangeSearch,
  onSelectCategory,
  onSelectStatus,
  selectedCategory,
  selectedRecruitStatus,
}: Props) => {
  const [filterParams, setFilterParams] = useSearchParams();

  const handleCategoryClick = (newCategory: ClubCategory) => {
    const engCategory = korToEngCategory[newCategory];
    onSelectCategory(engCategory);
    filterParams.set('category', engCategory);
    setFilterParams(filterParams);
  };

  const handleRecruitStatusClick = (status: RecruitStatus) => {
    onSelectStatus(status);
    filterParams.set('status', korToEngRecruitStatus[status]);
    setFilterParams(filterParams);
  };

  return (
    <S.BannerWrapper>
      <S.BannerImage src='public/assets/banner01.jpg' alt='배너 배경' />
      <B.BannerTextWrapper>
        <B.HeaderText>함께할 사람이 있는 곳, 동아리움.</B.HeaderText>
        <B.SubText>관심 있는 전남대학교 동아리를 찾고, 참여해보세요.</B.SubText>
      </B.BannerTextWrapper>

      <SearchContainer>
        <ClubSearchInput onChangeSearch={onChangeSearch} />
        <DropdownWrapper>
          <Dropdown
            placeholder='동아리 카테고리'
            value={engToKorCategory[selectedCategory]}
            options={CLUB_CATEGORY}
            onSelect={handleCategoryClick}
          />
          <Dropdown
            placeholder='모집 상태'
            value={selectedRecruitStatus ? selectedRecruitStatus : undefined}
            options={[...CLUB_RECRUIT_STATUS_KOR]}
            onSelect={handleRecruitStatusClick}
          />
        </DropdownWrapper>
      </SearchContainer>
    </S.BannerWrapper>
  );
};

export const SearchContainer = styled.div(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  gap: 16,
  padding: '0 20px 0 80px',
  boxSizing: 'border-box',
  opacity: 1,

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    gap: 16,
    padding: '0 16px 0 40px',
  },

  [`@media(max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    padding: '0 16px',
    '& > *': {
      width: '100%',
      boxSizing: 'border-box',
    },
  },
}));

export const DropdownWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  zIndex: 3,

  [`@media(max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
    gap: 12,
    '& > *': {
      flex: 1,
    },
  },
}));
