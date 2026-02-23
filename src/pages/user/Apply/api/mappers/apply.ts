import { QuestionTypes } from '../../constants/questionType';
import type { FormInputs } from '../../type/apply';

export const toApplyRequest = (formData: FormInputs, questions: string[]) => {
  const formDataAnswers = [...formData.answers];

  return {
    email: formData.email,
    name: formData.name,
    studentId: formData.studentId,
    phoneNumber: formData.phoneNumber,
    department: formData.department,
    answers: formDataAnswers.map((answer, index) => {
      if (answer?.questionType === QuestionTypes.TIME_SLOT) {
        return {
          questionNum: index,
          question: questions[index],
          answer: {
            value: formData.selectedInterviewSchedule,
            questionType: QuestionTypes.TIME_SLOT,
          },
        };
      }
      return {
        questionNum: index,
        question: questions[index],
        answer,
      };
    }),
  };
};
