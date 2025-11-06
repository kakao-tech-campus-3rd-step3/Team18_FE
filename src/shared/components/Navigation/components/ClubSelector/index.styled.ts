import styled from '@emotion/styled';
import { FiChevronDown } from 'react-icons/fi';

export const Wrapper = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  color: theme.colors.textPrimary,
}));

export const Selected = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontWeight: theme.font.weight.medium,
  fontSize: theme.font.size.lg,
  color: theme.colors.gray400,
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.colors.gray600,
  },
}));

export const ChevronDownIcon = styled(FiChevronDown)(({ theme }) => ({
  color: theme.colors.gray400,
  transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
  [`${Selected}:hover &`]: {
    color: theme.colors.gray500,
  },
}));

export const DropdownMenu = styled.ul(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 6px)',
  left: 0,
  backgroundColor: theme.colors.bg,
  boxShadow: theme.shadow.md,
  borderRadius: theme.radius.md,
  overflow: 'hidden',
  minWidth: 140,
  zIndex: theme.zIndex.header,
  opacity: 0,
  transform: 'translateY(-6px)',
  animation: 'fadeDown 0.2s ease-in-out forwards',
  '@keyframes fadeDown': {
    from: { opacity: 0, transform: 'translateY(-6px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

export const DropdownItem = styled.li<{ selected?: boolean }>(({ theme, selected }) => ({
  padding: '10px 14px',
  cursor: 'pointer',
  backgroundColor: selected ? theme.colors.gray100 : theme.colors.bg,
  color: selected ? theme.colors.textPrimary : theme.colors.gray700,
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.colors.gray200,
  },
}));

export const EmptyWrapper = styled.div({
  textAlign: 'center',
  padding: '8px 0',
});
