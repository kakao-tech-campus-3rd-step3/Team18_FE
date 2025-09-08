import ClubListSection from '@/pages/user/Main/components/ClubListSection';
import { ClubListContainer } from '@/pages/user/Main/components/ClubListSection/ClubListContainer';
import BannerSection from '@/pages/user/Main/components/BannerSection';
import ClubCategorySection from '@/pages/user/Main/components/ClubCategorySection';

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
