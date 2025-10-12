import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchDashboardSummary = async (clubId: string): Promise<DashboardSummary> => {
  const response = await fetch(`/api/clubs/${clubId}/dashboard`);

  if (!response.ok) {
    throw new Error('대시보드 요약 정보를 불러오는 데 실패했습니다.');
  }

  return response.json();
};
