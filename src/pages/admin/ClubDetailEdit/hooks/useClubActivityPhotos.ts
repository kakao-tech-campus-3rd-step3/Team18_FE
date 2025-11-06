import { useState } from 'react';
import { apiInstance } from '@/api/initInstance';

const MAX_FILE_SIZE_MB = 5;
const MAX_TOTAL_SIZE_MB = 50;

export const useClubActivityPhotos = (
  clubId: string | number,
  initialImages: { id: number; url: string }[],
) => {
  const [images, setImages] = useState<{ id: number; url: string }[]>(initialImages);

  const validateFiles = (files: File[]) => {
    for (const file of files) {
      if (file.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
        alert(`${file.name} 파일이 ${MAX_FILE_SIZE_MB}MB를 초과합니다.`);
        return false;
      }
    }

    const totalSizeMB = files.reduce((acc, f) => acc + f.size / 1024 / 1024, 0);
    if (totalSizeMB > MAX_TOTAL_SIZE_MB) {
      alert(`전체 업로드 이미지 합이 ${MAX_TOTAL_SIZE_MB}MB를 초과합니다.`);
      return false;
    }

    return true;
  };

  const uploadFiles = async (files: File[]) => {
    if (files.length === 0) return;
    if (!validateFiles(files)) return;

    const formData = new FormData();
    files.forEach((file) => formData.append('images', file, file.name));

    try {
      const { data } = await apiInstance.put(`/clubs/${clubId}/images`, formData);
      if (Array.isArray(data)) setImages(data);
    } catch (err) {
      console.error('이미지 업로드 실패:', err);
    }
  };

  const handleAdd = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const files = Array.from(target.files);
      uploadFiles(files);
    };

    input.click();
  };

  const handleDelete = async (id: number) => {
    const updatedImages = images.filter((img) => img.id !== id);
    setImages(updatedImages);

    try {
      await apiInstance.put(`/clubs/${clubId}/images`, { images: updatedImages });
    } catch (err) {
      console.error('이미지 삭제 반영 실패:', err);
    }
  };

  return {
    images,
    handleAdd,
    handleDelete,
    uploadFiles,
  };
};
