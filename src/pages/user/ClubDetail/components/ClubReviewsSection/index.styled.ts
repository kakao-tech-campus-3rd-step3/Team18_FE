import styled from '@emotion/styled';

export const Divider = styled.hr(({ theme }) => ({
  border: 'none',
  borderTop: `1px solid ${theme.colors.gray200}`,
  width: '100%',
}));

export const ReviewsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.lg,

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '16px',
  },
}));

export const ReviewItem = styled.div({
  marginBottom: '0.5rem',
});

export const ReviewHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.9375rem',
});

export const ReviewAuthor = styled.p(({ theme }) => ({
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textSecondary,
  fontSize: theme.font.size.sm,
}));

export const ReviewDate = styled.p(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));

export const ReviewContent = styled.p(({ theme }) => ({
  lineHeight: 1.6,
  fontSize: theme.font.size.sm,
}));

export const ReviewForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  paddingTop: '1.8rem',

  width: '100%',
});

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
  marginLeft: '0.5rem',
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});
