import styled from '@emotion/styled';
import { useNavigation } from './hooks/useNavigation';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const { leftItems, rightItem, getCurrentRoute, currentRoute, handleItemClick } = useNavigation();

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
});
