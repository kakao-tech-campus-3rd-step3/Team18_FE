import { http, HttpResponse, type PathParams } from 'msw';
import { applyFormRepository } from '../repositories/applyForm';

const getApplyFormResolver = ({ params }: { params: PathParams }) => {
  const { clubId } = params;
  if (typeof clubId !== 'string') return new HttpResponse(null, { status: 400 });

  const form = applyFormRepository.getApplyForm(clubId);

  if (!form) {
    return new HttpResponse(null, { status: 404 });
  }

  return HttpResponse.json(form, { status: 200 });
};

export const applyFormHandlers = [
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/apply-form',
    getApplyFormResolver,
  ),
];
