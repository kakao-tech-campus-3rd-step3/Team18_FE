import { useQuery } from '@tanstack/react-query';
import { fetchClubStatistics } from '@/app/api/statistics';
import type { StatisticsScope } from '@/shared/types/statistics';

/** 공개 통계는 서버에서 30분간 캐시되므로 동일 주기로, 관리자 통계는 실시간이므로 짧게 유지한다. */
const STALE_TIME: Record<StatisticsScope, number> = {
  public: 1000 * 60 * 30,
  admin: 1000 * 60,
};

/**
 * 지원폼이 없는 동아리는 404가 내려오므로 useSuspenseQuery 대신 useQuery를 사용한다.
 * 통계 조회 실패가 페이지 전체를 중단시키지 않고 섹션 단위로만 처리되도록 한다.
 */
export const useClubStatistics = (clubId: number, scope: StatisticsScope) => {
  return useQuery({
    queryKey: ['clubStatistics', clubId, scope],
    queryFn: () => fetchClubStatistics(clubId, scope),
    staleTime: STALE_TIME[scope],
    enabled: Number.isFinite(clubId),
    retry: false,
  });
};
