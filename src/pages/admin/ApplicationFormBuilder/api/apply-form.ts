import axios, { type AxiosResponse } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { ApplicationForm, Question } from '../types/fieldType';

const transformQuestionOptions = (questions: Question[]) => {
  return questions.map((question) => {
    if (question.optionList) {
      return {
        ...question,
        optionList: question.optionList.map((option) => option.value),
      };
    }
    return question;
  });
};

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/dashboard/apply-form`,
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data);
    }
    throw e;
  }
};

export const postApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: ApplicationForm;
}): Promise<ApplicationForm> => {
  const requestBody = {
    ...form,
    formQuestions: transformQuestionOptions(form.formQuestions),
  };

  const response: AxiosResponse<ApplicationForm> = await apiInstance.post(
    `/clubs/${clubId}/dashboard/apply-form`,
    requestBody,
  );
  return response.data;
};

export const patchApplicationForm = async ({
  clubId,
  form,
}: {
  clubId: number;
  form: Partial<ApplicationForm>;
}): Promise<ApplicationForm> => {
  const { formQuestions, ...restOfForm } = form;
  const requestBody = { ...restOfForm } as Partial<ApplicationForm>;

  if (formQuestions) {
    (requestBody as any).formQuestions = transformQuestionOptions(formQuestions);
  }

  const response: AxiosResponse<ApplicationForm> = await apiInstance.patch(
    `/clubs/${clubId}/dashboard/apply-form`,
    requestBody,
  );
  return response.data;
};
