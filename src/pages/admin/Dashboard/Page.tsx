import styled from '@emotion/styled';
import { ApplicantListSection } from './components/ApplicantListSection';
import { DashboardSummarySection } from './components/DashboardSummarySection';
import { SentAcceptanceMessagesSection } from './components/SentAcceptanceMessagesSection';

export const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <DashboardSummarySection />
        <ApplicantListSection />
        <SentAcceptanceMessagesSection />
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
  padding: '2.5rem',
  maxWidth: '1250px',
  width: '100%',
});
