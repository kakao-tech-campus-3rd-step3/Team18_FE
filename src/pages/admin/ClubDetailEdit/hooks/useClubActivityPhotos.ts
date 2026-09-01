import { useCallback, useEffect, useRef, useState } from 'react';
import { updateClubImages } from '@/pages/admin/ClubDetailEdit/api/clubImagesEdit';
import { toast } from '@/shared/utils/toast';

const MAX_FILE_SIZE_MB = 5;
const MAX_TOTAL_SIZE_MB = 50;

type ExistingImage = { id: number; url: string };

type PendingImage = { key: string; file: File; url: string };

export type ActivityPhoto = {
  key: string;
  url: string;
  isNew: boolean;
};

const toMB = (bytes: number) => bytes / 1024 / 1024;

const toExistingKey = (id: number) => `existing-${id}`;

const toPendingKey = (file: File) => `new-${file.name}-${file.size}-${file.lastModified}`;

/**
 * 활동 사진 편집 상태를 로컬에서만 관리한다.
 * 추가·삭제는 화면에 즉시 반영되지만 서버 반영은 `saveImages`를 호출했을 때만 일어난다.
 */
export const useClubActivityPhotos = (initialImages: ExistingImage[]) => {
  const [savedImages, setSavedImages] = useState<ExistingImage[]>(initialImages);
  const [keptImages, setKeptImages] = useState<ExistingImage[]>(initialImages);
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);

  const pendingImagesRef = useRef<PendingImage[]>([]);
  pendingImagesRef.current = pendingImages;

  useEffect(() => {
    return () => {
      pendingImagesRef.current.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, []);

  const validateFiles = (files: File[]) => {
    const oversized = files.find((file) => toMB(file.size) > MAX_FILE_SIZE_MB);
    if (oversized) {
      toast.error(`${oversized.name} 파일이 ${MAX_FILE_SIZE_MB}MB를 초과합니다.`);
      return false;
    }

    const pendingSize = pendingImages.reduce((acc, image) => acc + image.file.size, 0);
    const newSize = files.reduce((acc, file) => acc + file.size, 0);
    if (toMB(pendingSize + newSize) > MAX_TOTAL_SIZE_MB) {
      toast.error(`전체 업로드 이미지 합이 ${MAX_TOTAL_SIZE_MB}MB를 초과합니다.`);
      return false;
    }

    return true;
  };

  const addFiles = (files: File[]) => {
    if (files.length === 0) return;

    const pendingKeys = new Set(pendingImages.map((image) => image.key));
    const uniqueFiles = files.filter((file) => !pendingKeys.has(toPendingKey(file)));

    if (uniqueFiles.length === 0) {
      toast.error('이미 추가된 사진입니다.');
      return;
    }
    if (!validateFiles(uniqueFiles)) return;

    const added = uniqueFiles.map((file) => ({
      key: toPendingKey(file),
      file,
      url: URL.createObjectURL(file),
    }));
    setPendingImages((prev) => [...prev, ...added]);
  };

  const handleAdd = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      addFiles(Array.from(target.files));
    };

    input.click();
  };

  const handleDelete = (photo: ActivityPhoto) => {
    if (photo.isNew) {
      setPendingImages((prev) => {
        const target = prev.find((image) => image.key === photo.key);
        if (target) URL.revokeObjectURL(target.url);
        return prev.filter((image) => image.key !== photo.key);
      });
      return;
    }

    setKeptImages((prev) => prev.filter((image) => toExistingKey(image.id) !== photo.key));
  };

  const photos: ActivityPhoto[] = [
    ...keptImages.map((image) => ({ key: toExistingKey(image.id), url: image.url, isNew: false })),
    ...pendingImages.map((image) => ({ key: image.key, url: image.url, isNew: true })),
  ];

  const isDirty = pendingImages.length > 0 || keptImages.length !== savedImages.length;

  const saveImages = useCallback(
    async (clubId: string | number) => {
      if (!isDirty) return;

      const data = await updateClubImages(
        clubId,
        pendingImages.map((image) => image.file),
        keptImages,
      );

      pendingImages.forEach((image) => URL.revokeObjectURL(image.url));
      setPendingImages([]);

      const nextImages = Array.isArray(data) ? data : keptImages;
      setSavedImages(nextImages);
      setKeptImages(nextImages);
    },
    [isDirty, pendingImages, keptImages],
  );

  return {
    photos,
    isDirty,
    addFiles,
    handleAdd,
    handleDelete,
    saveImages,
  };
};
