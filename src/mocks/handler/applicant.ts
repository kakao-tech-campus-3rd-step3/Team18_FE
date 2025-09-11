import { http, HttpResponse } from 'msw';
import { applicantRepository } from '../repositories/applicant';

const getApplicantsResolver = () => {
  const applicants = applicantRepository.getApplicants();
  return HttpResponse.json(applicants, { status: 200 });
};

export const applicantHandlers = [
  http.get('/api/clubs/:clubId/applicants', getApplicantsResolver),
];
