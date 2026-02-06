import styled from '@emotion/styled';

export const Header = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem 2rem',
  backgroundColor: theme.colors.bg,
  gap: '1rem',
}));

export const LeftGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const RightGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
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
  height: '36px', // 드롭다운과 높이 통일

  '&:hover': {
    backgroundColor: theme.colors.primary200,
  },
}));

export const SearchInputWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '240px',
  height: '36px', // 드롭다운과 높이 통일
  border: `1px solid ${theme.colors.gray300}`,
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bg,
  padding: '0 0.75rem',
  gap: '0.5rem',
  transition: 'border-color 0.2s',

  '&:focus-within': {
    borderColor: theme.colors.primary500,
  },
}));

export const SearchIcon = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray500,
  fontSize: '1rem',
  flexShrink: 0,
}));

export const SearchInput = styled.input(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,

  '&::placeholder': {
    color: theme.colors.gray500,
  },
}));
