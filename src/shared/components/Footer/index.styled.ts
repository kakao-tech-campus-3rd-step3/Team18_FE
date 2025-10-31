import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.gray100,
  padding: 32,
  borderTop: `1px solid ${theme.colors.primary00}`,
  boxSizing: 'border-box',
}));

export const Copyright = styled.div(({ theme }) => ({
  marginTop: 8,
  textAlign: 'center',
  fontSize: theme.font.size.sm,
  color: theme.colors.gray400,
}));

export const Email = styled.a(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  fontSize: theme.font.size.xs,
  color: theme.colors.gray500,
  marginBottom: 8,
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    textDecoration: 'underline',
    color: theme.colors.gray700,
  },
}));
