import styled from '@emotion/styled';
import { HeaderTitle } from './components/HeaderTitle';
import { SignupForm } from './components/SignupForm';

export const AdminSignupPage = () => {
  return (
    <Layout>
      <HeaderTitle />
      <SignupForm />
    </Layout>
  );
};

export const Layout = styled.main(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto 4rem auto',
  padding: '0 1.5rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1rem',
  },
}));
