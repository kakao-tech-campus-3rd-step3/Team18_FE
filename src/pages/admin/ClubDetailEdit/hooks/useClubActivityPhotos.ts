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

  const handleDelete = async (id: number) => {
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);

    const keepImageIds = updated.map((img) => img.id);
    const formData = new FormData();
    formData.append('keepImageIds', JSON.stringify(keepImageIds));

    try {
      await apiInstance.put(`/clubs/${clubId}/images`, formData);
    } catch (err) {
      console.error('이미지 삭제 반영 실패:', err);
      alert('삭제 반영에 실패했습니다. 새로고침 후 다시 시도해 주세요.');
      // 실패 시 UI 롤백이 필요하다면 아래처럼 복구 고려
      // setImages((prev) => [...prev, images.find((img) => img.id === id)!]);
    }
  };

  const uploadFiles = async (files: File[]) => {
    if (files.length === 0) return;
    if (!validateFiles(files)) return;

    const keepImageIds = images.map((img) => img.id);

    const formData = new FormData();
    formData.append('keepImageIds', JSON.stringify(keepImageIds));
    files.forEach((file) => formData.append('newImages', file, file.name));

    try {
      const { data } = await apiInstance.put(`/clubs/${clubId}/images`, formData);
      if (Array.isArray(data)) setImages(data);
    } catch (err) {
      console.error('이미지 업로드 실패:', err);
      alert('이미지 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.');
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

  return {
    images,
    handleAdd,
    handleDelete,
    uploadFiles,
  };
};
