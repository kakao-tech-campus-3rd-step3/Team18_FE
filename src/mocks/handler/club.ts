import { http, HttpResponse, type PathParams } from 'msw';
import { clubRepository } from '../repositories/club';
import { ApplicationRepository } from '@/mocks/repositories/application.ts';

const getClubsResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const categoryName = url.searchParams.get('categoryName') ?? 'all';
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

export const clubHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/search/category', getClubsResolver),
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:Id/apply', getClubApplicationResolver),
  http.post(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/apply-submit',
    postApplicationSubmitResolver,
  ),
];
