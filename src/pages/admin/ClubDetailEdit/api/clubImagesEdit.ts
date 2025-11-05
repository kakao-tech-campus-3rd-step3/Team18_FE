import { apiInstance } from '@/api/initInstance';
import { handleAxiosError } from '@/utils/handleAxiosError';

export const updateClubImages = async (
  clubId: number | string,
  newFiles: File[],
  existingImages: { id: number; url: string }[],
) => {
  const formData = new FormData();

  formData.append('keepImages', JSON.stringify(existingImages));

  newFiles.forEach((file) => formData.append('newImages', file, file.name));

  try {
    const { data } = await apiInstance.post(`/clubs/${clubId}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return data;
  } catch (e: unknown) {
    handleAxiosError(e, '이미지 업데이트 실패');
    throw e;
  }
};
