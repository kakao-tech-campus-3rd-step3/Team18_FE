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

const mockNoticeDetail: NoticeDetail = {
  id: 1,
  title: '학기 초 공지',
  content: '2025학년도 1학기 공지사항입니다. 반드시 확인하세요.',
  createdAt: null,
  author: '홍길동05',
  email: 'user05@example.com',
  file: [
    {
      id: 1,
      name: '81층짜리 집.png',
      presignedUrl: 'https://file-bucket-test-004.s3.ap-northeast-2.amazonaws.com/example1.png',
      objectUrl: 'https://file-bucket-test-004.s3.ap-northeast-2.amazonaws.com/example1.png',
    },
    {
      id: 2,
      name: '[양식] 소중마일리지 신청서 양식.hwp',
      presignedUrl: 'https://file-bucket-test-004.s3.ap-northeast-2.amazonaws.com/example2.hwp',
      objectUrl: 'https://file-bucket-test-004.s3.ap-northeast-2.amazonaws.com/example2.hwp',
    },
  ],
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
