import styled from '@emotion/styled';

export const ReviewsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  backgroundColor: theme.colors.bg,
  padding: '2rem 1.5rem',
  borderRadius: theme.radius.lg,
}));

export const ReviewItem = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.md,
  padding: '1rem 1.2rem',
  boxShadow: theme.shadow.sm,
}));

export const ReviewHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

export const ReviewAuthor = styled.p(({ theme }) => ({
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textSecondary,
  fontSize: theme.font.size.base,
}));

export const ReviewDate = styled.p(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));

export const ReviewContent = styled.p(({ theme }) => ({
  lineHeight: 1.6,
  color: theme.colors.textPrimary,
  fontSize: theme.font.size.sm,
}));

export const ReviewForm = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  paddingTop: '1rem',
  borderTop: `1px solid ${theme.colors.border}`,
}));

export const FormTitle = styled.p(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  fontSize: theme.font.size.lg,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

export const FormNote = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});
