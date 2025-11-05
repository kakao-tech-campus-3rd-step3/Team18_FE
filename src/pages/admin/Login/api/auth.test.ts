import { describe, it, expect, vi } from 'vitest';
import { apiInstance } from '@/api/initInstance';
import { postAuthCode, logoutUser } from './auth';
import type { LoginResponse } from './auth';

vi.mock('@/api/initInstance');

const mockedPost = vi.mocked(apiInstance.post);

describe('auth API 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('postAuthCode - 로그인 성공 응답 반환', async () => {
    const mockResponse: LoginResponse = {
      status: 'LOGIN_SUCCESS',
      accessToken: 'mockAccessToken',
      clubAndRoleList: [],
    };

    mockedPost.mockResolvedValueOnce({ data: mockResponse });

    const result = await postAuthCode('testAuthCode', new AbortController().signal);

    expect(result).toEqual(mockResponse);
    expect(mockedPost).toHaveBeenCalledWith(
      '/auth/kakao/login',
      { authorizationCode: 'testAuthCode' },
      expect.any(Object),
    );
  });

  it('postAuthCode - 회원가입이 필요한 경우(temporaryToken 응답)', async () => {
    const mockResponse: LoginResponse = {
      status: 'REGISTRATION_REQUIRED',
      temporaryToken: 'mockTempToken',
      clubAndRoleList: [],
    };

    mockedPost.mockResolvedValueOnce({ data: mockResponse });

    const result = await postAuthCode('tempAuthCode', new AbortController().signal);

    expect(result).toEqual(mockResponse);
    expect(result.status).toBe('REGISTRATION_REQUIRED');
    if (result.status === 'REGISTRATION_REQUIRED') {
      expect(result.temporaryToken).toBeDefined();
    }
  });

  it('logoutUser - 로그아웃 요청', async () => {
    const mockLogoutResponse = { data: { success: true } };
    mockedPost.mockResolvedValueOnce(mockLogoutResponse);

    const result = await logoutUser();

    expect(result).toEqual(mockLogoutResponse);
    expect(mockedPost).toHaveBeenCalledWith('/auth/logout', {});
  });
});
