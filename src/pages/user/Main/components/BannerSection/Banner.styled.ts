import styled from '@emotion/styled';

export const BannerText = styled.div(({ theme }) => ({
  fontSize: 20,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
}));

export const BannerWrapper = styled.div(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: `100%`,
  height: 300,
  gap: '16px',
  backgroundColor: theme.colors.primary100,
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    height: 250,
    gap: 24,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    height: 'auto',
    padding: '16px',
    gap: 12,
  },
}));

export const SearchContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: `100%`,
  gap: 30,
  backgroundColor: theme.colors.primary100,
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    gap: 20,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    alignItems: 'stretch',
    '& > *': {
      width: '100%',
      boxSizing: 'border-box',
    },
  },
}));
