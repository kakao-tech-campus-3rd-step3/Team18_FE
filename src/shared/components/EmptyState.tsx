import styled from '@emotion/styled';
import { CONTACT_EMAIL } from '@/app/constants/email';

export const EmptyState = () => {
  return (
    <Container>
      <Logo src='/assets/logos/logo.webp' alt='Dongari-um 로고' />
      <Message>선택된 동아리가 없어요.</Message>
      <SubText>동아리를 등록하려면 아래 메일로 문의해주세요.</SubText>
      <MailLink href='mailto:jnupole004@gmail.com'>{CONTACT_EMAIL}</MailLink>
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  color: theme.colors.textPrimary,
}));

const Logo = styled.img(() => ({
  width: '200px',
  marginBottom: '24px',
}));

const Message = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  marginBottom: '12px',
  color: theme.colors.textPrimary,
}));

const SubText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.gray500,
  marginBottom: '8px',
}));

const MailLink = styled.a(({ theme }) => ({
  color: theme.colors.primary800,
  fontWeight: theme.font.weight.bold,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}));
