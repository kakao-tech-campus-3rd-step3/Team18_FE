/**
 * 서버 에러 응답(`error_code`, `message`, `detail`)을 보존하는 에러.
 * `Error`를 확장하므로 기존 `error.message` 사용처와 호환되며,
 * 호출부에서 `errorCode`로 분기가 필요한 경우에만 `isApiErrorCode`로 좁혀 사용한다.
 */
export class ApiError extends Error {
  readonly errorCode?: string;

  readonly status?: number;

  readonly detail?: string;

  constructor(
    message: string,
    options: { errorCode?: string; status?: number; detail?: string } = {},
  ) {
    super(message);
    this.name = 'ApiError';
    this.errorCode = options.errorCode;
    this.status = options.status;
    this.detail = options.detail;
  }
}

export const isApiErrorCode = (error: unknown, errorCode: string) =>
  error instanceof ApiError && error.errorCode === errorCode;
