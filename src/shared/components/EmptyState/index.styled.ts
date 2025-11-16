import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  color: theme.colors.textPrimary,
}));

export const Logo = styled.img(() => ({
  width: '200px',
  marginBottom: '24px',
}));

export const Message = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  marginBottom: '12px',
  color: theme.colors.textPrimary,
}));

export const SubText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.gray500,
  marginBottom: '8px',
}));

export const MailLink = styled.a(({ theme }) => ({
  color: theme.colors.primary800,
  fontWeight: theme.font.weight.bold,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}));
