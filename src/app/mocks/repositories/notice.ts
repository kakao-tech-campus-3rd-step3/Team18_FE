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
      presignedUrl:
        'https://dongarium.s3.ap-northeast-2.amazonaws.com/attachments/81%EC%B8%B5%EC%A7%9C%EB%A6%AC%20%EC%A7%91.png?response-content-disposition=attachment%3B%20filename%3D%22download%22%3B%20filename%2A%3DUTF-8%27%2781%25EC%25B8%25B5%25EC%25A7%259C%25EB%25A6%25AC%2520%25EC%25A7%2591.png&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251102T081855Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAVD4HEN24SH7XSVOD%2F20251102%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Expires=604800&X-Amz-Signature=c229fae143b1a0bf9739b53e8d49a2cc3831303e0ff45db31d9eb47710f0e4cd',
      objectUrl:
        'https://dongarium.s3.ap-northeast-2.amazonaws.com/attachments/81%EC%B8%B5%EC%A7%9C%EB%A6%AC+%EC%A7%91.png',
    },
    {
      id: 2,
      name: '[양식] 소중마일리지 신청서 양식.hwp',
      presignedUrl:
        'https://dongarium.s3.ap-northeast-2.amazonaws.com/attachments/%5B%EC%96%91%EC%8B%9D%5D%20%EC%86%8C%EC%A4%91%EB%A7%88%EC%9D%BC%EB%A6%AC%EC%A7%80%20%EC%8B%A0%EC%B2%AD%EC%84%9C%20%EC%96%91%EC%8B%9D.hwp?response-content-disposition=attachment%3B%20filename%3D%22download%22%3B%20filename%2A%3DUTF-8%27%27%255B%25EC%2596%2591%25EC%258B%259D%255D%2520%25EC%2586%258C%25EC%25A4%2591%25EB%25A7%2588%25EC%259D%25BC%25EB%25A6%25AC%25EC%25A7%2580%2520%25EC%258B%25A0%25EC%25B2%25AD%25EC%2584%259C%2520%25EC%2596%2591%25EC%258B%259D.hwp&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251102T081855Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAVD4HEN24SH7XSVOD%2F20251102%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Expires=604800&X-Amz-Signature=fb384c27fd488931f4547fb8607071433d538914323e456ac3b25c7b8c311d16',
      objectUrl:
        'https://dongarium.s3.ap-northeast-2.amazonaws.com/attachments/%5B%EC%96%91%EC%8B%9D%5D+%EC%86%8C%EC%A4%91%EB%A7%88%EC%9D%BC%EB%A6%AC%EC%A7%80+%EC%8B%A0%EC%B2%AD%EC%84%9C+%EC%96%91%EC%8B%9D.hwp',
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
