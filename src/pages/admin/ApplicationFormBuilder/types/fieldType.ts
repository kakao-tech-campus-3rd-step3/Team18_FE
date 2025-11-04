export type QuestionType = '텍스트' | '라디오' | '체크박스' | '타임슬롯';

type TimeSlotOption = {
  date: string;
  availableTime: {
    start: string;
    end: string;
  };
};

export type QuestionFormData = {
  questionNum: number;
  fieldType: 'RADIO' | 'TEXT' | 'TIME_SLOT' | 'CHECKBOX';
  question: string;
  isRequired: boolean;
  optionList?: { value: string }[];
  timeSlotOptions?: TimeSlotOption;
  displayOrder: number;
};

export type ApplicationFormData = {
  title: string;
  description: string;
  recruitDate: string;
  formQuestions: QuestionFormData[];
};

export type Question = {
  questionNum: number;
  fieldType: 'RADIO' | 'TEXT' | 'TIME_SLOT' | 'CHECKBOX';
  question: string;
  isRequired: boolean;
  optionList?: (string | { value: string })[];
  timeSlotOptions?: TimeSlotOption[];
  displayOrder: number;
};

export type ApplicationForm = {
  title: string;
  description: string;
  recruitDate: string;
  formQuestions: Question[];
};
