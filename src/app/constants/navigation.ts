import type { Role, NavItemData } from '@/shared/types/navigation';

export const NAV_CONFIG: Record<Role, NavItemData[]> = {
  guest: [
    { key: 'logo', label: '동아리움', to: '/', isLogo: true },
    { key: 'notices', label: '공지사항', to: '/notices' },
    { key: 'login', label: '관리자 로그인', to: '/login' },
  ],
  admin: [
    { key: 'logo', label: '동아리움', to: '/', isLogo: true },
    { key: 'notices', label: '공지사항', to: '/notices' },
    { key: 'applicants', label: '지원자관리', to: '/admin/clubs/dashboard' },
    { key: 'clubEdit', label: '동아리페이지관리', to: '/admin/clubs/:clubId/edit' },
    { key: 'form', label: '지원폼관리', to: '/admin/clubs/:clubId/application/form/create' },
    { key: 'logout', label: '로그아웃', to: '#' },
  ],
};
