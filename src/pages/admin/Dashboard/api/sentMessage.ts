import { apiInstance } from '@/api/initInstance';

export const sentMessage = async (clubId: number, message: string): Promise<void> => {
  try {
    const { data } = await apiInstance.patch(`/clubs/${clubId}/club-apply-form/results`, {
      message,
    });
    return data;
  } catch {
    throw new Error('Failed to create comment');
  }
};
