import styled from '@emotion/styled';

export const BannerWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100vw',
  height: 300,
  gap: '16px',
  boxSizing: 'border-box',
  overflow: 'hidden',
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
    marginBottom: 0,
  },
}));

export const BannerImage = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center bottom',
  pointerEvents: 'none',
  zIndex: 0,
});

export const BannerText = styled.div(({ theme }) => ({
  position: 'relative',
  fontSize: 20,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  zIndex: 1,
}));

export const SearchContainer = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  width: '100%',
  gap: 30,
  zIndex: 1,
  backgroundColor: '#ffffff',
  padding: '0 20px',
  boxSizing: 'border-box',
  borderRadius: theme.radius.md,

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
