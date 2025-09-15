import { ClubHeaderSection } from './components/ClubHeaderSection';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubReviewsSection } from './components/ClubReviewsSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import { Layout, ContentLeft, ContentRight } from '@/shared/components/ClubDetailLayout/index.styled';

export const ClubDetailPage = () => {
  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection />
        <ClubActivityPhotosSection />
        <ClubDescriptionSection />
        <ClubReviewsSection />
      </ContentLeft>
      <ContentRight>
        <ClubInfoSidebarSection />
      </ContentRight>
    </Layout>
  );
};
