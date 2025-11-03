import { isAxiosError } from 'axios';
import { apiInstance } from '@/api/initInstance';

export const updateClubImages = async (
  clubId: number | string,
  newFiles: File[],
  existingImages: { id: number; url: string }[],
) => {
  const formData = new FormData();

  formData.append('keepImages', JSON.stringify(existingImages));

  newFiles.forEach((file) => formData.append('newImages', file, file.name));

  try {
    const { data } = await apiInstance.patch(`/clubs/${clubId}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.error('이미지 업데이트 실패:', e.response?.data || e.message);
      throw new Error('이미지 업데이트에 실패했습니다.');
    }
    throw e;
  }
};
