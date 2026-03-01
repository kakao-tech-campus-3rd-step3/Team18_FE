import { useState } from 'react';
import { updateClubImages } from '@/pages/admin/ClubDetailEdit/api/clubImagesEdit';
import { toast } from '@/shared/utils/toast';

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
        toast.error(`${file.name} 파일이 ${MAX_FILE_SIZE_MB}MB를 초과합니다.`);
        return false;
      }
    }

    const totalSizeMB = files.reduce((acc, f) => acc + f.size / 1024 / 1024, 0);
    if (totalSizeMB > MAX_TOTAL_SIZE_MB) {
      toast.error(`전체 업로드 이미지 합이 ${MAX_TOTAL_SIZE_MB}MB를 초과합니다.`);
      return false;
    }

    return true;
  };

  const handleDelete = async (id: number) => {
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);

    try {
      await updateClubImages(clubId, [], updated);
    } catch (err: unknown) {
      toast.error((err as Error).message || '이미지 삭제에 실패했습니다.');
    }
  };

  const uploadFiles = async (files: File[]) => {
    if (files.length === 0) return;
    if (!validateFiles(files)) return;

    try {
      const data = await updateClubImages(clubId, files, images);
      if (Array.isArray(data)) setImages(data);
    } catch (err: unknown) {
      toast.error((err as Error).message || '이미지 업로드에 실패했습니다.');
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
