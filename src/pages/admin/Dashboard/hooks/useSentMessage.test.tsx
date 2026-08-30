import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';
import { ApiError } from '@/shared/utils/ApiError';
import { createRequestFingerprint, shouldRetrySendResult, useSentMessage } from './useSentMessage';
import type { SendResultRequest } from '@/pages/admin/Dashboard/types/dashboard';

vi.mock('@/pages/admin/Dashboard/api/sentMessage');
vi.mock('@/shared/utils/toast', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const mockedSentMessage = vi.mocked(sentMessage);

const BODY: SendResultRequest = { message: '안내', channels: ['EMAIL', 'SMS'] };

const sentKeys = () => mockedSentMessage.mock.calls.map((call) => call[3]);

const renderSentMessage = () => {
  const queryClient = new QueryClient({
    defaultOptions: { mutations: { retryDelay: 0 } },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return renderHook(() => useSentMessage(1, '서류'), { wrapper });
};

describe('createRequestFingerprint', () => {
  it('채널 순서만 다른 요청은 같은 요청으로 본다', () => {
    const a = createRequestFingerprint('서류', { message: 'm', channels: ['EMAIL', 'SMS'] });
    const b = createRequestFingerprint('서류', { message: 'm', channels: ['SMS', 'EMAIL'] });
    expect(a).toBe(b);
  });

  it('전형·메시지·채널 중 하나라도 다르면 다른 요청이다', () => {
    const base = createRequestFingerprint('서류', BODY);
    expect(createRequestFingerprint('면접', BODY)).not.toBe(base);
    expect(createRequestFingerprint('서류', { ...BODY, message: '다른 안내' })).not.toBe(base);
    expect(createRequestFingerprint('서류', { ...BODY, channels: ['EMAIL'] })).not.toBe(base);
  });
});

describe('shouldRetrySendResult', () => {
  const temporaryConflict = new ApiError('잠시 후', { errorCode: 'TEMPORARY_SERVER_CONFLICT' });

  it('TEMPORARY_SERVER_CONFLICT만 최대 2회 재시도한다', () => {
    expect(shouldRetrySendResult(0, temporaryConflict)).toBe(true);
    expect(shouldRetrySendResult(1, temporaryConflict)).toBe(true);
    expect(shouldRetrySendResult(2, temporaryConflict)).toBe(false);
  });

  it('키 충돌·입력 오류·일반 에러는 재시도하지 않는다', () => {
    expect(
      shouldRetrySendResult(0, new ApiError('충돌', { errorCode: 'IDEMPOTENCY_KEY_CONFLICT' })),
    ).toBe(false);
    expect(
      shouldRetrySendResult(0, new ApiError('입력', { errorCode: 'PENDING_APPLICATION_EXIST' })),
    ).toBe(false);
    expect(shouldRetrySendResult(0, new Error('network'))).toBe(false);
  });
});

describe('useSentMessage Idempotency-Key 생명주기', () => {
  beforeEach(() => {
    /** 실패한 테스트에 남은 once 구현이 다음 테스트로 새지 않도록 구현까지 초기화한다. */
    mockedSentMessage.mockReset();
  });

  it('요청마다 UUID 형식의 키를 헤더 인자로 전달한다', async () => {
    mockedSentMessage.mockResolvedValueOnce(undefined);
    const hook = renderSentMessage();
    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(hook.result.current.isSuccess).toBe(true));

    expect(mockedSentMessage).toHaveBeenCalledWith(1, BODY, '서류', expect.any(String));
    expect(sentKeys()[0]).toMatch(/^[0-9a-f-]{36}$/);
  });

  it('일시적 충돌로 재시도할 때는 같은 키를 다시 사용한다', async () => {
    mockedSentMessage
      .mockRejectedValueOnce(new ApiError('충돌', { errorCode: 'TEMPORARY_SERVER_CONFLICT' }))
      .mockResolvedValueOnce(undefined);
    const hook = renderSentMessage();

    act(() => hook.result.current.mutate(BODY));
    /** 훅의 재시도 지연(1.5초)을 기다린다. */
    await waitFor(() => expect(hook.result.current.isSuccess).toBe(true), { timeout: 4000 });

    expect(mockedSentMessage).toHaveBeenCalledTimes(2);
    expect(new Set(sentKeys()).size).toBe(1);
  });

  it('같은 내용을 다시 보내면(수동 재시도) 같은 키를, 성공 후 다시 보내면 새 키를 쓴다', async () => {
    mockedSentMessage
      .mockRejectedValueOnce(new ApiError('미처리', { errorCode: 'PENDING_APPLICATION_EXIST' }))
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce(undefined);
    const hook = renderSentMessage();

    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(hook.result.current.isError).toBe(true));
    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(hook.result.current.isSuccess).toBe(true));
    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(mockedSentMessage).toHaveBeenCalledTimes(3));

    const [first, second, third] = sentKeys();
    expect(first).toBe(second);
    expect(third).not.toBe(second);
  });

  it('내용이나 채널이 바뀌면 새 키를 생성한다', async () => {
    mockedSentMessage.mockRejectedValue(
      new ApiError('미처리', { errorCode: 'PENDING_APPLICATION_EXIST' }),
    );
    const hook = renderSentMessage();

    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(mockedSentMessage).toHaveBeenCalledTimes(1));
    act(() => hook.result.current.mutate({ ...BODY, channels: ['EMAIL'] }));
    await waitFor(() => expect(mockedSentMessage).toHaveBeenCalledTimes(2));

    const [first, second] = sentKeys();
    expect(first).not.toBe(second);
  });

  it('IDEMPOTENCY_KEY_CONFLICT가 오면 자동 재시도하지 않고, 다음 시도에는 새 키를 쓴다', async () => {
    mockedSentMessage
      .mockRejectedValueOnce(new ApiError('충돌', { errorCode: 'IDEMPOTENCY_KEY_CONFLICT' }))
      .mockResolvedValueOnce(undefined);
    const hook = renderSentMessage();

    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(hook.result.current.isError).toBe(true));
    expect(mockedSentMessage).toHaveBeenCalledTimes(1);

    act(() => hook.result.current.mutate(BODY));
    await waitFor(() => expect(hook.result.current.isSuccess).toBe(true));

    const [first, second] = sentKeys();
    expect(first).not.toBe(second);
  });
});
