export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
};

export type StatusLabel = '합격' | '불합격' | '미정';
export type ApplicationStatus = 'APPROVED' | 'REJECTED' | 'PENDING';
export type ApplicationFilterOption = 'ALL' | ApplicationStatus;

export type InterviewInfo = {
  interviewDate: string;
  availableTimes: string[];
};

export type ApplicantData = {
  applicantId: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: ApplicationStatus;
  confirmedTime?: string;
  interviewInfo?: InterviewInfo[];
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

export type ApplicantsApiResponse = {
  applicants: ApplicantData[];
  interviewSchedule: InterviewSchedule[];
  message: string | null;
};
