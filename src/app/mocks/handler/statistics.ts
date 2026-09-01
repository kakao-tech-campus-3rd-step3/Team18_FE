import { http, HttpResponse, type HttpResponseResolver, type PathParams } from 'msw';
import { statisticsRepository } from '@/app/mocks/repositories/statistics';
import type { StatisticsDimension } from '@/shared/types/statistics';

interface StatisticsParams extends PathParams {
  clubId: string;
}

const getStatisticsResolver: HttpResponseResolver<StatisticsParams> = ({ params, request }) => {
  const dimensions = (new URL(request.url).searchParams.get('dimensions')?.split(',') ??
    []) as StatisticsDimension[];
  const statistics = statisticsRepository.getStatistics(Number(params.clubId), dimensions);

  return HttpResponse.json(statistics, { status: 200 });
};

export const statisticsHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/statistics', getStatisticsResolver),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/statistics/admin',
    getStatisticsResolver,
  ),
];
