import { NavigationContainer } from './NavigationContainer';
import { NavigationItem } from './NavigationItem';
import { NAV_CONFIG } from '@/constants/navigation';
import type { Role } from '@/types/navigation';
import { useState } from 'react';

interface NavbarProps {
  role: Role;
}

export const Navigation = ({ role }: NavbarProps) => {
  const [currentRoute, setCurrentRoute] = useState('동아리움');
  const items = NAV_CONFIG[role];

  const handleItemClick = (label: React.ReactNode) => {
    if (typeof label === 'string') {
      setCurrentRoute(label);
    }
  };

  return (
    <NavigationContainer selectedItem={currentRoute}>
      {items.map((item) => (
        <NavigationItem
          key={item.key}
          to={item.to}
          isLogo={item.isLogo}
          selected={currentRoute === item.label}
          onClick={handleItemClick}
        >
          {item.label}
        </NavigationItem>
      ))}
    </NavigationContainer>
  );
};
