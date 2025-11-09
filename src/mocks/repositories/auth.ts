import type { LoginResponse } from '@/pages/admin/Login/api/auth';
import type { Role } from '@/types/navigation';

const mockClubListInfo: { clubId: number; clubName: string; role: Role }[] = [
  {
    clubId: 1,
    clubName: '인터엑스',
    role: 'CLUB_ADMIN',
  },
  {
    clubId: 3,
    clubName: '코드마스터',
    role: 'CLUB_ADMIN',
  },
  {
    clubId: 5,
    clubName: '아트픽',
    role: 'CLUB_ADMIN',
  },
] as const;

export const authRepository = {
  getLoginSuccessResponse: (): LoginResponse => ({
    status: 'LOGIN_SUCCESS',
    accessToken: 'mock-access-token',
    userId: 100,
    clubAndRoleList: mockClubListInfo,
  }),

  getRegistrationRequiredResponse: (): LoginResponse => ({
    status: 'REGISTRATION_REQUIRED',
    temporaryToken: 'mock-temporary-token',
    clubAndRoleList: [],
  }),
};
