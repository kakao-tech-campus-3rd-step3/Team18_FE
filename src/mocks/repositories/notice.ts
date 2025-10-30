import type { NoticeDetail } from '@/pages/user/Notice/types/notice';

const mockNotices = {
  content: [
    { id: 21, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 20, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 19, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 18, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 17, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 16, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 15, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 14, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 13, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 12, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 11, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 10, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 9, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 8, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 7, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 6, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 5, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 4, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 3, title: '회의록 업로드', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 2, title: '대회 참가 안내', createdAt: '2025-09-02T02:41:38', author: '개발진' },
    { id: 1, title: '공모전 모집', createdAt: '2025-09-02T02:41:38', author: '개발진' },
  ],
  pageInfo: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 3,
    totalElements: 21,
  },
};

const mockNoticeDetail = {
  id: 1,
  title: '동아리 평가 기준 안내',
  content:
    '개편된 동아리 평가 기준 안내드립니다.\n동아리 평가 기준은 24-2학기부터 적용되니 참고 부탁드립니다.\n감사합니다.',
  createdAt: '2024-05-23T00:00:00',
  author: '김라이언',
  email: 'jnupole004@gmail.com',
  file: 'test.pdf',
};

export const noticeRepository = {
  getNoticesByPage: (page: number, size: number) => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const pagedContent = mockNotices.content.slice(startIndex, endIndex);
    const totalElements = mockNotices.pageInfo.totalElements;
    const totalPages = Math.ceil(totalElements / size);

    return {
      content: pagedContent,
      pageInfo: {
        currentPage: page,
        pageSize: size,
        totalPages,
        totalElements,
      },
    };
  },

  getNoticeDetailById: (id: number): NoticeDetail | undefined => {
    if (mockNoticeDetail.id === id) return mockNoticeDetail;
    const found = mockNotices.content.find((n) => n.id === id);
    if (!found) return undefined;
    return {
      ...found,
      content: mockNoticeDetail.content,
      email: mockNoticeDetail.email,
      file: mockNoticeDetail.file,
    };
  },
};
