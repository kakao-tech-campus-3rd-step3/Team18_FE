export const ROLE = {
  CLUB_EXECUTIVE: 'CLUB_EXECUTIVE',
  CLUB_ADMIN: 'CLUB_ADMIN',
  NONE: null,
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];

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
