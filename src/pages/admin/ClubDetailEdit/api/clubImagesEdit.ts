import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';

export const updateClubImages = async (
  clubId: number | string,
  newFiles: File[],
  existingImages: { id: number; url: string }[],
) => {
  const formData = new FormData();

  const keepImageIds = existingImages.map((img) => img.id);
  formData.append('keepImageIds', JSON.stringify(keepImageIds));

  newFiles.forEach((file) => formData.append('newImages', file, file.name));

  try {
    const { data } = await apiInstance.put(`/clubs/${clubId}/images`, formData);
    return data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error('이미지 업데이트 실패:', e.response?.data || e.message);
      throw new Error('이미지 업데이트에 실패했습니다.');
    }
    throw e;
  }
};
