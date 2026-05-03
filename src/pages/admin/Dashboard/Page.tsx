import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { OnboardingPopup } from '@/shared/components/OnboardingPopup';
import { useOnboardingPopup } from '@/shared/hooks/useOnboardingPopup';
import { ApplicantListSection } from './components/ApplicantListSection';
import { DashboardSummarySection } from './components/DashboardSummarySection';
import { SentAcceptanceMessagesSection } from './components/SentAcceptanceMessagesSection';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const DashboardPage = () => {
  const { clubId } = useParams();
  const [stage, setStage] = useState<ApplicationStage>('서류');
  const {
    isOpen: isDashboardPopupOpen,
    confirm: confirmDashboardPopup,
    reopen: reopenDashboardPopup,
  } = useOnboardingPopup('dashboard', { triggerMode: 'login' });

  return (
    <Layout>
      <OnboardingPopup
        isOpen={isDashboardPopupOpen}
        images={[1, 2, 3, 4, 5, 6].map((n) => `/assets/onboarding/dashboard/${n}.webp`)}
        imageAlt='지원자 관리 가이드'
        onConfirm={confirmDashboardPopup}
      />
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <DashboardSummarySection />
          <ApplicantListSection
            stage={stage}
            setStage={setStage}
            clubId={Number(clubId)}
            onOpenGuide={reopenDashboardPopup}
          />
        </Suspense>
        <SentAcceptanceMessagesSection stage={stage} />
      </Container>
    </Layout>
  );
};

const Layout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
  width: '100%',
});

const Container = styled.main({
  maxWidth: '1200px',
  width: '100%',
  padding: '3rem 1.5rem',
  boxSizing: 'border-box',
});
