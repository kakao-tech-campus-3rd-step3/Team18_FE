import { http, HttpResponse } from 'msw';
import { dashboardRepository } from '@/app/mocks/repositories/dashboard';
import type {
  NotificationChannel,
  SendResultRequest,
} from '@/pages/admin/Dashboard/types/dashboard';

const SUPPORTED_CHANNELS: NotificationChannel[] = ['EMAIL', 'SMS'];

const getDashboardSummaryResolver = () => {
  const summary = dashboardRepository.getDashboardSummary();
  return HttpResponse.json(summary, { status: 200 });
};

const getApplicantsResolver = () => {
  const applicants = dashboardRepository.getApplicants();
  return HttpResponse.json(applicants, { status: 200 });
};

const updateInterviewTimeResolver: Parameters<typeof http.patch>[1] = async ({
  params,
  request,
}) => {
  const body = (await request.json()) as { interviewAt: string };
  console.log(
    `[Mock] PATCH /clubs/${params.clubId}/applicants/${params.applicantId}/interview`,
    body,
  );
  return HttpResponse.json({ message: '면접 시간이 설정되었습니다.' }, { status: 200 });
};

const invalidInput = (detail: string) =>
  HttpResponse.json(
    { error_code: 'INVALID_INPUT_VALUE', message: '입력 값이 올바르지 않습니다.', detail },
    { status: 400 },
  );

/** 실제 서버와 같은 검증 순서로 Idempotency-Key 헤더와 channels를 확인한다. */
const sendResultResolver: Parameters<typeof http.patch>[1] = async ({ params, request }) => {
  const idempotencyKey = request.headers.get('Idempotency-Key');
  if (!idempotencyKey) {
    return invalidInput("필수 헤더 'Idempotency-Key'가 요청에 포함되지 않았습니다.");
  }
  if (idempotencyKey.length > 100) {
    return invalidInput('Idempotency-Key는 1자 이상 100자 이하여야 합니다.');
  }

  const body = (await request.json()) as Partial<SendResultRequest>;
  const channels = body.channels ?? ['EMAIL'];
  if (channels.length === 0) {
    return invalidInput('channels: 알림 채널은 하나 이상 선택해야 합니다.');
  }
  if (channels.some((channel) => !SUPPORTED_CHANNELS.includes(channel))) {
    return invalidInput('요청 본문의 형식 또는 값이 올바르지 않습니다.');
  }

  const stage = new URL(request.url).searchParams.get('stage');
  console.log(`[Mock] PATCH /clubs/${params.clubId}/club-apply-form/result?stage=${stage}`, {
    idempotencyKey,
    ...body,
    channels,
  });
  return HttpResponse.json({ success: true }, { status: 200 });
};

const getResultNotificationsResolver: Parameters<typeof http.get>[1] = ({ request }) => {
  const limit = Number(new URL(request.url).searchParams.get('limit') ?? 20);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    return invalidInput('limit: 100 이하여야 합니다.');
  }
  return HttpResponse.json(dashboardRepository.getResultNotifications(limit), { status: 200 });
};

export const dashboardHandlers = [
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard',
    getDashboardSummaryResolver,
  ),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/applicants',
    getApplicantsResolver,
  ),
  http.patch(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/applicants/:applicantId/interview',
    updateInterviewTimeResolver,
  ),
  http.patch(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/club-apply-form/result',
    sendResultResolver,
  ),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/result-notifications',
    getResultNotificationsResolver,
  ),
];
