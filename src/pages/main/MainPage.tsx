import ClubListSection from '@/pages/main/components/ClubListSection';
import { ClubListContainer } from '@/pages/main/components/ClubListSection/ClubListContainer';
import BannerSection from '@/pages/main/components/BannerSection';
import ClubCategorySection from '@/pages/main/components//ClubCategorySection';

const MainPage = () => {
  return (
    <>
      <BannerSection />
      <ClubCategorySection />
      <ClubListContainer>
        <ClubListSection />
      </ClubListContainer>
    </>
  );
};

export default MainPage;
