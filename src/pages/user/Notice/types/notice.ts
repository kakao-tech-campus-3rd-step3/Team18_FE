export type Notice = {
  id: number;
  title: string;
  createdAt: string | null;
  author: string;
};

export type NoticeDetail = Notice & {
  content: string;
  email: string;
  file: string;
};

export type NoticePageInfo = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
};

export type NoticeListResponse = {
  content: Notice[];
  pageInfo: NoticePageInfo;
};
