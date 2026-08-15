import { useQuery } from '@tanstack/react-query';
import { getPopularClubs } from '@/pages/user/Main/api/popularClub';
import type { PopularClub } from '@/pages/user/Main/types/popularClub';

const POLLING_INTERVAL = 10_000;

const EMPTY_POPULAR_CLUBS: ReadonlyMap<number, PopularClub> = new Map();

export const usePopularClubs = (): ReadonlyMap<number, PopularClub> => {
  const { data } = useQuery({
    queryKey: ['popularClubs'],
    queryFn: getPopularClubs,
    refetchInterval: POLLING_INTERVAL,
    staleTime: POLLING_INTERVAL,
    // 10초 뒤 어차피 다시 호출되므로, 실패한 폴링이 요청 수를 배로 늘리지 않도록 재시도하지 않는다
    retry: false,
    select: (response) => new Map(response.clubs.map((club) => [club.clubId, club])),
  });

  return data ?? EMPTY_POPULAR_CLUBS;
};
