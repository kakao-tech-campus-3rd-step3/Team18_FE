import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

type NavigationContainerProps = {
  children: ReactNode;
  selectedItem: ReactNode;
};

export const NavigationContainer = ({ children, selectedItem }: NavigationContainerProps) => {
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
    <NavContainer ref={navRef}>
      {children}
      <UnderlineIndicator style={underlineStyle} visible={!!selectedItem && selectedItem !== ''} />
    </NavContainer>
  );
};

const NavContainer = styled.nav(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.bg,
  boxShadow: theme.shadow.sm,
  padding: '20px 56px',
  display: 'flex',
  alignItems: 'center',
  gap: 88,
  zIndex: theme.zIndex.header,
  position: 'relative',
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
}));
