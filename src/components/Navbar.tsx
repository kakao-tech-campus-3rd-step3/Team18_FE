import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

type Role = 'guest' | 'manager' | 'president';

interface NavItem {
  key: string;
  label: string;
  to?: string;
  href?: string;
  isLogo?: boolean;
  disableRouting?: boolean;
}

const NAV_CONFIG: Record<Role, NavItem[]> = {
  guest: [
    { key: 'logo', label: '동아리움', to: '/home', isLogo: true },
    { key: 'recruit', label: '모집일정', to: '/recruit' },
    { key: 'notice', label: '공지사항', to: '/notice' },
    { key: 'faq', label: 'FAQ', to: '/faq' },
  ],
  manager: [
    { key: 'logo', label: '동아리움', to: '/home', isLogo: true },
    // TODO: 운영진 네비게이션바 (미정)
  ],
  president: [
    { key: 'logo', label: '동아리움', disableRouting: true, isLogo: true },
    { key: 'applicants', label: '지원자관리', to: '/applicants' },
    { key: 'club', label: '동아리페이지관리', to: '/club' },
    { key: 'form', label: '지원폼관리', to: '/form' },
  ],
};

interface NavbarProps {
  role: Role;
}

const Navbar: React.FC<NavbarProps> = ({ role }) => {
  const items = NAV_CONFIG[role];

  return (
    <NavContainer>
      {items.map((item) => {
        if (item.isLogo) {
          return item.disableRouting ? (
            <LogoText key={item.key}>{item.label}</LogoText>
          ) : (
            <LogoLink key={item.key} to={item.to!}>
              {item.label}
            </LogoLink>
          );
        }

        return (
          <StyledLink key={item.key} to={item.to || '#'}>
            {item.label}
          </StyledLink>
        );
      })}
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav(({ theme }) => ({
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

const LogoText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.primary,
  cursor: 'default',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.colors.primary700,
  },
}));
