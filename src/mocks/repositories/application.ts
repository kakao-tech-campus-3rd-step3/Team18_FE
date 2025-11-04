import type { ApplicationForm } from '@/pages/user/Apply/type/apply.ts';

export const Application: ApplicationForm = {
  title: '인터엑스 지원서',
  description: '인터엑스 동아리 설명',
  formQuestions: [
    {
      questionNum: 1,
      questionType: 'RADIO',
      question: '개발 경험이 있으신가요?',
      required: false,
      optionList: ['예', '아니오'],
    },
    {
      questionNum: 2,
      questionType: 'TEXT',
      question: '자기소개를 간단히 적어주세요.',
      required: true,
    },
    {
      questionNum: 3,
      questionType: 'TIME_SLOT',
      question: '면접가능 날짜는?',
      required: true,
      timeSlotOptions: [
        {
          date: '2025-09-24',
          availableTime: { start: '10:00', end: '12:00' },
        },
        {
          date: '2025-09-27',
          availableTime: { start: '10:00', end: '21:00' },
        },
      ],
    },
  ],
};

export const ApplicationRepository = {
  getClubApplication: (Id: string) => {
    Number(Id);
    return Application;
  },
};
