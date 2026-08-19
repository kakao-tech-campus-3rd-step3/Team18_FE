import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type {
  ClubStatistics,
  StatisticsDimension,
  StatisticsScope,
} from '@/shared/types/statistics';

export const fetchClubStatistics = async (
  clubId: number,
  scope: StatisticsScope,
  dimensions?: StatisticsDimension[],
): Promise<ClubStatistics> => {
  try {
    const { data } = await apiInstance.get<ClubStatistics>(
      `/clubs/${clubId}/statistics${scope === 'admin' ? '/admin' : ''}`,
      dimensions?.length ? { params: { dimensions: dimensions.join(',') } } : undefined,
    );
    return data;
  } catch (error: unknown) {
    return handleAxiosError(error, '지원자 통계를 불러오지 못했습니다.');
  }
};
