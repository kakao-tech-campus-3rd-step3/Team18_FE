import { http, HttpResponse, type PathParams } from 'msw';
import { noticeRepository } from '@/mocks/repositories/notice';

const getNoticesResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 1;
  const size = Number(url.searchParams.get('size')) || 10;
  const data = noticeRepository.getNoticesByPage(page, size);
  return HttpResponse.json(data, { status: 200 });
};

const getNoticeDetailResolver = ({ params }: { params: PathParams }) => {
  const { noticeId } = params;
  const detail = noticeRepository.getNoticeDetailById(Number(noticeId));
  if (!detail) return new HttpResponse('Not Found', { status: 404 });
  return HttpResponse.json(detail, { status: 200 });
};

export const noticeHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/notices', getNoticesResolver),
  http.get(import.meta.env.VITE_API_BASE_URL + '/notices/:noticeId', getNoticeDetailResolver),
];
