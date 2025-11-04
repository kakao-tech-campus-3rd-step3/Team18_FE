import { apiInstance } from '@/api/initInstance';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { Notice, NoticeDetail } from '@/pages/user/Notice/types/notice';

export const fetchNotices = async (
  page: number,
): Promise<{ content: Notice[]; pageInfo: { totalPages: number } }> => {
  return apiInstance
    .get(`/notices?page=${page}`)
    .then((res) => res.data)
    .catch((error) => handleAxiosError(error, '공지사항을 불러오는데 실패했습니다.'));
};

export const fetchNoticeDetail = async (noticeId: number): Promise<NoticeDetail> => {
  return apiInstance
    .get(`/notices/${noticeId}`)
    .then((res) => res.data)
    .catch((error) => handleAxiosError(error, '공지사항 상세 정보를 불러오는데 실패했습니다.'));
};
