export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
};

export type ApplicateInfoCategory =
  | '이름'
  | '학번'
  | '학과'
  | '전화번호'
  | '이메일'
  | '결과'
  | '면접 시간';

export type StatusLabel = '합격' | '불합격' | '미정';
export type ApplicationStatus = 'APPROVED' | 'REJECTED' | 'PENDING';
export type ApplicationFilterOption = 'ALL' | ApplicationStatus;

export type InterviewInfo = {
  interviewDate: string;
  availableTime: string[];
};

export type ApplicantData = {
  applicantId: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: ApplicationStatus;
  confirmedTime: string | null;
  interviewInfo: InterviewInfo[];
};

export type DashboardSummary = {
  totalApplicantCount: number;
  pendingApplicationCount: number;
  startDay: string;
  endDay: string;
};

export type ApplicantCounts = {
  ALL: number;
  PENDING: number;
  APPROVED: number;
  REJECTED: number;
};

export type ApplicationStage = '서류' | '면접';
export type ApiStage = 'INTERVIEW' | 'FINAL';

export type InterviewSlot = {
  time: string;
  assignedCount: number;
};

export type InterviewSchedule = {
  date: string;
  slots: InterviewSlot[];
};

export type NotificationChannel = 'EMAIL' | 'SMS';

export type SendResultRequest = {
  /** 합격자에게 추가로 전달할 안내 메시지 (최대 800자) */
  message: string | null;
  /** 생략·null이면 서버가 EMAIL을 기본 적용하지만, 빈 배열은 400이므로 항상 명시해서 보낸다. */
  channels: NotificationChannel[];
};

export type ResultRequestStatus = 'PROCESSING' | 'COMPLETED';

export type ResultNotificationRequest = {
  requestId: number;
  idempotencyKey: string;
  stage: ApiStage;
  requestStatus: ResultRequestStatus;
  requestedAt: string;
  /** 지원자 수가 아니라 채널별 발송 작업 수 (지원자 5명 × EMAIL·SMS = 최대 10) */
  total: number;
  pending: number;
  accepted: number;
  sent: number;
  failed: number;
  unknown: number;
  sms: number;
  lms: number;
  estimatedCost: number;
};

export type ResultNotificationsApiResponse = {
  requests: ResultNotificationRequest[];
};

export type ApplicantsApiResponse = {
  interviewRequired: boolean;
  applicants: ApplicantData[];
  interviewSchedule: InterviewSchedule[];
  message: string | null;
};
