import styled from '@emotion/styled';

export const CategoryTab = styled.div(({ theme }) => ({
  width: 50,
  height: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.radius.md,
  color: theme.colors.textPrimary,
  textAlign: `center`,
  fontSize: theme.font.size.xs,
  border: `1px solid ${theme.colors.gray200}`,
  backgroundColor: `white`,
  padding: 2,
}));

export const CategoryTabContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
});

