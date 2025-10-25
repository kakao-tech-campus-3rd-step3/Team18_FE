export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
};

export type StatusLabel = '합격' | '불합격' | '미정';
export type ApplicationStatus = 'APPROVED' | 'REJECTED' | 'PENDING';
export type ApplicationFilterOption = 'ALL' | ApplicationStatus;

export type ApplicantData = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: ApplicationStatus;
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
