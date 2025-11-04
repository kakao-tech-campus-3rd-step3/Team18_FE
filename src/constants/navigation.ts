import { type Role, type NavItemData, ROLE } from '@/types/navigation';

export const getNavItems = (role: Role): NavItemData[] => {
  const commonItems: NavItemData[] = [
    { key: 'logo', label: '동아리움', to: '/', isLogo: true },
    { key: 'notices', label: '공지 사항', to: '/notices' },
  ];

  if (role === ROLE.CLUB_MEMBER || role === ROLE.APPLICANT) {
    return [...commonItems, { key: 'logout', label: '로그아웃', to: '#' }];
  }

  if (role === ROLE.CLUB_ADMIN || ROLE.CLUB_EXECUTIVE) {
    return [
      ...commonItems,
      { key: 'applicants', label: '지원자관리', to: '/admin/clubs/:clubId/dashboard' },
      { key: 'clubEdit', label: '동아리페이지관리', to: '/admin/clubs/:clubId/edit' },
      { key: 'form', label: '지원폼관리', to: '/admin/clubs/:clubId/application/form/create' },
      { key: 'logout', label: '로그아웃', to: '#' },
    ];
  }
  return [...commonItems, { key: 'login', label: '관리자 로그인', to: '/login' }];
};
