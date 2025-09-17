import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection'
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubReviewsSection } from './components/ClubReviewsSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { mockClubDetail } from './components/mock';

export const ClubDetailPage = () => {
  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection
                clubName={mockClubDetail.clubName}
                category={mockClubDetail.category}
              />
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
