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
      {items.map((item) => {
        const path =
          item.to?.includes(':clubId') && user?.clubId?.length
            ? replaceRouteParams(item.to, { clubId: user.clubId[0] })
            : item.to;

        return (
          <NavigationItem
            key={item.key}
            to={path}
            isLogo={item.isLogo}
            selected={currentRoute === item.label}
            onClick={handleItemClick}
          >
            {item.label}
          </NavigationItem>
        );
      })}
    </NavigationContainer>
  );
};
