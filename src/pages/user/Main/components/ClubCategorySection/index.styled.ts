import styled from '@emotion/styled';

type Props = {
  selected: boolean;
};

export const CategoryTab = styled.div<Props>(({ theme, selected }) => ({
  width: 50,
  height: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.radius.md,
  color: theme.colors.textPrimary,
  textAlign: `center`,
  fontSize: theme.font.size.xs,
  fontWeight: selected ? theme.font.weight.bold : theme.font.weight.regular,
  border: `1px solid ${theme.colors.gray200}`,
  backgroundColor: selected ? theme.colors.primary200 : '',
  padding: 2,
  cursor: 'pointer',
}));

export const CategoryTabContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
});
