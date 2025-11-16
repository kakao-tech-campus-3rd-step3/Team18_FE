import styled from '@emotion/styled';
import { useState } from 'react';
import { useAuth } from '@/app/providers/auth';
import { Logo } from '@/pages/admin/Login/component/Logo';
import { ClubSelector } from './components/ClubSelector';
import { useNavigation } from './hooks/useNavigation';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const { leftItems, rightItem, getCurrentRoute, currentRoute, handleLogoutClick } =
    useNavigation();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const logoItem = leftItems.find((item) => item.isLogo);

  const handleMobileItemClick = (key: string) => {
    handleLogoutClick(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <NavigationContainer
      selectedItem={currentRoute}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMobileMenu={toggleMobileMenu}
      logo={logoItem ? <Logo /> : undefined}
    >
      <LeftMenu>
        {leftItems.map((item) => {
          const path = getCurrentRoute(item) || '/';
          return (
            <NavigationItem
              key={item.key}
              to={path}
              isLogo={item.isLogo}
              selected={currentRoute.startsWith(path)}
              onClick={() => !item.isLogo && handleMobileItemClick(item.key)}
            >
              {item.isLogo ? <Logo /> : item.label}
            </NavigationItem>
          );
        })}
      </LeftMenu>

      <RightMenu>
        {user && <ClubSelector />}

        {rightItem && (
          <NavigationItem
            key={rightItem.key}
            to={rightItem.to || '/'}
            isLogo={rightItem.isLogo}
            selected={currentRoute === rightItem.to}
            onClick={() => {
              handleLogoutClick(rightItem.key);
              setIsMobileMenuOpen(false);
            }}
          >
            {rightItem.label}
          </NavigationItem>
        )}
      </RightMenu>
    </NavigationContainer>
  );
};

const LeftMenu = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  minWidth: 0,
  flex: '0 1 auto',

  '@media (max-width: 1300px)': {
    gap: '1.5rem',
  },

  '@media (max-width: 1100px)': {
    gap: '1rem',
  },

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    alignItems: 'flex-start',
  },
}));

const RightMenu = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flex: '0 0 auto',
  minWidth: 0,

  '@media (max-width: 1300px)': {
    gap: '1rem',
  },

  '@media (max-width: 1100px)': {
    gap: '0.8rem',
  },

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    marginLeft: 0,
    width: '100%',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));
