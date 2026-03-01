import { apiInstance } from '@/app/api/initInstance';

export const bulkUploadMembers = async (clubId: string, file: File): Promise<void> => {
  const formData = new FormData();
  formData.append('file', file);

  await apiInstance.post(`/clubs/${clubId}/members/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
