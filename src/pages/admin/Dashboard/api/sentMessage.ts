import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { STAGE_LABEL } from '../utils/labelMap';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const sentMessage = async (
  clubId: number,
  message: string,
  stage: ApplicationStage,
): Promise<void> => {
  try {
    await apiInstance.patch(`/clubs/${clubId}/club-apply-form/result?stage=${STAGE_LABEL[stage]}`, {
      message,
    });
  } catch (error: unknown) {
    handleAxiosError(error);
  }
};
