import { http, HttpResponse, type PathParams } from 'msw';
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

const updateApplicationStatusResolver = async ({
  params,
  request,
}: {
  params: PathParams;
  request: Request;
}) => {
  const { applicationId } = params as { applicationId: string };
  const body = (await request.json()) as UpdateApplicationStatusRequest;

  applicantRepository.updateApplicationStatus(Number(applicationId), body.status);

  return HttpResponse.json({ status: 200 });
};

const getCommentsResolver = () => {
  const comments = applicantRepository.getComments();
  return HttpResponse.json(comments, { status: 200 });
};

export interface CreateCommentRequest {
  content: string;
  rating: number;
}

const createCommentResolver = async ({ request }: { request: Request }) => {
  const { content, rating } = (await request.json()) as CreateCommentRequest;
  const newComment = applicantRepository.createComment(content, rating);
  return HttpResponse.json(newComment, { status: 201 });
};

const deleteCommentResolver = ({ params }: { params: PathParams }) => {
  const { commentId } = params as { commentId: string };
  applicantRepository.deleteComment(Number(commentId));
  return HttpResponse.json(null, { status: 200 });
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
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/applications/:applicationId/comments',
    getCommentsResolver,
  ),
  http.post(
    import.meta.env.VITE_API_BASE_URL + '/applications/:applicationId/comments',
    createCommentResolver,
  ),
  http.delete(
    import.meta.env.VITE_API_BASE_URL + '/applications/:applicationId/comments/:commentId',
    deleteCommentResolver,
  ),
];
