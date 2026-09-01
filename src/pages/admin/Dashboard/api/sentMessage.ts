import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { STAGE_LABEL } from '../utils/labelMap';
import type { ApplicationStage, SendResultRequest } from '@/pages/admin/Dashboard/types/dashboard';

/**
 * 합격/불합격 결과를 확정하고 선택한 채널로 알림 발송을 요청한다.
 * 정상 응답은 "발송 작업 접수"를 뜻하며 실제 전달 완료가 아니다.
 *
 * `idempotencyKey`는 호출부가 관리한다. 같은 요청의 재시도에는 같은 키를,
 * 내용·채널·전형이 바뀐 새 요청에는 새 키를 넘겨야 한다.
 */
export const sentMessage = async (
  clubId: number,
  body: SendResultRequest,
  stage: ApplicationStage,
  idempotencyKey: string,
): Promise<void> => {
  try {
    await apiInstance.patch(
      `/clubs/${clubId}/club-apply-form/result?stage=${STAGE_LABEL[stage]}`,
      body,
      { headers: { 'Idempotency-Key': idempotencyKey } },
    );
  } catch (error: unknown) {
    return handleAxiosError(error);
  }
};
