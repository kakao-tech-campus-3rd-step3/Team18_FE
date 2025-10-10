import { http, HttpResponse, type PathParams } from 'msw';
import { ApplicationRepository } from '@/mocks/repositories/application.ts';
import { clubRepository } from '../repositories/club';

const getClubsResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const categoryName = url.searchParams.get('category') ?? 'all';
  const clubs = clubRepository.getClubsByCategory(categoryName);
  return HttpResponse.json({ clubs }, { status: 200 });
};

interface ClubApplicationParams extends PathParams {
  clubId: string;
}

const getClubApplicationResolver = ({ params }: { params: ClubApplicationParams }) => {
  const { clubId } = params;
  const applicationFromData = ApplicationRepository.getClubApplication(clubId);
  return HttpResponse.json(applicationFromData, {
    status: 200,
  });
};

const postApplicationSubmitResolver = async ({ request }: { request: Request }) => {
  const body = await request.json();
  const { studentId } = body;
  return HttpResponse.json({
    studentId,
    submittedAt: new Date().toISOString(),
    requiresConfirmation: true,
  });
};

const getClubDetailResolver = ({ params }: { params: PathParams }) => {
  const { clubId } = params;
  const club = clubRepository.getClubDetailById(Number(clubId));

  if (!club) {
    return new HttpResponse('Not Found', { status: 404 });
  }

  return HttpResponse.json(club, { status: 200 });
};

export const clubHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/search/category', getClubsResolver),
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:Id/apply', getClubApplicationResolver),
  http.post(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/apply-submit',
    postApplicationSubmitResolver,
  ),
  http.get('/api/clubs/:clubId', getClubDetailResolver),
];
