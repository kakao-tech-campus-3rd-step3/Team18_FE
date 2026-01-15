import styled from '@emotion/styled';
import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import * as S from './Banner.styled.ts';
import { BannerSlideshow } from './BannerSlideshow';
import * as B from './BannerText.styled.ts';

type Props = {
  onChangeSearch: (searchText: string) => void;
};

export const BannerSection = ({ onChangeSearch }: Props) => {
  return (
    <S.BannerWrapper>
      <BannerSlideshow />

      <ContentContainer>
        <B.BannerTextWrapper>
          <B.HeaderText>함께할 사람이 있는 곳, 동아리움.</B.HeaderText>
          <B.SubText>관심 있는 동아리를 찾고, 참여해보세요.</B.SubText>
        </B.BannerTextWrapper>
      </ContentContainer>

      <SearchContainer>
        <ClubSearchInput onChangeSearch={onChangeSearch} />
      </SearchContainer>
    </S.BannerWrapper>
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
  gap: '24px',
  padding: '0 1.5rem',
  boxSizing: 'border-box',
  paddingBottom: '60px',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '0 1rem',
    paddingBottom: '50px',
    gap: '16px',
  },
}));

export const SearchContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  bottom: '-30px',
  left: '0',
  right: '0',
  zIndex: 10,
  width: '700px',
  maxWidth: '90%',
  marginLeft: 'max(20px, calc((100vw - 1200px) / 2))',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    width: '600px',
    bottom: '-25px',
    marginLeft: '1.5rem',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 2rem)',
    bottom: '-25px',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
}));
