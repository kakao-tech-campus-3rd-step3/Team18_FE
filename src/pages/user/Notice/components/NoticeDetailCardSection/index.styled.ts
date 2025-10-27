import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.sm,
  padding: '40px 60px',
  border: `1px solid ${theme.colors.border}`,
}));

export const Title = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '32px',
}));

export const MetaWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '80px',
  marginBottom: '16px',
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
}));

export const MetaItem = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const Label = styled.span(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  marginRight: '6px',
  color: theme.colors.textPrimary,
}));

export const Content = styled.pre(({ theme }) => ({
  marginTop: '56px',
  fontSize: theme.font.size.sm,
  lineHeight: 1.6,
  color: theme.colors.textPrimary,
  whiteSpace: 'pre-wrap',
}));

export const Button = styled.button(({ theme }) => ({
  display: 'block',
  marginLeft: 'auto',
  marginTop: '40px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  border: 'none',
  borderRadius: theme.radius.sm,
  padding: '6px 14px',
  fontSize: theme.font.size.xs,
  cursor: 'pointer',
  transition: '0.2s ease',
  '&:hover': {
    backgroundColor: theme.colors.primary700,
    transform: 'translateY(-1px)',
  },
}));
