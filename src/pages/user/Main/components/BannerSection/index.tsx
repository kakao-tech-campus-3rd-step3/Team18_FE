import ClubSearchInput from '@/pages/user/Main/components/BannerSection/ClubSearchInput.tsx';
import {
  BannerWrapper,
  BannerText,
} from '@/pages/user/Main/components/BannerSection/Banner.styled.ts';

export const BannerSection = () => {
  return (
    <BannerWrapper>
      <BannerText>{` 동아리움 (Dongari-um): 동아리 + 공간(-um), 동아리들을 위한 공간.`}</BannerText>
      <ClubSearchInput />
    </BannerWrapper>
  );
};
