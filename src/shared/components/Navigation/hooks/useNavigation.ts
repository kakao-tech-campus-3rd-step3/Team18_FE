import { useLocation } from 'react-router-dom';
import { getNavItems } from '@/app/constants/navigation';
import { useAuth } from '@/app/providers/auth';
import { type NavItemData } from '@/shared/types/navigation';
import { replaceRouteParams } from '@/shared/utils/replaceRouteParams';

export const useNavigation = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentRoute = location.pathname;

  const items: NavItemData[] = getNavItems(user?.role ?? null);
  const leftItems = items.filter((item) => !['login', 'logout'].includes(item.key));
  const rightItem = items.find((item) => ['login', 'logout'].includes(item.key));

  const getCurrentRoute = (item: NavItemData) => {
    if (item.to?.includes(':clubId') && user?.clubId) {
      return replaceRouteParams(item.to, { clubId: user.clubId });
    }
    return item.to || '#';
  };

  const handleLogoutClick = (key: string) => {
    if (key === 'logout') {
      logout();
    }
  };

  return { user, logout, leftItems, rightItem, getCurrentRoute, currentRoute, handleLogoutClick };
};
