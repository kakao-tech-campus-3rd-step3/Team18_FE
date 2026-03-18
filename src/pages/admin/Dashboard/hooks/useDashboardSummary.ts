import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchDashboardSummary } from '@/pages/admin/Dashboard/api/dashboard';

export const useDashboardSummary = (clubId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['dashboardSummary', clubId],
    queryFn: () => fetchDashboardSummary(clubId),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 30000,
  });

  return data;
};
