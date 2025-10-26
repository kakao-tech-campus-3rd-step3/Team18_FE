import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import {
  CLUB_CATEGORY,
  type ClubCategory,
  type ClubCategoryEng,
} from '@/pages/user/Main/constant/clubCategory.ts';
import { RECRUIT_STATUS, type RecruitStatus } from '@/pages/user/Main/types/club.ts';
import { Dropdown } from '@/shared/components/Dropdown/index.tsx';
import * as S from './Banner.styled.ts';
import { engToKorCategory, korToEngCategory } from '../../utils/formatting.ts';

type Props = {
  onChange: (searchText: string) => void;
  onSelect: (category: ClubCategoryEng) => void;
};

export const BannerSection = ({ onChange, onSelect }: Props) => {
  const [category, setCategory] = useState<ClubCategoryEng>('ALL');
  const [recruitState, setRecruitState] = useState<RecruitStatus>('모집중');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (newCategory: ClubCategory) => {
    const engCategory = korToEngCategory[newCategory];
    onSelect(engCategory);
    searchParams.set('category', engCategory);
    setSearchParams(searchParams);
    setCategory(engCategory);
  };

  return (
    <S.BannerWrapper>
      <S.BannerText>{` 동아리움 (Dongari-um): 동아리 + 공간(-um), 동아리들을 위한 공간.`}</S.BannerText>

      <SearchContainer>
        <ClubSearchInput onChange={onChange} />
        <Dropdown
          value={engToKorCategory[category]}
          options={CLUB_CATEGORY}
          onSelect={handleClick}
        ></Dropdown>
        <Dropdown
          value={recruitState}
          options={[...RECRUIT_STATUS]}
          onSelect={() => setRecruitState}
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
