import type { Role, NavItemData } from '@/types/navigation';

export const NAV_CONFIG: Record<Role, NavItemData[]> = {
  guest: [
    { key: 'logo', label: '동아리움', to: '/', isLogo: true },
    { key: 'notice', label: '공지사항', to: '/notice' },
  ],
  manager: [
    { key: 'logo', label: '동아리움', to: '/home', isLogo: true },
    // TODO: 운영진 네비게이션바 (미정)
  ],
  president: [
    { key: 'logo', label: '동아리움', to: '/', isLogo: true },
    { key: 'applicants', label: '지원자관리', to: '/admin/clubs/dashboard' },
    { key: 'clubEdit', label: '동아리페이지관리', to: '/admin/clubs/:clubId/edit' },
    { key: 'form', label: '지원폼관리', to: '/admin/clubs/:clubId/application/form/create' },
    { key: 'login', label: '관리자 로그인', to: '/login' },
  ],
};
