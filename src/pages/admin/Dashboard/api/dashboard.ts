import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';

export const fetchDashboardSummary = async (clubId: number): Promise<DashboardSummary> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}/dashboard`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('대시보드 요약 정보를 불러오는 데 실패했습니다.');
  }

  return response.json();
};
