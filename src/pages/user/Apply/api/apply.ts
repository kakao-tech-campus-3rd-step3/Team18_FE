import axios, { AxiosError, type AxiosResponse } from 'axios';
import { apiInstance } from '@/api/initInstance';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type {
  ApplicationForm,
  FormInputs,
  PostInterviewSchedule,
} from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (clubId: number): Promise<ApplicationForm> => {
  try {
    const response: AxiosResponse<ApplicationForm> = await apiInstance.get(
      `/clubs/${clubId}/apply`,
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.data);
    }
    throw e;
  }
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = applicationFormDto(formData, questionArray);

  try {
    const response = await apiInstance.post(`/clubs/${clubId}/apply-submit`, applicationDto);

    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError<ErrorResponse>;
    throw new Error(error.response?.data.message || '지원서 제출이 실패하였습니다.');
  }
};

export const overwriteApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
) => {
  const applicationDto = applicationFormDto(formData, questionArray);

  try {
    const overwriteResponse = await apiInstance.post(`/clubs/${clubId}/apply-submit`, {
      ...applicationDto,
      overwrite: true,
    });
    return overwriteResponse.data;
  } catch (e: unknown) {
    const error = e as AxiosError<ErrorResponse>;
    throw new Error(error.response?.data.message);
  }
};

export const applicationFormDto = (formData: FormInputs, questionArray: string[]) => {
  const interviewDateAnswer: PostInterviewSchedule[] = formData.selectedInterviewSchedule;
  let formDataAnswers = formData.answers;

  if (interviewDateAnswer.length > 0) {
    formDataAnswers = [...formData.answers, { interviewDateAnswer }];
  }

  return {
    email: formData.email,
    name: formData.name,
    studentId: formData.studentId,
    phoneNumber: formData.phoneNumber,
    department: formData.department,
    answers: [
      ...formDataAnswers.map((answer, index) => {
        return {
          questionNum: index,
          question: questionArray[index],
          answer: answer,
        };
      }),
    ],
  };
};
