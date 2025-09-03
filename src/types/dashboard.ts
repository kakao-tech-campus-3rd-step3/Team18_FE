import type { ReactNode } from 'react';

export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
  image: ReactNode;
};

export type ApplicationFilterOption = '전체' | '검토중' | '승인됨' | '거절됨';
