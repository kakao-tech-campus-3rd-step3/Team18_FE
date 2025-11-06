import styled from '@emotion/styled';

export const BannerTextWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    gap: '12px',
    marginBottom: '16px',
  },

  [`@media(max-width: ${theme.breakpoints.web})`]: {
    marginLeft: '40px',
    gap: '10px',
  },
  [`@media(max-width: ${theme.breakpoints.mobile})`]: {
    marginLeft: '16px',
    gap: '8px',
  },
}));

export const HeaderText = styled.h2(({ theme }) => ({
  fontSize: '35px',
  fontWeight: theme.font.weight.bold,
  color: theme.colors.bg,
  textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
  margin: 0,
  lineHeight: 1.3,
}));

export const SubText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.regular,
  color: 'rgba(255, 255, 255, 0.9)',
  textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  margin: 0,
  lineHeight: 1.5,
}));
