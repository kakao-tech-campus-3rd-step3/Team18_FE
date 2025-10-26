import styled from '@emotion/styled';
import { NoticeListCardSection } from './components/NoticeListCardSection';

export const NoticeListPage = () => {
  return (
    <Wrapper>
      <Title>공지사항</Title>
      <NoticeListCardSection />
      <Footer>개발진과 연락하기 : jnupole004@gmail.com</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 0',
  backgroundColor: theme.colors.bg,
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '40px',
}));

const Footer = styled.p(({ theme }) => ({
  marginTop: '30px',
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
