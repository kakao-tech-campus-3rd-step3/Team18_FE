import styled from '@emotion/styled';

export const ClubItem = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 240,
  height: 130,
  marginBottom: 10,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: `${theme.radius.lg}`,
  boxShadow: `${theme.shadow.md}`,
  padding: 16,
  gap: 16,
}));
