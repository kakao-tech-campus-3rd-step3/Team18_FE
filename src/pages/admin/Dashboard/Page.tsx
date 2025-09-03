import styled from '@emotion/styled';
import { DashboardSummarySection } from './components/DashboardSummarySection';

export const DashboardPage = () => {
  return (
    <Layout>
      <DashboardSummarySection />
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '2.6rem 4rem',
}));
