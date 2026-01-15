import styled from '@emotion/styled';

export const FilterTabsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '32px 1.5rem 24px 1.5rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '12px',
    padding: '32px 1rem 20px 1rem',
  },
}));

export const FilterRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '48px',

  '@media (max-width: 672px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
  },
});

export const TabsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '8px',
    width: '100%',
  },
  '@media (max-width: 409px)': {
    gap: '6px',
  },
}));

type TabButtonProps = {
  isSelected: boolean;
};

export const TabButton = styled.button<TabButtonProps>(({ theme, isSelected }) => ({
  position: 'relative',
  padding: '10px 20px',
  backgroundColor: 'transparent',
  border: 'none',
  color: isSelected ? theme.colors.textPrimary : theme.colors.textSecondary,
  fontSize: theme.font.size.base,
  fontWeight: isSelected ? theme.font.weight.medium : theme.font.weight.regular,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  '&::after': isSelected
    ? {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '3px',
        backgroundColor: theme.colors.primary,
        borderRadius: '2px',
      }
    : {},

  '&:hover': {
    color: theme.colors.primary,
  },

  '&:active': {
    transform: 'scale(0.98)',
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '8px 16px',
    fontSize: theme.font.size.sm,
  },
  '@media (max-width: 400px)': {
    padding: '8px 11px',
    fontSize: theme.font.size.sm,
  },
}));

export const DropdownWrapper = styled.div({
  position: 'relative',
  minWidth: '120px',
  flexShrink: 0,
});

export const DropdownButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '7px 9px',
  backgroundColor: theme.colors.bg,
  border: `1.5px solid ${theme.colors.border}`,
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray400,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  gap: '8px',

  '&:hover': {
    borderColor: theme.colors.gray300,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: theme.font.size.xs,
    padding: '8px 12px',
  },
}));

type DropdownIconProps = {
  isOpen: boolean;
};

export const DropdownIcon = styled.span<DropdownIconProps>(({ theme, isOpen }) => ({
  fontSize: '10px',
  transition: 'transform 0.2s ease',
  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  color: theme.colors.gray400,
}));

export const DropdownMenu = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  right: 0,
  backgroundColor: theme.colors.bg,
  border: `1.5px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.md,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  zIndex: 100,
  overflow: 'hidden',
}));

type DropdownItemProps = {
  isSelected: boolean;
};

export const DropdownItem = styled.div<DropdownItemProps>(({ theme, isSelected }) => ({
  padding: '10px 16px',
  fontSize: theme.font.size.sm,
  fontWeight: isSelected ? theme.font.weight.medium : theme.font.weight.regular,
  color: isSelected ? theme.colors.primary : theme.colors.textPrimary,
  backgroundColor: isSelected ? theme.colors.primary100 : 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: theme.colors.bgGreen,
    color: theme.colors.primary,
  },

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: theme.font.size.xs,
    padding: '8px 12px',
  },
}));
