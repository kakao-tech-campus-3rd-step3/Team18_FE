import type {
  DashboardSummary,
  ApplicantsApiResponse,
  ApplicantData,
  InterviewSchedule,
  ResultNotificationRequest,
  ResultNotificationsApiResponse,
} from '@/pages/admin/Dashboard/types/dashboard';

/** 첫 항목은 처리 중으로 두어 발송 현황 폴링 동작을 확인할 수 있게 한다. */
const MOCK_RESULT_NOTIFICATIONS: ResultNotificationRequest[] = [
  {
    requestId: 11,
    idempotencyKey: '9b2d6c1e-3f4a-4b5c-8d6e-7f8091a2b3c4',
    stage: 'FINAL',
    requestStatus: 'PROCESSING',
    requestedAt: '2026-08-31T10:30:00',
    total: 6,
    pending: 2,
    accepted: 1,
    sent: 3,
    failed: 0,
    unknown: 0,
    sms: 2,
    lms: 1,
    estimatedCost: 69.3,
  },
  {
    requestId: 10,
    idempotencyKey: '550e8400-e29b-41d4-a716-446655440000',
    stage: 'INTERVIEW',
    requestStatus: 'COMPLETED',
    requestedAt: '2026-08-13T13:00:00',
    total: 5,
    pending: 0,
    accepted: 0,
    sent: 4,
    failed: 1,
    unknown: 0,
    sms: 0,
    lms: 0,
    estimatedCost: 0,
  },
];

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

  getResultNotifications: (limit: number): ResultNotificationsApiResponse => {
    return { requests: MOCK_RESULT_NOTIFICATIONS.slice(0, limit) };
  },
};
