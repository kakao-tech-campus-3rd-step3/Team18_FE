export type Notice = {
  id: number;
  title: string;
  createdAt: string;
  author: string;
};

export type NoticeDetail = Notice & {
  content: string;
  email: string;
  file: string;
};
