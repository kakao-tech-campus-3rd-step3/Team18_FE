import type { ReactNode } from 'react';

export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
  image: ReactNode;
};

export type ApplicationFilterOption = 'ALL' | 'ACCEPTED' | 'REJECTED' | 'UNDER_REVIEW';

export type ApplicantStatus = 'ACCEPTED' | 'REJECTED' | 'PENDING';

export type ApplicantData = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: '합격' | '불합격' | '미정';
  submittedAt: string;
};
