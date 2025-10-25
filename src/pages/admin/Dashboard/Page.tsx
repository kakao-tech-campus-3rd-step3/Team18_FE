import styled from '@emotion/styled';
import { ApplicantListSection } from './components/ApplicantListSection';
import { DashboardSummarySection } from './components/DashboardSummarySection';

export const DashboardPage = () => {
  return (
    <Layout>
      <Container>
        <DashboardSummarySection />
        <ApplicantListSection />
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
  padding: '2.5rem 0',
  maxWidth: '1200px',
  width: '100%',
});
