import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';
import { isApiErrorCode } from '@/shared/utils/ApiError';
import { toast } from '@/shared/utils/toast';
import type { ApplicationStage, SendResultRequest } from '@/pages/admin/Dashboard/types/dashboard';

/** 일시적 충돌은 서버 안내대로 같은 키로 재시도한다. 그 외 4xx는 재시도해도 결과가 같으므로 하지 않는다. */
export const RETRYABLE_ERROR_CODE = 'TEMPORARY_SERVER_CONFLICT';
/** 같은 키가 다른 요청에 쓰인 경우. 자동 재시도하지 않고 키를 버려 다음 시도는 새 요청으로 보낸다. */
export const KEY_CONFLICT_ERROR_CODE = 'IDEMPOTENCY_KEY_CONFLICT';

const MAX_RETRY_COUNT = 2;
const RETRY_DELAY_MS = 1500;

type IdempotencyKeyState = { fingerprint: string; key: string };

/** 서버가 동일 요청을 판별하는 기준(stage·message·정렬된 channels)과 같은 기준으로 지문을 만든다. */
export const createRequestFingerprint = (stage: ApplicationStage, body: SendResultRequest) =>
  JSON.stringify({ stage, message: body.message, channels: [...body.channels].sort() });

export const shouldRetrySendResult = (failureCount: number, error: unknown) =>
  failureCount < MAX_RETRY_COUNT && isApiErrorCode(error, RETRYABLE_ERROR_CODE);

export const useSentMessage = (clubId: number, stage: ApplicationStage) => {
  const queryClient = useQueryClient();
  const keyRef = useRef<IdempotencyKeyState | null>(null);

  /**
   * Idempotency-Key 생명주기
   * - 생성: 전송 버튼을 누른 시점에 요청 내용 기준으로 한 번 생성
   * - 유지: 같은 내용으로 다시 보내는 동안(네트워크 재시도 포함) 재사용
   * - 폐기: 성공했거나, 키 충돌이 확정됐거나, 내용·채널·전형이 바뀌었을 때
   */
  const resolveIdempotencyKey = (body: SendResultRequest) => {
    const fingerprint = createRequestFingerprint(stage, body);
    if (keyRef.current?.fingerprint !== fingerprint) {
      keyRef.current = { fingerprint, key: crypto.randomUUID() };
    }
    return keyRef.current.key;
  };

  const mutation = useMutation({
    mutationFn: (body: SendResultRequest) =>
      sentMessage(clubId, body, stage, resolveIdempotencyKey(body)),
    retry: shouldRetrySendResult,
    retryDelay: RETRY_DELAY_MS,
    onSuccess: () => {
      keyRef.current = null;
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
      queryClient.invalidateQueries({ queryKey: ['resultNotifications', clubId] });
      toast.success('결과 발송이 접수되었습니다. 전달 결과는 발송 현황에서 확인할 수 있습니다.');
    },
    onError: (error: Error) => {
      if (isApiErrorCode(error, KEY_CONFLICT_ERROR_CODE)) {
        keyRef.current = null;
      }
      toast.error(error.message || '결과 전송이 실패하였습니다.');
    },
  });

  return { ...mutation, isLoading: mutation.isPending };
};
