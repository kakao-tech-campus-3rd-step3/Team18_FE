import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import { theme } from '@/styles/theme';

type NavigationContainerProps = {
  children: ReactNode;
  selectedItem: ReactNode;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export const NavigationContainer = ({
  children,
  selectedItem,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: NavigationContainerProps) => {
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const selectedLink = navRef.current.querySelector('[data-selected="true"]') as HTMLElement;
    if (selectedLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = selectedLink.getBoundingClientRect();

      setUnderlineStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    } else {
      setUnderlineStyle({
        left: 0,
        width: 0,
      });
    }
  }, [selectedItem]);

  return (
    <>
      <NavContainer ref={navRef}>
        <HamburgerButton onClick={onToggleMobileMenu}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerButton>

        <DesktopNav>{children}</DesktopNav>

        <UnderlineIndicator
          style={underlineStyle}
          visible={!!selectedItem && selectedItem !== ''}
        />
      </NavContainer>

      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={onToggleMobileMenu} />

      <MobileMenuDrawer isOpen={isMobileMenuOpen}>
        <CloseButton onClick={onToggleMobileMenu}>✕</CloseButton>
        {children}
      </MobileMenuDrawer>
    </>
  );
};

const NavContainer = styled.nav(({ theme }) => ({
  width: '100%',
  padding: '20px 5vw',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4rem',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.bg,
  boxShadow: theme.shadow.sm,
  zIndex: theme.zIndex.header,
  position: 'sticky',
  top: 0,

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    zIndex: 1001,
    padding: '15px 5vw',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
}));

const HamburgerButton = styled.button(({ theme }) => ({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '28px',
  height: '28px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: theme.zIndex.header + 2,
  marginLeft: 'auto',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'flex',
  },
}));

const HamburgerLine = styled.div(({ theme }) => ({
  width: '100%',
  height: '3px',
  backgroundColor: theme.colors.primary,
  borderRadius: '2px',
  transition: 'all 0.3s ease',
}));

const DesktopNav = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '4rem',
  flex: 1,

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'none',
  },
});

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  display: 'none',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transition: 'opacity 0.3s ease',
    zIndex: 1000,
  },
}));

const MobileMenuDrawer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: 'none',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    width: '80%',
    maxWidth: '300px',
    height: '100%',
    backgroundColor: theme.colors.bg,
    boxShadow: theme.shadow.md,
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    zIndex: 1001,
    padding: '60px 30px 30px',
    gap: '2rem',
    overflowY: 'auto',
  },
}));

const CloseButton = styled.button(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'transparent',
  border: 'none',
  fontSize: '28px',
  color: theme.colors.textPrimary,
  cursor: 'pointer',
  padding: '5px',
  lineHeight: 1,
  transition: 'color 0.2s ease',

  '&:hover': {
    color: theme.colors.primary,
  },
}));

const UnderlineIndicator = styled.div<{ visible: boolean }>(({ theme, visible }) => ({
  position: 'absolute',
  bottom: 0,
  height: '3px',
  backgroundColor: theme.colors.primary,
  borderRadius: '2px',
  transition:
    'left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.3s ease',
  zIndex: 1,
  opacity: visible ? 1 : 0,

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'none',
  },
}));
