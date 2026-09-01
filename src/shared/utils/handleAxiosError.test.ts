import { describe, it, expect } from 'vitest';
import { ApiError, isApiErrorCode } from './ApiError';
import { handleAxiosError } from './handleAxiosError';

const createAxiosError = (status: number, data: Record<string, string>) => ({
  response: { status, data },
});

describe('handleAxiosError', () => {
  it('서버 응답의 error_code·status·detail을 보존한 ApiError를 던진다', () => {
    const error = createAxiosError(409, {
      error_code: 'IDEMPOTENCY_KEY_CONFLICT',
      message: '동일한 Idempotency-Key가 다른 결과 발표 요청에 사용되었습니다.',
    });

    expect(() => handleAxiosError(error)).toThrowError(ApiError);
    try {
      handleAxiosError(error);
    } catch (thrown) {
      expect(thrown).toBeInstanceOf(Error);
      expect((thrown as ApiError).message).toBe(
        '동일한 Idempotency-Key가 다른 결과 발표 요청에 사용되었습니다.',
      );
      expect((thrown as ApiError).errorCode).toBe('IDEMPOTENCY_KEY_CONFLICT');
      expect((thrown as ApiError).status).toBe(409);
      expect(isApiErrorCode(thrown, 'IDEMPOTENCY_KEY_CONFLICT')).toBe(true);
      expect(isApiErrorCode(thrown, 'TEMPORARY_SERVER_CONFLICT')).toBe(false);
    }
  });

  it('useDetail 옵션이면 detail의 마지막 구간을 메시지로 쓰되 error_code는 유지한다', () => {
    const error = createAxiosError(400, {
      error_code: 'INVALID_INPUT_VALUE',
      message: '입력 값이 올바르지 않습니다.',
      detail: 'channels: 알림 채널은 하나 이상 선택해야 합니다.',
    });

    try {
      handleAxiosError(error, undefined, { useDetail: true });
    } catch (thrown) {
      expect((thrown as ApiError).message).toBe('알림 채널은 하나 이상 선택해야 합니다.');
      expect((thrown as ApiError).errorCode).toBe('INVALID_INPUT_VALUE');
    }
  });

  it('메시지가 없으면 빈 메시지로 던져 호출부의 기본 문구 대체가 동작한다', () => {
    expect(() => handleAxiosError(createAxiosError(500, {}))).toThrowError('');
    expect(() => handleAxiosError(createAxiosError(500, {}), '기본 문구')).toThrowError(
      '기본 문구',
    );
  });

  it('axios 응답이 아닌 에러는 일반 Error로 던진다', () => {
    expect(() => handleAxiosError(new TypeError('network'))).toThrowError(
      '알 수 없는 오류가 발생했습니다.',
    );
    expect(isApiErrorCode(new Error('x'), 'ANY')).toBe(false);
  });
});
