import { useState } from 'react';
import { NAV_CONFIG } from '@/constants/navigation';
import { replaceRouteParams } from '@/utils/replaceRouteParams'; // ✅ 추가
import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';
import type { Role } from '@/types/navigation';

interface NavbarProps {
  role: Role;
}

export const Navigation = ({ role }: NavbarProps) => {
  const [currentRoute, setCurrentRoute] = useState('동아리움');
  const items = NAV_CONFIG[role];

  // TODO: 추후 context나 로그인 정보에서 가져오기
  const clubId = '1'; // 임시 값

  const handleItemClick = (label: React.ReactNode) => {
    if (typeof label === 'string') {
      setCurrentRoute(label);
    }
  };

  return (
    <NavigationContainer selectedItem={currentRoute}>
      {items.map((item) => {
        const path = item.to?.includes(':clubId')
          ? replaceRouteParams(item.to, { clubId })
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
