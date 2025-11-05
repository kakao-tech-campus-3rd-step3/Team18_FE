import styled from '@emotion/styled';

export const Layout = styled.div(({ theme }) => ({
  borderLeft: `3px solid ${theme.colors.primary}`,
  paddingLeft: '1rem',
  marginBottom: '2.4rem',
}));

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.9375rem',
});

export const AuthorInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const ButtonContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const ActionButton = styled.div(({ theme }) => ({
  background: 'none',
  border: 'none',
  color: theme.colors.gray600,
  fontSize: '0.8rem',
  cursor: 'pointer',
  padding: '0.25rem',

  '&:hover': {
    color: theme.colors.primary,
  },
}));

export const Divider = styled.span(({ theme }) => ({
  color: theme.colors.gray200,
  fontSize: '0.875rem',
  margin: '0 0.25rem',
}));

export const CommentContent = styled.div({
  lineHeight: '1.6',
});

export const EditMode = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const EditButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
});
