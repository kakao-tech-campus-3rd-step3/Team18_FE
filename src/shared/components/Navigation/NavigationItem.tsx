import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { NavItemData } from '@/types/navigation';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  selected: boolean;
} & Pick<NavItemData, 'to' | 'isLogo'>;

export const NavigationItem = ({ to, children, isLogo, onClick = () => {}, selected }: Props) => {
  if (isLogo) return <LogoLink to={to || '#'}>{children}</LogoLink>;

  return (
    <NavLink to={to || '#'} selected={selected} onClick={onClick} data-selected={selected}>
      {children}
    </NavLink>
  );
};

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.primary,
  textDecoration: 'none',
  cursor: 'pointer',
}));

const NavLink = styled(Link)<{ selected: boolean }>(({ theme, selected }) => ({
  fontSize: theme.font.size.base,
  textDecoration: 'none',
  transition: 'color 0.2s, font-weight 0.2s',
  color: selected ? theme.colors.primary : theme.colors.textPrimary,
  fontWeight: selected ? theme.font.weight.bold : theme.font.weight.medium,
  padding: '8px 0',
  position: 'relative',

  '&:hover': {
    fontWeight: selected ? theme.font.weight.medium : theme.font.weight.bold,
  },
}));
