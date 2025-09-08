import styled from '@emotion/styled';

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
