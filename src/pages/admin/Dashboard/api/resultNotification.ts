import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { ResultNotificationsApiResponse } from '@/pages/admin/Dashboard/types/dashboard';

export const RESULT_NOTIFICATIONS_DEFAULT_LIMIT = 20;

/** 최근 결과 발표 요청별 채널 발송 현황과 문자 예상비용을 조회한다. limit은 1~100. */
export const fetchResultNotifications = async (
  clubId: number,
  limit: number = RESULT_NOTIFICATIONS_DEFAULT_LIMIT,
): Promise<ResultNotificationsApiResponse> => {
  try {
    const { data } = await apiInstance.get<ResultNotificationsApiResponse>(
      `/clubs/${clubId}/result-notifications`,
      { params: { limit } },
    );
    return data;
  } catch (error: unknown) {
    return handleAxiosError(error, '발송 현황을 불러오지 못했습니다.');
  }
};
