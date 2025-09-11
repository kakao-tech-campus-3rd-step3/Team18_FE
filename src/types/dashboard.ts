import type { ReactNode } from 'react';

export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
  image: ReactNode;
};

export type ApplicationFilterOption = '전체' | '검토중' | '승인됨' | '거절됨';

export type ApplicantData = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phone: string;
  email: string;
  status: '합격' | '불합격' | '미정';
  onClick: (id: number) => void;
};
