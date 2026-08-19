import styled from '@emotion/styled';

export const Divider = styled.hr(({ theme }) => ({
  border: 'none',
  borderTop: `1px solid ${theme.colors.gray200}`,
  width: '100%',
}));

export const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const Header = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.35rem',
});

export const Caption = styled.p(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));

export const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',

  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    gridTemplateColumns: '1fr',
  },
}));

export const Card = styled.div<{ isWide?: boolean }>(({ theme, isWide }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
  padding: '1.1rem 1.25rem',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.gray100}`,
  backgroundColor: theme.colors.bg,
  gridColumn: isWide ? '1 / -1' : 'auto',
}));

export const CardTitle = styled.h3(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
}));

export const Notice = styled.p(({ theme }) => ({
  padding: '2rem 1rem',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.gray100}`,
  backgroundColor: theme.colors.gray00,
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  textAlign: 'center',
}));
