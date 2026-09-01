import { useQuery } from '@tanstack/react-query';
import {
  fetchResultNotifications,
  RESULT_NOTIFICATIONS_DEFAULT_LIMIT,
} from '@/pages/admin/Dashboard/api/resultNotification';
import type { ResultNotificationRequest } from '@/pages/admin/Dashboard/types/dashboard';

const POLLING_INTERVAL_MS = 5000;

/** 처리 중이거나 아직 최종 결과가 확정되지 않은(대기·접수) 작업이 하나라도 있으면 폴링을 계속한다. */
export const hasUnsettledRequest = (requests: ResultNotificationRequest[]) =>
  requests.some(
    (request) =>
      request.requestStatus === 'PROCESSING' || request.pending > 0 || request.accepted > 0,
  );

/**
 * 결과 발표 직후 발송 결과가 비동기로 확정되므로, 미확정 작업이 남아 있는 동안만 주기적으로 갱신한다.
 * 결과 발표 이력이 없는 동아리에서도 페이지가 중단되지 않도록 useQuery를 사용한다.
 */
export const useResultNotifications = (
  clubId: number,
  limit: number = RESULT_NOTIFICATIONS_DEFAULT_LIMIT,
) => {
  return useQuery({
    queryKey: ['resultNotifications', clubId, limit],
    queryFn: () => fetchResultNotifications(clubId, limit),
    enabled: Number.isFinite(clubId),
    retry: false,
    refetchInterval: (query) =>
      query.state.data && hasUnsettledRequest(query.state.data.requests)
        ? POLLING_INTERVAL_MS
        : false,
  });
};
