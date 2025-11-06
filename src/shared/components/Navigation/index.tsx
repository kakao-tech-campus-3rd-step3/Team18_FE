import styled from '@emotion/styled';
import { Logo } from '@/pages/admin/Login/component/Logo';
import { useAuth } from '@/providers/auth';
import { ClubSelector } from './components/ClubSelector';
import { useNavigation } from './hooks/useNavigation';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const { leftItems, rightItem, getCurrentRoute, currentRoute, handleItemClick } = useNavigation();
  const { user } = useAuth();

  return (
    <NavigationContainer selectedItem={currentRoute}>
      <LeftMenu>
        {leftItems.map((item) => {
          const path = getCurrentRoute(item);
          return (
            <NavigationItem
              key={item.key}
              to={path}
              isLogo={item.isLogo}
              selected={currentRoute.startsWith(path)}
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
});

const RightMenu = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});
