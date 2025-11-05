import { describe, it, expect, vi } from 'vitest';
import { apiInstance } from '@/api/initInstance';
import { postAuthCode } from './auth';
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
});
