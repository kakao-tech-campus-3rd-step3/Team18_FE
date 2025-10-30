import styled from '@emotion/styled';
import { replaceRouteParams } from '@/utils/replaceRouteParams';
import { useNavigation } from './hooks/useNavigation';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const { user, logout, leftItems, rightItem, getCurrentRoute, currentRoute } = useNavigation();

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
});
