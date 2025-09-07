import { NavContainer, NavigationItem } from './NavigationItem';
import { NAV_CONFIG } from '@/constants/navigation';
import type { Role } from '@/types/navigation';

interface NavbarProps {
  role: Role;
}

export const Navigation = ({ role }: NavbarProps) => {
  const items = NAV_CONFIG[role];

  return (
    <NavContainer>
      {items.map((item) => (
        <NavigationItem key={item.key} to={item.to} isLogo={item.isLogo}>
          {item.label}
        </NavigationItem>
      ))}
    </NavContainer>
  );
};
