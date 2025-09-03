import styled from '@emotion/styled';
import { DashboardSummarySection } from './components/DashboardSummarySection';
import { ApplicantListSection } from './components/ApplicantListSection';

export const DashboardPage = () => {
  return (
    <Layout>
      <DashboardSummarySection />
      <ApplicantListSection />
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '2.6rem 6rem',
}));
