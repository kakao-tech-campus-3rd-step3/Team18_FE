import styled from '@emotion/styled';

export const SelectBox = styled.div<{ width: string; disabled: boolean }>(
  ({ theme, width, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: width,
    height: '1.4rem',
    padding: '10px',
    borderRadius: theme.radius.md,
    backgroundColor: disabled ? theme.colors.gray00 : theme.colors.bg,
    alignSelf: 'center',
    border: `1px solid ${theme.colors.gray200}`,
    minWidth: '8rem',

    '&::before': {
      content: '"⌵"',
      position: 'absolute',
      top: '6px',
      right: '13px',
      color: theme.colors.textSecondary,
      fontSize: '22px',
      fontWeight: 'bold',
    },
  }),
);

export const SelectOptions = styled.ul(({ theme }) => ({
  padding: '0.5rem',
  position: 'absolute',
  top: '50px',
  left: '0',
  width: '90%',
  maxHeight: '12.5rem',
  overflowY: 'auto',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.md,
  backgroundColor: `${theme.colors.bg}`,
  zIndex: 1,
}));

export const Option = styled.li<{ selected: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.colors.primary : theme.colors.textSecondary,
  padding: '0.625rem',
  transition: 'background-color 0.2s ease-in',

  '&:hover': {
    borderRadius: theme.radius.md,
    background: theme.colors.gray100,
  },
}));
