import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';

export const updateClubImages = async (
  clubId: number | string,
  files: File[] = [],
  existingUrls: string[] = [],
) => {
  const formData = new FormData();

  existingUrls.forEach((url) => formData.append('images', url));
  files.forEach((file) => formData.append('images', file));

  try {
    const { data } = await apiInstance.put(`/clubs/${clubId}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return data.images ?? data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      throw new Error('이미지 업데이트에 실패했습니다.');
    }
    throw e;
  }
};
