import styled from '@emotion/styled';
import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import { CLUB_CATEGORY } from '@/pages/user/Main/constant/clubCategory.ts';
import { RECRUIT_STATUS } from '@/pages/user/Main/types/club.ts';
import { Dropdown } from '@/shared/components/Dropdown/index.tsx';
import * as S from './Banner.styled.ts';

type Props = {
  onChange: (s: string) => void;
};

export const BannerSection = ({ onChange }: Props) => {
  return (
    <S.BannerWrapper>
      <S.BannerText>{` 동아리움 (Dongari-um): 동아리 + 공간(-um), 동아리들을 위한 공간.`}</S.BannerText>

      <SearchContainer>
        <ClubSearchInput onChange={onChange} />
        <Dropdown value='동아리 필터' options={CLUB_CATEGORY} onSelect={() => {}}></Dropdown>
        <Dropdown value='전체 보기' options={[...RECRUIT_STATUS]} onSelect={() => {}}></Dropdown>
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
