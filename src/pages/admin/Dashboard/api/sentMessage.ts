import { apiInstance } from '@/api/initInstance';
import { stageMap } from '../utils/stageMap';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const sentMessage = async (
  clubId: number,
  message: string,
  stage: ApplicationStage,
): Promise<void> => {
  const apiStage = stageMap[stage];

  try {
    await apiInstance.patch(`/clubs/${clubId}/club-apply-form/result?stage=${apiStage}`, {
      message,
    });
  } catch (error) {
    console.error('메시지 전송에 실패하였습니다:', error);
    throw error;
  }
};
