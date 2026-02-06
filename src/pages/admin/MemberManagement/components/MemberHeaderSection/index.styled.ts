import styled from '@emotion/styled';

export const Header = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem',
  borderBottom: `1px solid ${theme.colors.gray200}`,
}));

export const ActionGroup = styled.div({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});

export const AddButton = styled.button(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.primary800,
  backgroundColor: theme.colors.primary100,
  border: 'none',
  borderRadius: theme.radius.md,
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: theme.colors.primary200,
  },
}));

export const FilterBar = styled.div({
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
});

export const SearchInputWrapper = styled.div({
  position: 'relative',
  flex: 1,
  maxWidth: '400px',
});

export const SearchInput = styled.input(({ theme }) => ({
  width: '100%',
  padding: '0.5rem 2.25rem 0.5rem 0.75rem',
  border: `1px solid ${theme.colors.gray300}`,
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.sm,
  transition: 'border-color 0.2s',

  '&:focus': {
    outline: 'none',
    borderColor: theme.colors.primary500,
  },

  '&::placeholder': {
    color: theme.colors.gray500,
  },
}));

export const SearchIcon = styled.span(({ theme }) => ({
  position: 'absolute',
  right: '0.75rem',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: theme.colors.gray500,
  fontSize: theme.font.size.sm,
}));
