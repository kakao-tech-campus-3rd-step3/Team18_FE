import styled from '@emotion/styled';
import { useState } from 'react';
import { Logo } from '@/pages/admin/Login/component/Logo';
import { useAuth } from '@/providers/auth';
import { theme } from '@/styles/theme';
import { ClubSelector } from './components/ClubSelector';
import { useNavigation } from './hooks/useNavigation';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const { leftItems, rightItem, getCurrentRoute, currentRoute, handleItemClick } = useNavigation();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileItemClick = (key: string) => {
    handleItemClick(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <NavigationContainer
      selectedItem={currentRoute}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMobileMenu={toggleMobileMenu}
    >
      <LeftMenu>
        {leftItems.map((item) => {
          const path = getCurrentRoute(item);
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
            to={rightItem.to}
            isLogo={rightItem.isLogo}
            selected={currentRoute === rightItem.to}
            onClick={() => handleItemClick(rightItem.key)}
          >
            {rightItem.label}
          </NavigationItem>
        )}
      </RightMenu>
    </NavigationContainer>
  );
};

const LeftMenu = styled.div({
  display: 'flex',
  gap: '4rem',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
  },
});
const RightMenu = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    marginLeft: 0,
    width: '100%',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  },
});
