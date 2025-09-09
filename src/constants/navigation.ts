import type { Role, NavItemData } from '@/types/navigation';
import { ROUTE_PATH } from '@/pages/Routes';

export const NAV_CONFIG: Record<Role, NavItemData[]> = {
  guest: [
    { key: 'logo', label: '동아리움', to: ROUTE_PATH.MAIN, isLogo: true },
    { key: 'recruit', label: '모집일정', to: '/recruit' },
    { key: 'notice', label: '공지사항', to: '/notice' },
    { key: 'faq', label: 'FAQ', to: '/faq' },
  ],
  manager: [
    { key: 'logo', label: '동아리움', to: '/home', isLogo: true },
    // TODO: 운영진 네비게이션바 (미정)
  ],
  president: [
    { key: 'logo', label: '동아리움', to: ROUTE_PATH.MAIN, isLogo: true },
    { key: 'applicants', label: '지원자관리', to: ROUTE_PATH.DASHBOARD },
    { key: 'club', label: '동아리페이지관리', to: '/club' },
    { key: 'form', label: '지원폼관리', to: '/form' },
  ],
};
