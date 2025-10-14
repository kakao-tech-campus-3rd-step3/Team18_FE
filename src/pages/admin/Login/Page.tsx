import styled from '@emotion/styled';
import { LoginButton } from './component/LoginButton';
import { Logo } from './component/Logo';

export const LoginPage = () => {
  return (
    <Container>
      <Logo />
      {/* <LoginInput /> */}
      <LoginButton />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  gap: '30px',
});
