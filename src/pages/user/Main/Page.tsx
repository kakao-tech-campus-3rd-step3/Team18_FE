import ClubListSection from '@/pages/user/Main/components/ClubListSection';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import ClubCategorySection from '@/pages/user/Main/components/ClubCategorySection';

const Page = () => {
  return (
    <>
      <BannerSection />
      <ClubCategorySection />
      <ClubListSection />
    </>
  );
};

export default Page;
