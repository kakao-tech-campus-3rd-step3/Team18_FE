import type { ReactNode } from 'react';

export type DashboardCard = {
  id: number;
  label: string;
  value: string | number;
  image: ReactNode;
};
