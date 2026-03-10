import { useParams } from 'react-router-dom';
import { TwoColumnLayout } from '@/shared/components/Layout/TwoColumnLayout';
import { PageHeader } from '@/shared/components/PageHeader';
import { engToKorCategory } from '@/shared/utils/formatting';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import { ClubReviewsSection } from './components/ClubReviewsSection';
import { useClubDetail } from './hooks/useClubDetail';

import type { ClubCategoryEng } from '@/shared/types/club';

export const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club = useClubDetail(Number(clubId));

  return (
    <TwoColumnLayout
      left={
        <>
          <PageHeader
            clubName={club.clubName}
            category={
              club.category in engToKorCategory ? (club.category as ClubCategoryEng) : 'ALL'
            }
          />
          {club.introductionImages.length > 0 && (
            <ClubActivityPhotosSection images={club.introductionImages} />
          )}
          <ClubDescriptionSection
            introductionOverview={club.introductionOverview}
            introductionActivity={club.introductionActivity}
            introductionIdeal={club.introductionIdeal}
          />
          <ClubReviewsSection clubId={club.clubId} />
        </>
      }
      right={
        <ClubInfoSidebarSection
          clubName={club.clubName}
          presidentName={club.presidentName}
          presidentPhoneNumber={club.presidentPhoneNumber}
          location={club.location}
          recruitStart={club.recruitStart}
          recruitEnd={club.recruitEnd}
          regularMeetingInfo={club.regularMeetingInfo}
          recruitStatus={club.recruitStatus}
          applicationNotice={club.applicationNotice}
          clubId={club.clubId}
          isRegistered={club.isRegistered}
          everyTimeUrl={club.everyTimeUrl}
          googleFormUrl={club.googleFormUrl}
          instagramUrl={club.instagramUrl}
        />
      }
    />
  );
};
