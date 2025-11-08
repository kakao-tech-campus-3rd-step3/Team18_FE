import { apiInstance } from '@/api/initInstance';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchDashboardSummary = async (clubId: number): Promise<DashboardSummary> => {
  try {
    const { data } = await apiInstance.get(`/clubs/${clubId}/dashboard`);
    return data;
  } catch (error: unknown) {
    return handleAxiosError(error, '대시보드 로딩 실패');
  }
};
