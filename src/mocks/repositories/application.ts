import type { ApplicationForm } from '@/pages/user/Apply/type/apply.ts';

export const Application: ApplicationForm = {
  title: '인터엑스 지원서',
  description: '인터엑스 동아리 설명',
  questions: [
    {
      questionNum: 1,
      questionType: 'CHECKBOX',
      question: '면접가능요일은?',
      required: true,
      optionList: ['월', '화', '수', '목', '금'],
    },
    {
      questionNum: 2,
      questionType: 'TEXT',
      question: '자기소개를 간단히 적어주세요.',
      required: true,
    },
    {
      questionNum: 3,
      questionType: 'RADIO',
      question: '개발 경험이 있으신가요?',
      required: false,
      optionList: ['예', '아니오'],
    },
  ],
};

export const ApplicationRepoitory = {
  getClubApplication: (Id: string) => {
    Number(Id);
    return Application;
  },
};
