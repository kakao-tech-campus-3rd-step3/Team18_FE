import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicantListSection } from './components/ApplicantListSection';
import { DashboardSummarySection } from './components/DashboardSummarySection';
import { SentAcceptanceMessagesSection } from './components/SentAcceptanceMessagesSection';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const DashboardPage = () => {
  const { clubId } = useParams();
  const [stage, setStage] = useState<ApplicationStage>('서류');

  return (
    <Layout>
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <DashboardSummarySection />
          <ApplicantListSection stage={stage} setStage={setStage} clubId={Number(clubId)} />
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
