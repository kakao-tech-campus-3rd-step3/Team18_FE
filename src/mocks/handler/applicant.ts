import { http, HttpResponse } from 'msw';
import { applicantRepository } from '../repositories/applicant';

const getApplicantsResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');

  const applicants = applicantRepository.getApplicants(status);

  return HttpResponse.json(applicants, { status: 200 });
};

const getDetailApplicationResolver = () => {
  const application = applicantRepository.getDetailApplication();

  return HttpResponse.json(application, { status: 200 });
};

export const applicantHandlers = [
  http.get('/api/clubs/:clubId/applicants', getApplicantsResolver),
  http.get('/api/clubs/:clubId/applicants/:applicantId/application', getDetailApplicationResolver),
];
