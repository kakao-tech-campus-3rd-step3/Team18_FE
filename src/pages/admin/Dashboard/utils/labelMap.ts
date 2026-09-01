import type {
  ApplicationStage,
  ApiStage,
  ApplicantData,
  NotificationChannel,
  ResultRequestStatus,
} from '../types/dashboard';

export const STAGE_LABEL: Record<ApplicationStage, ApiStage> = {
  서류: 'INTERVIEW',
  면접: 'FINAL',
};

export const API_STAGE_LABEL: Record<ApiStage, string> = {
  INTERVIEW: '서류 결과',
  FINAL: '면접 결과',
};

export const STATUS_LABEL: Record<ApplicantData['status'], string> = {
  PENDING: '미정',
  REJECTED: '불합격',
  APPROVED: '합격',
};

export const CHANNEL_LABEL: Record<NotificationChannel, string> = {
  EMAIL: '이메일',
  SMS: '문자(SMS)',
};

export const REQUEST_STATUS_LABEL: Record<ResultRequestStatus, string> = {
  PROCESSING: '처리 중',
  COMPLETED: '완료',
};
