import styled from '@emotion/styled';

export const BannerTextWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  position: 'relative',
  zIndex: 2,

  [`@media(max-width: ${theme.breakpoints.web})`]: {
    gap: '10px',
  },
  [`@media(max-width: ${theme.breakpoints.mobile})`]: {
    gap: '8px',
  },
}));

export const HeaderText = styled.h2(({ theme }) => ({
  fontSize: '38px',
  fontWeight: theme.font.weight.bold,
  color: theme.colors.bg,
  textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
  margin: 0,
  lineHeight: 1.3,
  [`@media(max-width: ${theme.breakpoints.web})`]: {
    fontSize: '28px',
  },
  [`@media(max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '22px',
  },
}));

export const SubText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.regular,
  color: 'rgba(255, 255, 255, 0.9)',
  textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  margin: 0,
  lineHeight: 1.5,
}));
