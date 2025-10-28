import styled from '@emotion/styled';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_CONFIG } from '@/constants/navigation';
import { AuthContext } from '@/providers/auth';
import { replaceRouteParams } from '@/utils/replaceRouteParams';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';
import type { NavItemData } from '@/types/navigation';

export const Navigation = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const items: NavItemData[] = NAV_CONFIG[user?.role ?? 'guest'];

  const leftItems = items.filter((item) => !['login', 'logout'].includes(item.key));
  const rightItem = items.find((item) => ['login', 'logout'].includes(item.key));

  const getCurrentRoute = (item: NavItemData) => {
    if (item.to?.includes(':clubId') && user?.clubId?.length) {
      return replaceRouteParams(item.to, { clubId: user.clubId[0] });
    }
    return item.to || '#';
  };

  const handleItemClick = (key: string) => {
    if (key == 'logout') {
      logout();
    }
  };

  return (
    <NavigationContainer selectedItem={currentRoute}>
      <LeftMenu>
        {leftItems.map((item) => {
          const path =
            item.to?.includes(':clubId') && user?.clubId?.length
              ? replaceRouteParams(item.to, { clubId: user.clubId[0] })
              : item.to;

          return (
            <NavigationItem
              key={item.key}
              to={path}
              isLogo={item.isLogo}
              selected={currentRoute.startsWith(getCurrentRoute(item))}
              onClick={() => {
                handleItemClick(item.key);
              }}
            >
              {item.label}
            </NavigationItem>
          );
        })}
      </LeftMenu>

      <RightMenu>
        {rightItem && (
          <NavigationItem
            key={rightItem.key}
            to={rightItem.to}
            isLogo={rightItem.isLogo}
            selected={location.pathname === rightItem.to}
            onClick={() => {
              if (rightItem.key === 'logout') logout();
            }}
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
});
