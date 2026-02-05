import type { ApplicationStage, ApiStage, ApplicantData } from '../types/dashboard';

export const STAGE_LABEL: Record<ApplicationStage, ApiStage> = {
  서류: 'INTERVIEW',
  면접: 'FINAL',
};

export const STATUS_LABEL: Record<ApplicantData['status'], string> = {
  PENDING: '미정',
  REJECTED: '불합격',
  APPROVED: '합격',
};
