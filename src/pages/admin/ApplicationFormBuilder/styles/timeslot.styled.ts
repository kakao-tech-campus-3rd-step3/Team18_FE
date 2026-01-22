import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    gap: '1.5rem',
  },
}));

export const HeaderWrapper = styled.div({
  marginBottom: '2rem',
});

export const DatePickerWrapper = styled.div(({ theme }) => ({
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
    display: 'block',

    '& .react-datepicker-wrapper': {
      width: '100%',
      display: 'block',
    },

    '& .react-datepicker__input-container': {
      width: '100%',
      display: 'block',
    },
  },
}));
export const CustomInputWrapper = styled.div(({ theme }) => ({
  height: '29px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20rem',
  cursor: 'pointer',
  position: 'relative',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  paddingBottom: '0.5rem',
  boxSizing: 'border-box',

  '&::after': {
    content: '"⌵"',
    position: 'absolute',
    top: '-5px',
    right: '13px',
    color: theme.colors.textSecondary,
    fontSize: '22px',
    fontWeight: 'bold',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
  },
}));

export const TimeSelectContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  },
}));

export const TimeSelectWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '& > div:last-child': {
    minWidth: '12rem',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
    width: '100%',

    '& > div:last-child': {
      minWidth: 'auto',
      width: '100%',
    },
  },
}));

export const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.colors.error,
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  display: 'block',
}));
