import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  marginTop: '2.5rem',
  padding: '0.75rem 0.75rem 0.75rem 1rem',
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bgGreen,
  border: `1px solid ${theme.colors.border}`,
  boxSizing: 'border-box',
}));

export const LinkInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
  minWidth: 0,
  textAlign: 'left',
});

export const LinkLabel = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: theme.font.size.xs,
  color: theme.colors.gray500,
}));

export const LinkText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.gray900,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const CopyButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  padding: '0.5rem 0.875rem',
  border: 'none',
  borderRadius: theme.radius.sm,
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  fontSize: theme.font.size.sm,
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: theme.colors.primary700,
  },
}));
