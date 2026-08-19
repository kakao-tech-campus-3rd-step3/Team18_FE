import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { TwoColumnLayout } from '@/shared/components/Layout/TwoColumnLayout';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { PageHeader } from '@/shared/components/PageHeader';
import { StatisticsSection } from '@/shared/components/Statistics';
import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible';
import { engToKorCategory } from '@/shared/utils/formatting';
import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionSection } from './components/ClubDescriptionSection';
import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import ApplyButton from './components/ClubInfoSidebarSection/ApplyButton';
import { ClubReviewsSection } from './components/ClubReviewsSection';
import { useClubDetail } from './hooks/useClubDetail';

import type { ClubCategoryEng } from '@/shared/types/club';

export const ClubDetailPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club = useClubDetail(Number(clubId));
  const isKeyboardVisible = useKeyboardVisible();

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
              <ClubInfoSidebarSection {...club} instagramUrl={undefined} showApplyButton={false} />
            </NarrowOnly>
            {club.introductionImages.length > 0 && (
              <ClubActivityPhotosSection images={club.introductionImages} />
            )}
            <ClubDescriptionSection
              introductionOverview={club.introductionOverview}
              introductionActivity={club.introductionActivity}
              introductionIdeal={club.introductionIdeal}
            />
            <StatisticsSection clubId={club.clubId} scope='public' />
            <Suspense fallback={<LoadingSpinner />}>
              <ClubReviewsSection clubId={club.clubId} />
            </Suspense>
          </>
        }
        right={<ClubInfoSidebarSection {...club} />}
      />
      {!isKeyboardVisible && (
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
      )}
    </>
  );
};

const NarrowOnly = styled.div(({ theme }) => ({
  display: 'none',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'block',
  },
}));

const slideUp = keyframes`
  from {
    transform: translateY(1.5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

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
    animation: `${slideUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both`,
  },
}));
