import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchDashboardSummary = async (clubId: number): Promise<DashboardSummary> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard`);
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const msg = error.response?.data?.message || error.message;
      throw new Error(`대시보드 로딩 실패: ${msg}`);
    }
    throw new Error('대시보드 로딩 실패: 알 수 없는 오류');
  }
};
