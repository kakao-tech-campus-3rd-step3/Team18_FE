import { useContext, useState } from 'react';
import { NAV_CONFIG } from '@/constants/navigation';
import { AuthContext } from '@/providers/auth';
import { replaceRouteParams } from '@/utils/replaceRouteParams';
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState('동아리움');
  const { user } = useContext(AuthContext);
  const items = NAV_CONFIG[user?.role ?? 'guest'];
  const { logout } = useContext(AuthContext);

  const items = NAV_CONFIG[user?.role ?? 'guest'];

  const leftItems = items.filter((item) => !['login', 'logout'].includes(item.key));
  const rightItem = items.find((item) => ['login', 'logout'].includes(item.key));

  const handleItemClick = (label: React.ReactNode) => {
    if (typeof label === 'string') {
      setCurrentRoute(label);
    }
    if (label === '로그아웃') {
      logout();
      return;
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
              selected={currentRoute === location.pathname}
              onClick={() => {
                if (item.label == '로그아웃') {
                  logout();
                } else {
                  handleItemClick(item.label);
                }
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
