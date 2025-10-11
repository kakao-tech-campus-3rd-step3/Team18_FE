import type {
  ApplicationForm,
  ApplicationFormRequest,
  FormInputs,
  PostInterviewSchedule,
} from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (Id: number): Promise<ApplicationForm> => {
  const response = await fetch(import.meta.env.VITE_API_BASE_URL + `/clubs/${Id}/apply`);
  return await response.json();
};

export const postApplicationForm = async (
  clubId: number,
  formData: FormInputs,
  questionArray: string[],
): Promise<ApplicationFormRequest> => {
  const applicationDto = applicationFormDto(formData, questionArray);

  const response = await fetch(
    import.meta.env.VITE_API_BASE_URL + `/clubs/${clubId}/apply-submit`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationDto),
    },
  );
  return await response.json();
};

export const applicationFormDto = (formData: FormInputs, questionArray: string[]) => {
  const interviewDateAnswer: PostInterviewSchedule[] = formData.selectedInterviewSchedule;
  const newFormDataAnswers: object[] = [...formData.answers, { interviewDateAnswer }];

  return {
    email: formData.email,
    name: formData.name,
    studentId: formData.studentId,
    phoneNumber: formData.phoneNumber,
    department: formData.department,
    answers: [
      ...newFormDataAnswers.map((answer, index) => {
        return {
          questionNum: index,
          question: questionArray[index],
          answer: answer,
        };
      }),
    ],
  };
};
