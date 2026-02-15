import styled from '@emotion/styled';

export const Header = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem 2rem 2.5rem 0rem',
  backgroundColor: theme.colors.bg,
  gap: '1rem',

  ['@media (max-width: 1018px)']: {
    //동아리명이 7글자인 경우까지 핸들
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
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
  color: theme.colors.primary,
  backgroundColor: theme.colors.bg,
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: theme.radius.md,
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  height: '36px',

  '&:hover': {
    backgroundColor: theme.colors.primary100,
  },
  ['@media (max-width: 638px)']: {
    display: 'none',
  },
}));

// 플러스 아이콘 버튼 (638px 이하에만 표시)
export const AddIconButton = styled.button(({ theme }) => ({
  display: 'none',

  ['@media (max-width: 638px)']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    color: theme.colors.gray500,
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    transition: 'color 0.2s ease, transform 0.3s ease',

    '&:hover': {
      color: theme.colors.gray700,
      transform: 'rotate(90deg)',
    },
  },
}));

export const SearchInputWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '180px',
  height: '40px',
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bg,
  padding: '0 0.75rem',
  gap: '0.5rem',
  transition: 'border-color 0.2s',

  '&:focus-within': {
    borderColor: theme.colors.primary,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '50%',
  },
}));

export const SearchIcon = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray500,
  fontSize: '1.2rem',
  flexShrink: 0,
}));

export const SearchInput = styled.input(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: theme.font.size.base,
  color: theme.colors.textPrimary,

  '&::placeholder': {
    color: theme.colors.gray500,
  },
}));
