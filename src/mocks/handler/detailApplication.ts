import { http, HttpResponse } from 'msw';
import { detailApplicationRepository } from '../repositories/detailApplication';

const getDetailApplicationResolver = () => {
  const applicants = detailApplicationRepository.getDetailApplication();
  return HttpResponse.json(applicants, { status: 200 });
};

export const detailApplicationHandlers = [
  http.get('/api/clubs/:clubId/applicants/:applicantId/application', getDetailApplicationResolver),
];
