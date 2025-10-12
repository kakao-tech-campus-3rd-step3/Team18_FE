import { useQuery } from '@tanstack/react-query';
import { fetchDashboardSummary } from '@/pages/admin/Dashboard/api/dashboard';
import type { DashboardSummary } from '@/pages/admin/Dashboard/types/dashboard';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export const useDashboardSummary = (clubId: string): UseApiQueryResult<DashboardSummary | null> => {
  const { data, isLoading, error } = useQuery<DashboardSummary | undefined>({
    queryKey: ['dashboardSummary', clubId],
    queryFn: () => fetchDashboardSummary(clubId),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 30000,
  });

  return { data: data || null, isLoading, error };
};
