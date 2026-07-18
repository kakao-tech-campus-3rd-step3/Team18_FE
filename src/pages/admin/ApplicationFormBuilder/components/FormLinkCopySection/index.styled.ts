import styled from '@emotion/styled';

export const Tooltip = styled.span(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 0.5rem)',
  right: 0,
  width: 'max-content',
  maxWidth: '100%',
  padding: '0.5rem 0.75rem',
  borderRadius: theme.radius.sm,
  backgroundColor: theme.colors.gray800,
  color: theme.colors.bg,
  fontSize: theme.font.size.xs,
  lineHeight: 1.5,
  boxShadow: theme.shadow.sm,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.15s ease',
  pointerEvents: 'none',
  zIndex: 1,
  boxSizing: 'border-box',
}));

export const Container = styled.div(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  margin: '2.5rem 0 0.5rem 0',
  padding: '0.75rem 0.75rem 0.75rem 1rem',
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bgGreen,
  border: `1px solid ${theme.colors.border}`,
  boxSizing: 'border-box',

  [`&:hover ${Tooltip}, &:focus-within ${Tooltip}`]: {
    opacity: 1,
    visibility: 'visible',
  },
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
