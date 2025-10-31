export type Role = 'guest' | 'admin';

export type NavItemData = {
  key: string;
  label: string;
  to?: string;
  isLogo?: boolean;
};

export type NavRoute = [
  '동아리움',
  '공지사항',
  'FAQ',
  '지원자관리',
  '동아리페이지관리',
  '지원폼관리',
];
