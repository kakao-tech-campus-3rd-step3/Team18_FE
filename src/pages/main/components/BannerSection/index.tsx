import { BannerText } from '@/pages/main/components/BannerSection/BannerText';
import { BannerWrapper } from '@/pages/main/components/BannerSection/BannerWrapper';
import ClubSearchInput from '@/pages/main/components/BannerSection/ClubSearchInput';

const BannerSection = () => {
  return (
    <BannerWrapper>
      <BannerText>{` 동아리움 (Dongari-um): 동아리 + 공간(-um), 동아리들을 위한 공간.`}</BannerText>
      <ClubSearchInput />
    </BannerWrapper>
  );
};

export default BannerSection;
