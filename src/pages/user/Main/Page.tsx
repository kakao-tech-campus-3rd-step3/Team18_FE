import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubCategorySection } from '@/pages/user/Main/components/ClubCategorySection';

export const MainPage = () => {
  return (
    <>
      <BannerSection />
      <ClubCategorySection />
      <ClubListSection />
    </>
  );
};
