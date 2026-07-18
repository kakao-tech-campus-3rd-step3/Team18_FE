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
  // 오른쪽은 ::before 화살표(⌵) 영역과 겹치지 않도록 여유를 둔다.
  padding: '10px 2.2rem 10px 10px',
  borderRadius: theme.radius.md,
  backgroundColor: disabled ? theme.colors.gray00 : theme.colors.bg,
  alignSelf: 'center',
  border: `1px solid ${theme.colors.gray200}`,
  minWidth: '9rem',
  boxSizing: 'border-box',
  // 선택된 라벨이 길어도 줄바꿈 없이 박스가 내용 폭만큼 늘어나도록 한다.
  whiteSpace: 'nowrap',

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
  // 가장 긴 옵션 기준으로 넓어지되 최소한 셀렉트 박스 폭은 유지한다.
  width: 'max-content',
  minWidth: '100%',
  boxSizing: 'border-box',
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
