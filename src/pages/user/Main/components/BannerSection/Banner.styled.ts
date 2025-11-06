import styled from '@emotion/styled';

export const BannerWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '100vw',
  height: 400,
  paddingBottom: '200px',
  gap: '16px',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.primary100,

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    minHeight: 300,
    gap: 24,
    zIndex: 1000,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    position: 'sticky',
    top: '60px',
    zIndex: 1000,
    height: 'auto',
    padding: '16px',
    gap: 12,
    marginBottom: 0,
    alignItems: 'center',
    overflowX: 'hidden',
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
