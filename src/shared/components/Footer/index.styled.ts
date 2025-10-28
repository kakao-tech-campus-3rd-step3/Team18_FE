import styled from '@emotion/styled';

export const FooterContainer = styled.div(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.gray100,
  padding: 32,
  borderTop: `1px solid ${theme.colors.primary00}`,
}));

export const Copyright = styled.div(({ theme }) => ({
  marginTop: 24,
  textAlign: 'center',
  fontSize: theme.font.size.sm,
  color: theme.colors.gray400,
}));
