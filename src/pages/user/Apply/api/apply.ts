import type {
  ApplicationForm,
  ApplicationFormRequest,
  FormInputs,
  PostInterviewSchedule,
} from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (Id: number): Promise<ApplicationForm> => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${Id}/apply`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('지원서 양식을 가져오지 못했습니다');
  return await response.json();
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
): Promise<ApplicationFormRequest> => {
  const applicationDto = applicationFormDto(formData, questionArray);

  const url = `${import.meta.env.VITE_API_BASE_URL}/clubs/${clubId}/apply-submit`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationDto),
  });

  if (!response.ok) throw new Error('지원서 양식을 제출하지 못했습니다');
  return await response.json();
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
