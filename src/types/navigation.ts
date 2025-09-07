export type Role = 'guest' | 'manager' | 'president';

export type NavItemData = {
  key: string;
  label: string;
  to?: string;
  isLogo?: boolean;
};

export type NavRoute = [
  '동아리움',
  '모집일정',
  '공지사항',
  'FAQ',
  '지원자관리',
  '동아리페이지관리',
  '지원폼관리',
];
