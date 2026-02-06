import styled from '@emotion/styled';

export const Container = styled.div({
  minHeight: '100vh',
  backgroundColor: '#FAFAFA',
});

export const ContentWrapper = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
});

export const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
  flexWrap: 'wrap',
});

export const ActionGroup = styled.div({
  display: 'flex',
  gap: '0.5rem',
  marginLeft: 'auto',
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

export const ControlGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: '100%', // 새로운 줄에서 전체 너비 사용
});

export const SearchWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const SearchInput = styled.input(({ theme }) => ({
  fontSize: theme.font.size.sm,
  padding: '0.5rem 2rem 0.5rem 0.75rem',
  borderRadius: theme.radius.sm,
  border: `1px solid ${theme.colors.gray200}`,
  width: '200px',
  outline: 'none',

  '&:focus': {
    borderColor: theme.colors.primary600,
  },

  '&::placeholder': {
    color: theme.colors.gray400,
  },
}));

export const SearchIcon = styled.span({
  position: 'absolute',
  right: '0.5rem',
  fontSize: '14px',
  pointerEvents: 'none',
});
