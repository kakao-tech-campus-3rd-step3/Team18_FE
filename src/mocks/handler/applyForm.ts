import { http, HttpResponse, type PathParams } from 'msw';
import { applyFormRepository } from '../repositories/applyForm';
import type { ApplicationForm } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

const transformOptionsToObjects = (questions: any[]) => {
  return questions.map((question) => {
    if (question.optionList && question.optionList.every((opt: any) => typeof opt === 'string')) {
      return {
        ...question,
        optionList: question.optionList.map((option: string) => ({ value: option })),
      };
    }
    return question;
  });
};

const getApplyFormResolver = ({ params }: { params: PathParams }) => {
  const { clubId } = params;
  if (typeof clubId !== 'string') return new HttpResponse(null, { status: 400 });

  const form = applyFormRepository.getApplyForm(clubId);

  if (!form) {
    return new HttpResponse(null, { status: 404 });
  }

  return HttpResponse.json(form, { status: 200 });
};

const postApplyFormResolver = async ({
  request,
  params,
}: {
  request: Request;
  params: PathParams;
}) => {
  const { clubId } = params;
  if (typeof clubId !== 'string') return new HttpResponse(null, { status: 400 });

  const newForm = (await request.json()) as ApplicationForm;

  const transformedForm = {
    ...newForm,
    formQuestions: transformOptionsToObjects(newForm.formQuestions),
  };

  const createdForm = applyFormRepository.createApplyForm(
    clubId,
    transformedForm as ApplicationForm,
  );

  if (!createdForm) {
    return new HttpResponse('Conflict: Form already exists', { status: 409 });
  }

  return HttpResponse.json(createdForm, { status: 201 });
};

const patchApplyFormResolver = async ({
  request,
  params,
}: {
  request: Request;
  params: PathParams;
}) => {
  const { clubId } = params;
  if (typeof clubId !== 'string') return new HttpResponse(null, { status: 400 });

  const updatedFormInfo = (await request.json()) as Partial<ApplicationForm>;

  if (updatedFormInfo.formQuestions) {
    updatedFormInfo.formQuestions = transformOptionsToObjects(updatedFormInfo.formQuestions);
  }

  const updatedForm = applyFormRepository.updateApplyForm(
    clubId,
    updatedFormInfo as Partial<ApplicationForm>,
  );

  if (!updatedForm) {
    return new HttpResponse('Not Found', { status: 404 });
  }

  return HttpResponse.json(updatedForm, { status: 200 });
};

export const applyFormHandlers = [
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/apply-form',
    getApplyFormResolver,
  ),
  http.post(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/apply-form',
    postApplyFormResolver,
  ),
  http.patch(
    import.meta.env.VITE_API_BASE_URL + '/clubs/:clubId/dashboard/apply-form',
    patchApplyFormResolver,
  ),
];
