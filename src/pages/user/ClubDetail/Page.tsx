import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TwoColumnLayout } from '@/shared/components/Layout/TwoColumnLayout';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { PageHeader } from '@/shared/components/PageHeader';
import { engToKorCategory } from '@/shared/utils/formatting';
import { fetchClubDetail } from './api/clubDetail';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import ApplyButton from './components/ClubInfoSidebarSection/ApplyButton';
import { ClubReviewsSection } from './components/ClubReviewsSection';

import type { ClubDetail } from './types/clubDetail';
import type { ClubCategoryEng } from '@/shared/types/club';

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
    <>
      <TwoColumnLayout
        left={
          <>
            <PageHeader
              clubName={club.clubName}
              category={
                club.category in engToKorCategory ? (club.category as ClubCategoryEng) : 'ALL'
              }
              instagramUrl={club.instagramUrl}
              clubId={club.clubId}
            />
            <NarrowOnly>
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
                showApplyButton={false}
              />
            </NarrowOnly>
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
      <FixedBottomBar>
        <ApplyButton
          clubId={club.clubId}
          clubName={club.clubName}
          recruitStatus={club.recruitStatus}
          to={`/clubs/${club.clubId}/apply`}
          width='100%'
          isRegistered={club.isRegistered}
          everyTimeUrl={club.everyTimeUrl}
          googleFormUrl={club.googleFormUrl}
        />
      </FixedBottomBar>
    </>
  );
};

const NarrowOnly = styled.div(({ theme }) => ({
  display: 'none',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'block',
  },
}));

const FixedBottomBar = styled.div(({ theme }) => ({
  display: 'none',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'block',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0.75rem 1.3rem',
    zIndex: 100,
  },
}));
