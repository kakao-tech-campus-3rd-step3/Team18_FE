import styled from '@emotion/styled';

export const UserInfoWrapper = styled.div(({ theme }) => ({
  boxSizing: 'border-box',
  width: '48rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  paddingBottom: '3rem',

  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    width: '100%',
  },
}));

export const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const FormRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  width: '100%',
  '& > *': {
    flex: '1 1 0',
    minWidth: 0,
  },
});

export const Label = styled.label(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: theme.font.weight.medium,
}));

export const FormContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
});

export const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.colors.warning,
  fontSize: theme.font.size.xs,
  padding: 0,
}));
