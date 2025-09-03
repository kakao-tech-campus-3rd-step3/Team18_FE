import styled from '@emotion/styled';

export const DashboardPage = () => {
  return <Layout></Layout>;
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '2.6rem 4rem',
}));
