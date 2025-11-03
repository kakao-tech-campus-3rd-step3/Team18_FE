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
      <B.BannerTextWrapper>
        <B.HeaderText>함께할 사람이 있는 곳, 동아리움.</B.HeaderText>
        <B.SubText>관심 있는 전남대학교 동아리를 찾고, 참여해보세요.</B.SubText>
      </B.BannerTextWrapper>

      <SearchContainer>
        <ClubSearchInput onChangeSearch={onChangeSearch} />
        <Dropdown
          placeholder='동아리 카테고리'
          value={engToKorCategory[selectedCategory]}
          options={CLUB_CATEGORY}
          onSelect={handleCategoryClick}
        ></Dropdown>
        <Dropdown
          placeholder='모집 상태'
          value={selectedRecruitStatus ? selectedRecruitStatus : undefined}
          options={[...CLUB_RECRUIT_STATUS_KOR]}
          onSelect={handleRecruitStatusClick}
        ></Dropdown>
      </SearchContainer>
    </S.BannerWrapper>
  );
};

export const SearchContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: `100%`,
  gap: 30,
  backgroundColor: theme.colors.primary100,
}));
