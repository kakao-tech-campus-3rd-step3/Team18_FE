import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '@/shared/components/PageHeader';
import { TwoColumnLayout } from '@/shared/components/Layout/TwoColumnLayout';
import { fetchClubDetail } from './api/clubDetail';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import { ClubReviewsSection } from './components/ClubReviewsSection';
import type { ClubDetail } from './types/clubDetail';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';

export const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const clubIdNumber = Number(clubId);
  const [club, setClub] = useState<ClubDetail | null>(null);

  useEffect(() => {
    if (!clubIdNumber) return;
    fetchClubDetail(clubIdNumber).then(setClub).catch(console.error);
  }, [clubIdNumber]);

  if (!club) return <LoadingSpinner />;

  return (
    <TwoColumnLayout
      left={
        <>
          <PageHeader clubName={club.clubName} category={club.category} />
          <ClubActivityPhotosSection images={club.introductionImages} />
          <ClubDescriptionSection
            introductionOverview={club.introductionOverview}
            introductionActivity={club.introductionActivity}
            introductionIdeal={club.introductionIdeal}
          />
          <ClubReviewsSection clubId={club.clubId} />
        </>
      }
      right={
        <>
          <ClubInfoSidebarSection
            presidentName={club.presidentName}
            presidentPhoneNumber={club.presidentPhoneNumber}
            location={club.location}
            recruitStart={club.recruitStart}
            recruitEnd={club.recruitEnd}
            regularMeetingInfo={club.regularMeetingInfo}
            recruitStatus={club.recruitStatus}
            applicationNotice={club.applicationNotice}
            clubId={club.clubId}
          />
        </>
      }
    />
  );
};
