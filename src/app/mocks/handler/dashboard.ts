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

const updateInterviewTimeResolver: Parameters<typeof http.patch>[1] = async ({
  params,
  request,
}) => {
  const body = (await request.json()) as { interviewAt: string };
  console.log(
    `[Mock] PATCH /clubs/${params.clubId}/applicants/${params.applicantId}/interview`,
    body,
  );
  return HttpResponse.json({ message: '면접 시간이 설정되었습니다.' }, { status: 200 });
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
  http.patch(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/applicants/:applicantId/interview',
    updateInterviewTimeResolver,
  ),
];
