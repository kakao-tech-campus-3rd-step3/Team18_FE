import type {
  DashboardSummary,
  ApplicantsApiResponse,
  ApplicantData,
  InterviewSchedule,
} from '@/pages/admin/Dashboard/types/dashboard';

const MOCK_DASHBOARD_SUMMARY: DashboardSummary = {
  totalApplicantCount: 45,
  pendingApplicationCount: 12,
  startDay: '2024-03-01',
  endDay: '2024-03-31',
};

const MOCK_INTERVIEW_SCHEDULE: InterviewSchedule[] = [
  {
    date: '2026-09-02',
    slots: [
      { time: '14:00', assignedCount: 1 },
      { time: '15:00', assignedCount: 1 },
      { time: '16:00', assignedCount: 0 },
    ],
  },
  {
    date: '2026-09-03',
    slots: [
      { time: '10:00', assignedCount: 1 },
      { time: '11:00', assignedCount: 0 },
      { time: '14:00', assignedCount: 0 },
    ],
  },
];

const MOCK_APPLICANTS: ApplicantData[] = [
  {
    applicantId: 1,
    name: '김철수',
    studentId: '202401',
    department: '컴퓨터공학과',
    phoneNumber: '010-1234-5678',
    email: 'test1@example.com',
    status: 'APPROVED',
    confirmedTime: '2026-09-02T15:00:00',
    interviewInfo: [
      {
        interviewDate: '2026-09-02',
        availableTime: ['14:00', '15:00', '16:00'],
      },
    ],
  },
  {
    applicantId: 2,
    name: '이영희',
    studentId: '202402',
    department: '경영학과',
    phoneNumber: '010-2345-6789',
    email: 'test2@example.com',
    status: 'APPROVED',
    confirmedTime: null,
    interviewInfo: [
      {
        interviewDate: '2026-09-02',
        availableTime: ['10:00', '11:00'],
      },
    ],
  },
  {
    applicantId: 3,
    name: '박민수',
    studentId: '202403',
    department: '전자공학과',
    phoneNumber: '010-3456-7890',
    email: 'test3@example.com',
    status: 'REJECTED',
    confirmedTime: '2026-09-03T10:00:00',
    interviewInfo: [
      {
        interviewDate: '2026-09-03',
        availableTime: ['10:00', '11:00', '14:00'],
      },
    ],
  },
];

export const dashboardRepository = {
  getDashboardSummary: (): DashboardSummary => {
    return MOCK_DASHBOARD_SUMMARY;
  },

  getApplicants: (): ApplicantsApiResponse => {
    return {
      interviewRequired: true,
      applicants: MOCK_APPLICANTS,
      interviewSchedule: MOCK_INTERVIEW_SCHEDULE,
      message: null,
    };
  },
};
