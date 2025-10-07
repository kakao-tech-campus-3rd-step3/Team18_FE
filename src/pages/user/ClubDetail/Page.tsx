import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { fetchClubDetail } from './api/clubDetail';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import { ClubReviewsSection } from './components/ClubReviewsSection';
// import { mockClubDetail } from './components/mock';
import type { ClubDetail } from './types/clubDetail';

export const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [club, setClub] = useState<ClubDetail | null>(null);

  useEffect(() => {
    if (!clubId) return;
    fetchClubDetail(clubId).then(setClub).catch(console.error);
  }, [clubId]);

  if (!club) return <div>Loading...</div>;

  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection clubName={club.clubName} category={club.category} />
        <ClubActivityPhotosSection images={club.introductionImages} />
        <ClubDescriptionSection
          introductionOverview={club.introductionOverview}
          introductionActivity={club.introductionActivity}
          introductionIdeal={club.introductionIdeal}
        />
        <ClubReviewsSection />
      </ContentLeft>
      <ContentRight>
        <ClubInfoSidebarSection
          presidentName={club.presidentName}
          presidentPhoneNumber={club.presidentPhoneNumber}
          location={club.location}
          recruitStart={club.recruitStart}
          recruitEnd={club.recruitEnd}
          regularMeetingInfo={club.regularMeetingInfo}
          recruitStatus={club.recruitStatus}
          applicationNotice={club.applicationNotice}
          clubId={club.id}
        />
      </ContentRight>
    </Layout>
  );
};
