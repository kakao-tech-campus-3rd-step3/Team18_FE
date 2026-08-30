import { describe, it, expect } from 'vitest';
import { hasUnsettledRequest } from './useResultNotifications';
import type { ResultNotificationRequest } from '@/pages/admin/Dashboard/types/dashboard';

const createRequest = (
  overrides: Partial<ResultNotificationRequest> = {},
): ResultNotificationRequest => ({
  requestId: 1,
  idempotencyKey: 'key',
  stage: 'FINAL',
  requestStatus: 'COMPLETED',
  requestedAt: '2026-08-13T13:00:00',
  total: 5,
  pending: 0,
  accepted: 0,
  sent: 4,
  failed: 1,
  unknown: 0,
  sms: 0,
  lms: 0,
  estimatedCost: 0,
  ...overrides,
});

describe('hasUnsettledRequest (발송 현황 폴링 유지 조건)', () => {
  it('모든 요청이 완료되고 대기·접수 작업이 없으면 폴링을 멈춘다', () => {
    expect(hasUnsettledRequest([createRequest()])).toBe(false);
    expect(hasUnsettledRequest([])).toBe(false);
  });

  it('처리 중인 요청이 있으면 폴링을 계속한다', () => {
    expect(hasUnsettledRequest([createRequest({ requestStatus: 'PROCESSING' })])).toBe(true);
  });

  it('요청은 완료됐어도 발송 대기 또는 접수 상태 작업이 남아 있으면 폴링을 계속한다', () => {
    expect(hasUnsettledRequest([createRequest({ pending: 1 })])).toBe(true);
    expect(hasUnsettledRequest([createRequest({ accepted: 2 })])).toBe(true);
  });

  it('확인불가(unknown)·실패는 확정된 결과이므로 폴링 사유가 아니다', () => {
    expect(hasUnsettledRequest([createRequest({ unknown: 3, failed: 2, sent: 0 })])).toBe(false);
  });
});
