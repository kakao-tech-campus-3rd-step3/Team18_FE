export type Role = 'guest' | 'manager' | 'president';

export type NavItemData = {
  key: string;
  label: string;
  to?: string;
  isLogo?: boolean;
};
