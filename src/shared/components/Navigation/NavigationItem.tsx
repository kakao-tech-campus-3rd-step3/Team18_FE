import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { NavItemData } from '@/types/navigation';

type Props = {
  children: ReactNode;
  onClick: (children: React.ReactNode) => void;
} & Pick<NavItemData, 'to' | 'isLogo'>;

export const NavigationItem = ({ to, children, isLogo, onClick }: Props) => {
  if (isLogo)
    return (
      <LogoLink to={to || '#'} onClick={() => onClick(children)}>
        {children}
      </LogoLink>
    );

  return (
    <NavLink to={to || '#'} onClick={() => onClick(children)}>
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

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: theme.font.size.base,
  textDecoration: 'none',
  transition: 'color 0.2s, font-weight 0.2s',
  color: theme.colors.textPrimary,
  fontWeight: theme.font.weight.medium,
  padding: '8px 0',
  position: 'relative',

  '&:hover': {
    fontWeight: theme.font.weight.bold,
  },
}));
