import { ClubSearchInput } from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import * as S from './Banner.styled.ts';

type Props = {
  onChange: (s: string) => void;
};

export const BannerSection = ({ onChange }: Props) => {
  return (
    <S.BannerWrapper>
      <S.BannerText>{` 동아리움 (Dongari-um): 동아리 + 공간(-um), 동아리들을 위한 공간.`}</S.BannerText>
      <ClubSearchInput onChange={onChange} />
    </S.BannerWrapper>
  );
};
