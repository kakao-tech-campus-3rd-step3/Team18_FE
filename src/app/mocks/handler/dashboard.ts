import { http, HttpResponse } from 'msw';
import { dashboardRepository } from '@/app/mocks/repositories/dashboard';

const getDashboardSummaryResolver = () => {
  const summary = dashboardRepository.getDashboardSummary();
  return HttpResponse.json(summary, { status: 200 });
};

const getApplicantsResolver = () => {
  const applicants = dashboardRepository.getApplicants();
  return HttpResponse.json(applicants, { status: 200 });
};

export const dashboardHandlers = [
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard',
    getDashboardSummaryResolver,
  ),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/applicants',
    getApplicantsResolver,
  ),
];
