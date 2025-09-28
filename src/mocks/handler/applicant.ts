import { http, HttpResponse } from 'msw';
import { applicantRepository } from '../repositories/applicant';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

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

interface UpdateApplicationStatusRequest {
  status: DetailApplication['status'];
}

const updateApplicationStatusResolver = async ({ params, request }: any) => {
  const { applicationId } = params as { applicationId: string };
  const body = (await request.json()) as UpdateApplicationStatusRequest;

  applicantRepository.updateApplicationStatus(Number(applicationId), body.status);

  return HttpResponse.json({ status: 200 });
};

export const applicantHandlers = [
  http.get(import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/applicants', getApplicantsResolver),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/applicants/:applicantId/application',
    getDetailApplicationResolver,
  ),
  http.patch(
    import.meta.env.VITE_API_BASE_URL + '/applications/:applicationId',
    updateApplicationStatusResolver,
  ),
];
