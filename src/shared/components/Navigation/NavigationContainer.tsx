import type { ReactNode } from 'react';
import styled from '@emotion/styled';

type NavigationContainerProps = {
  children: ReactNode;
};

export const NavigationContainer = ({ children }: NavigationContainerProps) => {
  return <NavContainer>{children}</NavContainer>;
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
  position: 'relative',
  '& a[href="/login"]': {
    marginLeft: 'auto',
  },
}));
