import type { ApplicationFormData } from '@/pages/admin/ApplicationFormBuilder/types/fieldType';

const applyForms: Record<string, ApplicationFormData> = {
  '1': {
    title: '카태켐 12기 지원서',
    description: '카카오테크 캠퍼스 12기 모집을 위한 지원서입니다.',
    recruitDate: '2025-03-01 ~ 2025-03-31',
    formQuestions: [
      {
        questionNum: 1,
        question: '가장 자신 있는 프로그래밍 언어는 무엇인가요?',
        fieldType: 'TEXT',
        isRequired: true,
        displayOrder: 1,
      },
      {
        questionNum: 2,
        question: '프로그래밍을 할 수 있나요?',
        fieldType: 'RADIO',
        isRequired: true,
        optionList: [{ value: '예' }, { value: '아니오' }],
        displayOrder: 2,
      },
      {
        questionNum: 3,
        question: '가장 자신 있는 프로그래밍 언어는 무엇인가요?',
        fieldType: 'CHECKBOX',
        isRequired: true,
        optionList: [{ value: 'JAVA' }, { value: 'C' }, { value: 'C++' }],
        displayOrder: 3,
      },
      {
        questionNum: 4,
        question: '면접 시간을 설정해주세요.',
        fieldType: 'TIME_SLOT',
        isRequired: true,
        displayOrder: 4,
        timeSlotOptions: {
          date: '2025-09-24 ~ 2025-09-25',
          availableTime: {
            start: '10:00',
            end: '21:00',
          },
        },
      },
    ],
  },
};

export const applyFormRepository = {
  getApplyForm: (clubId: string) => {
    return applyForms[clubId];
  },

  createApplyForm: (clubId: string, form: ApplicationFormData) => {
    if (applyForms[clubId]) {
      return null;
    }
    applyForms[clubId] = form;
    return form;
  },

  updateApplyForm: (clubId: string, form: Partial<ApplicationFormData>) => {
    if (!applyForms[clubId]) {
      return null;
    }
    applyForms[clubId] = { ...applyForms[clubId], ...form };
    return applyForms[clubId];
  },
};
