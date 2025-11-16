import { apiInstance } from '@/app/api/initInstance';
import type { Notice, NoticeDetail } from '@/pages/user/Notice/types/notice';

const handleAxiosError = (error: unknown, defaultMessage: string): never => {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    const message = axiosError.response?.data?.message || defaultMessage;
    throw new Error(message);
  }
  throw new Error('알 수 없는 오류가 발생했습니다.');
};

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
