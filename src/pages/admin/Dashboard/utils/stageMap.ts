import type { ApplicationStage, ApiStage } from '../types/dashboard';

export const stageMap: Record<ApplicationStage, ApiStage> = {
  서류: 'INTERVIEW',
  면접: 'FINAL',
};
