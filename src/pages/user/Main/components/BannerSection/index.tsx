import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CLUB_CATEGORY } from '@/constants/clubCategory';
import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import { CLUB_RECRUIT_STATUS_KOR, type RecruitStatus } from '@/pages/user/Main/types/club.ts';
import { Dropdown } from '@/shared/components/Dropdown/index.tsx';
import { engToKorCategory, korToEngCategory, korToEngRecruitStatus } from '@/utils/formatting.ts';
import * as S from './Banner.styled.ts';
import * as B from './BannerText.tsx';
import type { ClubCategory, ClubCategoryEng } from '@/types/club';
type FilterRecruitStatus = RecruitStatus | '전체';
type Props = {
  onChangeSearch: (searchText: string) => void;
  onSelectCategory: (category: ClubCategoryEng) => void;
  onSelectStatus: (recruitStatus: FilterRecruitStatus) => void;
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

    if (status === '전체') {
      filterParams.delete('status');
    } else {
      filterParams.set('status', korToEngRecruitStatus[status]);
    }

    setFilterParams(filterParams);
  };

  return (
    <S.BannerWrapper>
      <BannerSlideshow />
      <ContentContainer>
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
              value={selectedRecruitStatus === '전체' ? undefined : selectedRecruitStatus}
              options={['전체', ...CLUB_RECRUIT_STATUS_KOR] as RecruitStatus[]}
              onSelect={handleRecruitStatusClick}
            />
          </DropdownWrapper>
        </SearchContainer>
      </ContentContainer>
    </S.BannerWrapper>
  );
};

const BannerSlideshow = () => {
  const images = ['/assets/banner01.png', '/assets/banner02.png', '/assets/banner03.png'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideWrapper>
      {images.map((src, i) => (
        <SlideImage key={src} src={src} active={i === index} />
      ))}
    </SlideWrapper>
  );
};

const ContentContainer = styled.div(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '0 80px',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '0 40px',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '0 16px',
    gap: '12px',
  },
}));

const SlideWrapper = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 0,
});

const SlideImage = styled.img<{ active: boolean }>(({ active }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center bottom',
  transition: 'opacity 1.5s ease-in-out',
  opacity: active ? 1 : 0,
}));

export const SearchContainer = styled.div(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
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
