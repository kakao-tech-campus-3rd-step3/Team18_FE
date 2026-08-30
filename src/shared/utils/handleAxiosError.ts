import { ApiError } from './ApiError';

type ErrorResponseData = { error_code?: string; message?: string; detail?: string };

export const handleAxiosError = (
  error: unknown,
  defaultMessage?: string,
  { useDetail = false }: { useDetail?: boolean } = {},
): never => {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as {
      response?: { status?: number; data?: ErrorResponseData };
    };
    const data = axiosError.response?.data;
    const options = {
      errorCode: data?.error_code,
      status: axiosError.response?.status,
      detail: data?.detail,
    };

    if (useDetail) {
      const detail = data?.detail;
      if (typeof detail === 'string') {
        throw new ApiError(detail.split(': ').pop() ?? detail, options);
      }
    }

    /** 메시지가 없으면 빈 문자열로 두어 호출부의 `error.message || 기본 문구` 대체가 기존처럼 동작하게 한다. */
    const message = data?.message || defaultMessage || '';
    throw new ApiError(message, options);
  }
  throw new Error('알 수 없는 오류가 발생했습니다.');
};
