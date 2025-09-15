import { http, HttpResponse } from 'msw';
import { applicantRepository } from '../repositories/applicant';

const getApplicantsResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');

  const applicants = applicantRepository.getApplicantsResolver(
    status === 'ACCEPTED'
      ? '합격'
      : status === 'REJECTED'
        ? '불합격'
        : status === 'PENDING'
          ? '미정'
          : '전체',
  );

  return HttpResponse.json(applicants, { status: 200 });
};

export const applicantHandlers = [http.get('/api/clubs/:clubId/applicants', getApplicantsResolver)];
