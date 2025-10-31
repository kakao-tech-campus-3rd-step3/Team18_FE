import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_CONFIG } from '@/app/constants/navigation';
import { AuthContext } from '@/providers/auth';
import { replaceRouteParams } from '@/shared/utils/replaceRouteParams';
import type { NavItemData } from '@/shared/types/navigation';

export const useNavigation = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const currentRoute = location.pathname;

  const items: NavItemData[] = NAV_CONFIG[user?.role ?? 'guest'];
  const leftItems = items.filter((item) => !['login', 'logout'].includes(item.key));
  const rightItem = items.find((item) => ['login', 'logout'].includes(item.key));

  const getCurrentRoute = (item: NavItemData) => {
    if (item.to?.includes(':clubId') && user?.clubId) {
      return replaceRouteParams(item.to, { clubId: user.clubId });
    }
    return item.to || '#';
  };

  const handleItemClick = (key: string) => {
    if (key === 'logout') {
      logout();
    }
  };

  return { user, logout, leftItems, rightItem, getCurrentRoute, currentRoute, handleItemClick };
};
