import styled from '@emotion/styled';

export const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '2.6rem 3rem',
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '1.5rem',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    padding: '1rem',
  },
}));

export const ContentLeft = styled.div(({ theme }) => ({
  flex: '1 1 0',
  backgroundColor: theme.colors.bg,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1.5rem',
  boxSizing: 'border-box',
  minWidth: '25rem',
  borderRadius: theme.radius.lg,
  minHeight: '20rem',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    minWidth: '100%',
    padding: '1rem',
  },
}));

export const ContentRight = styled.div(({ theme }) => ({
  flex: '0 0 25rem',
  backgroundColor: theme.colors.bg,
  padding: '1.5rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: theme.radius.lg,
  height: 'auto',
  alignSelf: 'flex-start',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    flex: '1 1 100%',
    maxWidth: '31.25rem',
    margin: '1.5rem auto 0 auto',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    maxWidth: '100%',
    margin: '1rem 0 0 0',
    padding: '1rem',
  },
}));
