import { error } from 'console';
import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchDashboardSummary = async (clubId: number): Promise<DashboardSummary> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error('대시보드 요약 정보를 불러오는 데 실패했습니다.');
    }
  }
  throw error;
};
