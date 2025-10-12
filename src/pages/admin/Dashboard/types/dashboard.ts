import type { ReactNode } from 'react';

export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
  image: ReactNode;
};

export type ApplicationFilterOption = 'ALL' | 'ACCEPTED' | 'REJECTED' | 'PENDING';

export type ApplicantData = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: Omit<ApplicationFilterOption, 'All'>;
};

export type DashboardSummary = {
  totalApplicantCount: number;
  pendingApplicationCount: number;
  startDay: string;
  endDay: string;
};
