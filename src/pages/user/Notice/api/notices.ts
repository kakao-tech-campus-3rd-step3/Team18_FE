import { apiInstance } from '@/app/api/initInstance';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import type { Notice, NoticeDetail } from '@/pages/user/Notice/types/notice';

export const fetchNotices = async (
  page: number,
): Promise<{ content: Notice[]; pageInfo: { totalPages: number } }> => {
  try {
    const response = await apiInstance.get(`/notices?page=${page}`);
    return response.data;
  } catch (error: unknown) {
    return handleAxiosError(error, '공지사항을 불러오는데 실패했습니다.');
  }
};

export const fetchNoticeDetail = async (noticeId: number): Promise<NoticeDetail> => {
  try {
    const response = await apiInstance.get(`/notices/${noticeId}`);
    return response.data;
  } catch (error: unknown) {
    return handleAxiosError(error, '공지사항 상세 정보를 불러오는데 실패했습니다.');
  }
};
