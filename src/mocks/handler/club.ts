import { http, HttpResponse } from 'msw';
import { clubRepoitory } from '../repositories/club';

const getClubsResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const categoryName = url.searchParams.get('categoryName') ?? '전체';
  const clubs = clubRepoitory.getClubsByCategory(categoryName);
  return HttpResponse.json({ clubs }, { status: 200 });
};

export const clubHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/search/category', getClubsResolver),
];
