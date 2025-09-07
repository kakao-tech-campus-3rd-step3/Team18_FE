import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { NavItemData } from '@/types/navigation';

type Props = { children: ReactNode } & Pick<NavItemData, 'to' | 'isLogo'>;

export const NavigationItem = ({ to, children, isLogo }: Props) => {
  if (isLogo) return <LogoLink to={to || '#'}>{children}</LogoLink>;

  return <NavLink to={to || '#'}>{children}</NavLink>;
};

export const NavContainer = styled.nav(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.bg,
  boxShadow: theme.shadow.sm,
  padding: '20px 56px',
  display: 'flex',
  alignItems: 'center',
  gap: 88,
  zIndex: theme.zIndex.header,
}));

const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.primary,
  textDecoration: 'none',
  cursor: 'pointer',
}));

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.colors.primary700,
  },
}));
