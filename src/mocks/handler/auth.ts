import { http, HttpResponse } from 'msw';
import type { LoginResponse } from '@/pages/admin/Login/api/auth';

interface AuthRequest {
  authorizationCode: string;
}
export const authHandlers = [
  http.post('/api/auth/kakao/login', async ({ request }) => {
    const { authorizationCode } = (await request.json()) as AuthRequest;

    if (authorizationCode === 'VALID_CODE') {
      const response: LoginResponse = {
        status: 'LOGIN_SUCCESS',
        accessToken: 'mock-access-token',
        clubListInfo: [],
      };
      return HttpResponse.json(response, { status: 200 });
    }

    if (authorizationCode === 'REGISTRATION_REQUIRED') {
      const response: LoginResponse = {
        status: 'REGISTRATION_REQUIRED',
        temporaryToken: 'mock-temporary-token',
        clubListInfo: [],
      };
      return HttpResponse.json(response, { status: 200 });
    }

    return HttpResponse.json({ message: '코드 에러' }, { status: 400 });
  }),

  http.post('/api/auth/logout', () => {
    return HttpResponse.json({ message: '로그아웃 성공' }, { status: 200 });
  }),
];
