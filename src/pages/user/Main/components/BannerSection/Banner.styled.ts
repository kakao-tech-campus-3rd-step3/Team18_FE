import styled from '@emotion/styled';

export const BannerText = styled.div(({ theme }) => ({
  fontSize: 20,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
}));

export const BannerWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: `100%`,
  height: 300,
  gap: 30,
  backgroundColor: theme.colors.primary100,
}));
