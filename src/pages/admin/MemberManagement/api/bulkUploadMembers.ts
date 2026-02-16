import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';

export const bulkUploadMembers = async (clubId: string, file: File): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    await apiInstance.post(`/clubs/${clubId}/members/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (e: unknown) {
    return handleAxiosError(e, '일괄 등록에 실패했습니다.');
  }
};
