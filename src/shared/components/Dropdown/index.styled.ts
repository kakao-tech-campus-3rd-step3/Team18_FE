import styled from '@emotion/styled';

export const DropdownWrapper = styled.div(({ theme }) => ({
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
  },
}));

export const SelectBox = styled.div<{ disabled: boolean }>(({ theme, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '2.65rem',
  padding: '10px',
  borderRadius: theme.radius.md,
  backgroundColor: disabled ? theme.colors.gray00 : theme.colors.bg,
  alignSelf: 'center',
  border: `1px solid ${theme.colors.gray200}`,
  minWidth: '9rem',
  boxSizing: 'border-box',

  '&::before': {
    content: '"⌵"',
    position: 'absolute',
    top: '6px',
    right: '13px',
    color: theme.colors.textSecondary,
    fontSize: '22px',
    fontWeight: 'bold',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    minWidth: 'auto',
  },
}));

export const SelectOptions = styled.ul(({ theme }) => ({
  padding: '0.3rem',
  position: 'absolute',
  top: '45px',
  left: '0',
  maxHeight: '12.5rem',
  overflowY: 'auto',
  zIndex: 100,
  width: '90%',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.md,
  backgroundColor: `${theme.colors.bg}`,
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
