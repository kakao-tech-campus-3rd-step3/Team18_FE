import { http, HttpResponse } from 'msw';
import type {
  DashboardSummary,
  ApplicantsApiResponse,
} from '@/pages/admin/Dashboard/types/dashboard';

export const dashboardHandlers = [
  // 대시보드 요약 정보
  http.get('/api/clubs/:clubId/dashboard', () => {
    const response: DashboardSummary = {
      totalApplicantCount: 45,
      pendingApplicationCount: 12,
      startDay: '2024-03-01',
      endDay: '2024-03-31',
    };

    return HttpResponse.json(response, { status: 200 });
  }),

  // 지원자 목록 (서류/면접)
  http.get('/api/clubs/:clubId/dashboard/applicants', () => {
    const response: ApplicantsApiResponse = {
      applicants: [
        {
          applicantId: 1,
          name: '김철수',
          studentId: '202401',
          department: '컴퓨터공학과',
          phoneNumber: '010-1234-5678',
          email: 'test1@example.com',
          status: 'PENDING',
        },
        {
          applicantId: 2,
          name: '이영희',
          studentId: '202402',
          department: '경영학과',
          phoneNumber: '010-2345-6789',
          email: 'test2@example.com',
          status: 'APPROVED',
        },
        {
          applicantId: 3,
          name: '박민수',
          studentId: '202403',
          department: '전자공학과',
          phoneNumber: '010-3456-7890',
          email: 'test3@example.com',
          status: 'REJECTED',
        },
      ],
      message: null,
    };

    return HttpResponse.json(response, { status: 200 });
  }),
];
