import { http, HttpResponse, type PathParams } from 'msw';
import { ApplicationRepository } from '@/mocks/repositories/application.ts';
import { clubRepository, clubReviewRepository } from '../repositories/club';

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

const postClubDetailResolver = async ({
  params,
  request,
}: {
  params: PathParams;
  request: Request;
}) => {
  const { clubId } = params;
  const body = await request.json();

  const existingClub = clubRepository.getClubDetailById(Number(clubId));

  if (!existingClub) {
    return new HttpResponse('Not Found', { status: 404 });
  }

  const updatedClub = { ...existingClub, ...body };
  clubRepository.updateClubDetail(Number(clubId), updatedClub);

  return HttpResponse.json(updatedClub, { status: 200 });
};

const getClubReviewsResolver = ({ params }: { params: PathParams }) => {
  const { clubId } = params;
  const reviews = clubReviewRepository.getReviewsByClubId(Number(clubId));
  return HttpResponse.json({ reviews }, { status: 200 });
};

const postClubReviewResolver = async ({
  params,
  request,
}: {
  params: PathParams;
  request: Request;
}) => {
  const { clubId } = params;
  const body = await request.json();
  const newReview = clubReviewRepository.addReview(Number(clubId), body);
  return HttpResponse.json(newReview, { status: 201 });
};

const putClubImagesResolver = async ({
  params,
  request,
}: {
  params: PathParams;
  request: Request;
}) => {
  const { clubId } = params;
  const formData = await request.formData();

  const files: File[] = [];
  const remainingUrls: string[] = [];

  formData.forEach((value) => {
    if (value instanceof File) {
      files.push(value);
    } else if (typeof value === 'string') {
      remainingUrls.push(value);
    }
  });

  const updatedImages = clubRepository.uploadClubImages(Number(clubId), files, remainingUrls);

  if (!updatedImages) {
    return new HttpResponse('Not Found', { status: 404 });
  }

  return HttpResponse.json(updatedImages, { status: 200 });
};

export const clubHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs?category', getClubsResolver),
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:Id/apply', getClubApplicationResolver),
  http.post(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/apply-submit',
    postApplicationSubmitResolver,
  ),
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId', getClubDetailResolver),
  http.post(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId', postClubDetailResolver),
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/reviews', getClubReviewsResolver),
  http.post(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/reviews', postClubReviewResolver),
  http.put(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/images', putClubImagesResolver),
];
